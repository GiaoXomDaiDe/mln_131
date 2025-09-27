import {
    getAllHoChiMinhUnityKnowledge,
    getAllUnityKeywords,
} from '@/data/ho-chi-minh-unity-knowledge'
import { OpenAIApiClient, type OpenAIChatMessage } from './OpenAIApiClient'

export interface LearningProgress {
    userId: string
    completedLessons: string[]
    quizScores: { [lessonId: string]: number }
    weakAreas: string[]
    strongAreas: string[]
    studyTime: number // minutes
    lastActivity: Date
}

export interface PersonalizedSuggestion {
    type: 'lesson' | 'review' | 'practice' | 'concept'
    title: string
    description: string
    priority: 'high' | 'medium' | 'low'
    estimatedTime: number // minutes
    lessonId?: string
}

export interface ChatContext {
    userId: string
    conversationHistory: OpenAIChatMessage[]
    currentTopic?: string
    learningGoals?: string[]
}

export class AIPersonalTutor {
    private openai: OpenAIApiClient
    private curriculumKnowledge: string
    private chatContexts: Map<string, ChatContext> = new Map()
    private readonly MAX_HISTORY = 10 // Giới hạn lịch sử chat

    constructor(apiKey: string) {
        this.openai = new OpenAIApiClient(apiKey, 'gpt-4o')
        this.curriculumKnowledge = getAllHoChiMinhUnityKnowledge()
    }

    /**
     * Chat với gia sư AI cá nhân hóa với context tốt hơn
     */
    async chatWithTutor(
        userId: string,
        message: string,
        progress?: LearningProgress,
        additionalContext?: string
    ): Promise<string> {
        // Lấy hoặc tạo context chat cho user
        let context = this.chatContexts.get(userId)
        if (!context) {
            context = {
                userId,
                conversationHistory: [],
                currentTopic: undefined,
                learningGoals: [],
            }
            this.chatContexts.set(userId, context)
        }

        // Tạo system prompt cá nhân hóa với context bổ sung
        const systemPrompt = this.createPersonalizedSystemPrompt(
            progress,
            additionalContext
        )

        // Chuẩn bị messages với context
        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            ...context.conversationHistory.slice(-this.MAX_HISTORY),
            { role: 'user', content: message },
        ]

        try {
            // Kiểm tra tính liên quan trước khi gọi API
            if (!this.isRelevantQuestion(message)) {
                return this.createRejectionResponse()
            }

            const response = await this.openai.chat(messages, {
                temperature: 0.7,
                max_tokens: 1500,
            })

            // Cập nhật lịch sử chat
            context.conversationHistory.push(
                { role: 'user', content: message },
                { role: 'assistant', content: response }
            )

            // Giới hạn lịch sử để không vượt quá token limit
            if (context.conversationHistory.length > this.MAX_HISTORY * 2) {
                context.conversationHistory = context.conversationHistory.slice(
                    -this.MAX_HISTORY * 2
                )
            }

            return response
        } catch (error) {
            console.error('Error in AI tutor chat:', error)
            throw new Error('Không thể xử lý tin nhắn. Vui lòng thử lại.')
        }
    }

    /**
     * Đề xuất bài học tiếp theo dựa trên tiến độ
     */
    async suggestNextLesson(
        progress: LearningProgress
    ): Promise<PersonalizedSuggestion[]> {
        const prompt = this.createSuggestionPrompt(progress)

        const messages: OpenAIChatMessage[] = [
            {
                role: 'system',
                content: `Bạn là gia sư AI chuyên về Chủ nghĩa xã hội khoa học. Nhiệm vụ là phân tích tiến độ học tập và đưa ra đề xuất cá nhân hóa.

KIẾN THỨC GIÁO TRÌNH:
${this.curriculumKnowledge}

Trả về kết quả dưới dạng JSON array với format:
{
  "suggestions": [
    {
      "type": "lesson|review|practice|concept",
      "title": "Tiêu đề đề xuất",
      "description": "Mô tả chi tiết",
      "priority": "high|medium|low",
      "estimatedTime": 30,
      "lessonId": "4.1.1"
    }
  ]
}`,
            },
            { role: 'user', content: prompt },
        ]

        try {
            const response = await this.openai.chat(messages, {
                temperature: 0.5,
                max_tokens: 1000,
            })

            const data = JSON.parse(response)
            return data.suggestions || []
        } catch (error) {
            console.error('Error generating suggestions:', error)
            return this.getFallbackSuggestions(progress)
        }
    }

    /**
     * Phân tích điểm yếu và đưa ra kế hoạch học tập
     */
    async analyzeWeaknesses(progress: LearningProgress): Promise<{
        weakAreas: string[]
        improvementPlan: string[]
        recommendedActions: PersonalizedSuggestion[]
    }> {
        const prompt = `Phân tích tiến độ học tập sau và đưa ra kế hoạch cải thiện:

TIẾN ĐỘ HỌC TẬP:
- Bài học đã hoàn thành: ${progress.completedLessons.join(', ')}
- Điểm quiz: ${JSON.stringify(progress.quizScores)}
- Điểm yếu hiện tại: ${progress.weakAreas.join(', ')}
- Điểm mạnh: ${progress.strongAreas.join(', ')}
- Thời gian học: ${progress.studyTime} phút

Hãy:
1. Xác định các điểm yếu chính cần cải thiện
2. Đề xuất kế hoạch học tập cụ thể
3. Đưa ra các hành động khuyến nghị

Trả về JSON format:
{
  "weakAreas": ["Điểm yếu 1", "Điểm yếu 2"],
  "improvementPlan": ["Bước 1", "Bước 2"],
  "recommendedActions": [...]
}`

        const messages: OpenAIChatMessage[] = [
            {
                role: 'system',
                content: `Bạn là chuyên gia phân tích học tập và gia sư AI. Sử dụng kiến thức giáo trình để đưa ra phân tích chính xác.

KIẾN THỨC: ${this.curriculumKnowledge.slice(0, 3000)}...`,
            },
            { role: 'user', content: prompt },
        ]

        try {
            const response = await this.openai.chat(messages, {
                temperature: 0.4,
                max_tokens: 1200,
            })

            return JSON.parse(response)
        } catch (error) {
            console.error('Error analyzing weaknesses:', error)
            return {
                weakAreas: progress.weakAreas,
                improvementPlan: [
                    'Ôn tập các khái niệm cơ bản',
                    'Làm thêm bài quiz',
                ],
                recommendedActions: [],
            }
        }
    }

    /**
     * Reset chat context cho user
     */
    resetChatContext(userId: string): void {
        this.chatContexts.delete(userId)
    }

    /**
     * Tạo system prompt cá nhân hóa dựa trên tiến độ và context
     */
    private createPersonalizedSystemPrompt(
        progress?: LearningProgress,
        additionalContext?: string
    ): string {
        let personalizedInfo = ''

        if (progress) {
            personalizedInfo = `
THÔNG TIN HỌC VIÊN:
- Đã hoàn thành: ${Array.isArray(progress.completedLessons) ? progress.completedLessons.join(', ') : 'Chưa có'}
- Điểm yếu: ${Array.isArray(progress.weakAreas) ? progress.weakAreas.join(', ') : 'Chưa xác định'}  
- Điểm mạnh: ${Array.isArray(progress.strongAreas) ? progress.strongAreas.join(', ') : 'Chưa xác định'}
- Thời gian học: ${progress.studyTime || 0} phút
`
        }

        const contextInfo = additionalContext
            ? `\n\nBỐI CẢNH BỔ SUNG:\n${additionalContext}`
            : ''

        return `Bạn là AI GIA SƯ CHUYÊN VỀ TƯ TƯỞNG HỒ CHÍ MINH. Bạn CHỈ được phép trả lời các câu hỏi dựa trên kiến thức đã được cung cấp.

📚 KIẾN THỨC CHUYÊN MÔN DUY NHẤT:
${this.curriculumKnowledge}

${personalizedInfo}${contextInfo}

⛔ QUY TẮC NGHIÊM NGẶT:
1. CHỈ TRẢ LỜI các câu hỏi liên quan đến nội dung trên
2. KHÔNG BAO GIỜ trả lời về anime, game, phim, thể thao, giải trí, công nghệ, hoặc bất kỳ chủ đề khác
3. KHÔNG sử dụng kiến thức bên ngoài nội dung đã cung cấp
4. KHÔNG đoán hoặc sáng tạo thông tin không có trong kiến thức base
5. Nếu câu hỏi không liên quan, HÃY TỪ CHỐI ngay lập tức

✅ CHỈ TRẢ LỜI KHI:
- Câu hỏi về tư tưởng Hồ Chí Minh
- Câu hỏi về đại đoàn kết toàn dân tộc
- Câu hỏi về chủ nghĩa xã hội tại Việt Nam
- Chào hỏi thông thường
- Câu hỏi học tập liên quan

⛔ TỪ CHỐI NGAY LẬP TỨC nếu hỏi về:
- Anime, manga, game, giải trí
- Thể thao, đội bóng, nhân vật nổi tiếng
- Công nghệ, lập trình, AI, robot
- Đời sống cá nhân, tình yêu, sức khỏe
- Chính trị quốc tế (ngoài Việt Nam)
- Bất kỳ chủ đề khác không có trong kiến thức đã cho

🚀 PHONG CÁCH KHI TRẢ LỜI HỢP LỆ:
- Chỉ dựa trên nội dung kiến thức đã cung cấp
- Trích dẫn cụ thể từ tài liệu
- Giải thích rõ ràng, có cấu trúc
- Kết thúc với câu hỏi liên quan

NHỚ: Bạn là chuyên gia về Tư tưởng Hồ Chí Minh, KHÔNG phải AI tổng quát!`
    }

    /**
     * Kiểm tra tính liên quan của câu hỏi - CHẶT CHẼ
     */
    private isRelevantQuestion(message: string): boolean {
        // Kiểm tra chào hỏi trước
        if (this.isGreeting(message)) {
            return true
        }

        // Kiểm tra từ chối ngay nếu là các chủ đề bị cấm
        const forbiddenTopics = [
            // Giải trí
            'anime',
            'manga',
            'gundam',
            'naruto',
            'one piece',
            'dragon ball',
            'game',
            'gaming',
            'pokemon',
            'minecraft',
            'fortnite',
            'phim',
            'movie',
            'netflix',
            'youtube',
            'tiktok',
            // Thể thao
            'bóng đá',
            'football',
            'soccer',
            'tennis',
            'basketball',
            'messi',
            'ronaldo',
            'manchester',
            'barcelona',
            'real madrid',
            // Công nghệ
            'iphone',
            'samsung',
            'google',
            'facebook',
            'instagram',
            'apple',
            'microsoft',
            'tesla',
            'programming',
            'coding',
            'python',
            'javascript',
            'html',
            'css',
            'react',
            // Đời sống
            'tình yêu',
            'love',
            'relationship',
            'dating',
            'sức khỏe',
            'health',
            'bệnh',
            'thuốc',
            'bác sĩ',
            'ăn uống',
            'food',
            'món ăn',
            'nấu ăn',
            // Chính trị quốc tế (ngoài Việt Nam)
            'trump',
            'biden',
            'putin',
            'xi jinping',
            'america',
            'china',
            'russia',
            'ukraine',
            // Khoa học khác
            'toán học',
            'math',
            'vật lý',
            'physics',
            'hóa học',
            'chemistry',
            'sinh học',
            'biology',
            'địa lý',
            'geography',
        ]

        const lowerMessage = message.toLowerCase()
        if (forbiddenTopics.some((topic) => lowerMessage.includes(topic))) {
            return false
        }

        // Chỉ cho phép các từ khóa liên quan đến tư tưởng Hồ Chí Minh
        const allowedKeywords = getAllUnityKeywords()
        const coreKeywords = [
            // Tư tưởng Hồ Chí Minh
            'hồ chí minh',
            'bác hồ',
            'chủ tịch hồ',
            'tư tưởng hồ chí minh',
            // Đại đoàn kết
            'đại đoàn kết',
            'đoàn kết dân tộc',
            'đoàn kết toàn dân',
            // Chủ nghĩa xã hội Việt Nam
            'chủ nghĩa xã hội',
            'cnxh',
            'xhcn',
            'quá độ',
            // Lịch sử Việt Nam
            'việt nam',
            'cách mạng',
            'kháng chiến',
            'đổi mới',
            'việt minh',
            'mặt trận',
            'đảng cộng sản',
            // Câu hỏi học tập
            'là gì',
            'tại sao',
            'như thế nào',
            'giải thích',
            'ý nghĩa',
            'vai trò',
            'nguyên tắc',
            'phương pháp',
        ]

        const allValidKeywords = [...allowedKeywords, ...coreKeywords]
        const normalizedMessage = this.normalizeVietnameseText(lowerMessage)

        return allValidKeywords.some((keyword) => {
            const normalizedKeyword = this.normalizeVietnameseText(
                keyword.toLowerCase()
            )
            return normalizedMessage.includes(normalizedKeyword)
        })
    }

    /**
     * Kiểm tra câu hỏi liên quan đến học tập
     */
    private isStudyRelatedQuestion(message: string): boolean {
        const studyKeywords = [
            'học',
            'hoc',
            'ôn tập',
            'on tap',
            'bài tập',
            'bai tap',
            'kiểm tra',
            'kiem tra',
            'thi',
            'quiz',
            'câu hỏi',
            'cau hoi',
            'đáp án',
            'dap an',
            'giải',
            'giai',
            'hướng dẫn',
            'huong dan',
        ]
        const lowercaseMessage = message.toLowerCase()
        return studyKeywords.some((keyword) =>
            lowercaseMessage.includes(keyword)
        )
    }

    /**
     * Kiểm tra chào hỏi và các cuộc hội thoại xã giao
     */
    private isGreeting(message: string): boolean {
        const greetings = [
            // Chào hỏi
            'xin chào',
            'chào',
            'hello',
            'hi',
            'hey',
            // Cảm ơn
            'cảm ơn',
            'cam on',
            'thank',
            'thanks',
            'cảm tạ',
            // Tạm biệt
            'tạm biệt',
            'tam biet',
            'bye',
            'goodbye',
            'see you',
            // Hỏi thăm
            'bạn có khỏe',
            'ban co khoe',
            'how are you',
            'thế nào',
            // Giới thiệu
            'bạn là ai',
            'ban la ai',
            'who are you',
            'tôi có thể hỏi',
        ]
        const lowercaseMessage = message.toLowerCase()
        return greetings.some((greeting) => lowercaseMessage.includes(greeting))
    }

    /**
     * Chuẩn hóa tiếng Việt để so sánh
     */
    private normalizeVietnameseText(text: string): string {
        return text
            .toLowerCase()
            .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
            .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
            .replace(/[ìíịỉĩ]/g, 'i')
            .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
            .replace(/[ùúụủũưừứựửữ]/g, 'u')
            .replace(/[ỳýỵỷỹ]/g, 'y')
            .replace(/đ/g, 'd')
    }

    /**
     * Phản hồi từ chối NGHIÊM NGẶT
     */
    private createRejectionResponse(): string {
        return `⛔ **XIN LỖI! TÔI KHÔNG THỂ TRẢ LỜI CÂU HỎI NÀY**

🤖 Tôi là **AI chuyên về Tư tưởng Hồ Chí Minh** - chỉ trả lời câu hỏi liên quan đến:

✅ **CHỦ ĐỀ TÔI CÓ THỂ GIÚP:**
📖 Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc
🏛️ Vai trò chiến lược của đại đoàn kết 
👥 Lực lượng và nền tảng của khối đại đoàn kết
🔧 Điều kiện xây dựng đại đoàn kết
🤝 Mặt trận dân tộc thống nhất
🛠️ Phương thức thực hiện đại đoàn kết

💡 **CÂU HỎI ĐÚNG CHUYÊN MÔN:**
"Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh có ý nghĩa gì?"
"Vai trò của giai cấp công nhân trong khối đại đoàn kết?"
"Nguyên tắc xây dựng mặt trận dân tộc thống nhất?"

🎯 **Hãy hỏi tôi về tư tưởng Hồ Chí Minh!**`
    }

    /**
     * Tạo prompt cho đề xuất học tập
     */
    private createSuggestionPrompt(progress: LearningProgress): string {
        return `Dựa trên tiến độ học tập sau, hãy đề xuất 3-4 hoạt động học tập phù hợp:

TIẾN ĐỘ:
- Bài học completed: ${progress.completedLessons.join(', ')}
- Quiz scores: ${JSON.stringify(progress.quizScores)}
- Weak areas: ${progress.weakAreas.join(', ')}
- Strong areas: ${progress.strongAreas.join(', ')}
- Study time: ${progress.studyTime} minutes

YÊU CẦU ĐỀ XUẤT:
1. Ưu tiên cải thiện điểm yếu
2. Củng cố điểm mạnh 
3. Tiến tới bài học mới phù hợp
4. Ước tính thời gian thực tế

Trả về 3-4 suggestions theo format JSON đã cho.`
    }

    /**
     * Fallback suggestions chi tiết khi AI không hoạt động
     */
    private getFallbackSuggestions(
        progress: LearningProgress
    ): PersonalizedSuggestion[] {
        const suggestions: PersonalizedSuggestion[] = [
            {
                type: 'lesson',
                title: 'Ôn tập khái niệm CNXH cơ bản',
                description:
                    'Củng cố hiểu biết về bản chất, đặc điểm của chủ nghĩa xã hội khoa học',
                priority: 'high',
                estimatedTime: 30,
                lessonId: '4.1.1',
            },
        ]

        // Đề xuất dựa trên điểm yếu
        if (progress.weakAreas.length > 0) {
            suggestions.push({
                type: 'review',
                title: `Tăng cường: ${progress.weakAreas[0]}`,
                description: `Ôn tập chuyên sâu về ${progress.weakAreas[0]} để nâng cao hiểu biết`,
                priority: 'high',
                estimatedTime: 45,
            })
        }

        // Đề xuất dựa trên điểm số
        const avgScore =
            Object.values(progress.quizScores).reduce((a, b) => a + b, 0) /
            Object.values(progress.quizScores).length
        if (avgScore < 70) {
            suggestions.push({
                type: 'practice',
                title: 'Luyện tập bài tập cơ bản',
                description: 'Thực hành thêm để nâng cao điểm số quiz',
                priority: 'medium',
                estimatedTime: 25,
            })
        } else {
            suggestions.push({
                type: 'concept',
                title: 'Khám phá chủ đề nâng cao',
                description: 'Tìm hiểu sâu hơn về các vấn đề phức tạp của CNXH',
                priority: 'low',
                estimatedTime: 40,
            })
        }

        return suggestions
    }
}

export default AIPersonalTutor
