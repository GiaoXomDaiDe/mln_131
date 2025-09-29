import {
    getAllCurriculumText,
    getAllKeywords,
} from '@/data/curriculum/raw-curriculum-content'
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
console.log('GEMINI_API_KEY:', API_KEY)
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

const MAX_CONVERSATION_PAIRS = 7

// Knowledge base từ file raw-curriculum-content.ts
const FULL_CURRICULUM_KNOWLEDGE = getAllCurriculumText()

interface ContentPart {
    text: string
}

interface Content {
    role: 'user' | 'model'
    parts: ContentPart[]
}

interface GeminiApiRequestBody {
    contents: Content[]
    generationConfig: {
        temperature: number
        maxOutputTokens: number
    }
    safetySettings: {
        category: string
        threshold: string
    }[]
}

interface GeminiApiResponse {
    candidates: {
        content: {
            parts: { text: string }[]
        }
    }[]
}

class GeminiApiClient {
    private apiEndpoint: string
    private chatHistory: Content[] = []
    private initialInstructionGiven = false

    constructor(endpoint: string = GEMINI_API_ENDPOINT) {
        this.apiEndpoint = endpoint
    }

    /**
     * Thiết lập hướng dẫn ban đầu để cố định vai trò chuyên gia Chủ nghĩa xã hội khoa học.
     */
    private ensureInitialInstruction() {
        if (!this.initialInstructionGiven) {
            this.chatHistory = [
                {
                    role: 'user',
                    parts: [
                        {
                            text: `
Bạn là AI Assistant chuyên về Chủ nghĩa xã hội khoa học (Scientific Socialism) của nền tảng học tập "Trạm Lý Luận".

NHIỆM VỤ CỦA BẠN:
- Trả lời câu hỏi liên quan đến Chủ nghĩa xã hội khoa học
- Xử lý các câu chào hỏi thân thiện và lịch sự
- Tập trung vào các chủ đề: Triết học Mác-Lênin, Kinh tế chính trị Mác, Chủ nghĩa xã hội khoa học, lịch sử cách mạng Việt Nam
- Hỗ trợ học tập giáo trình và tài liệu học tập

KIẾN THỨC GIÁO TRÌNH:
${FULL_CURRICULUM_KNOWLEDGE}

QUY TẮC PHẢN HỒI:
1. Nếu là CHÀO HỎI (xin chào, cảm ơn, tạm biệt): Trả lời thân thiện và hướng dẫn về chủ đề có thể hỗ trợ
2. Nếu câu hỏi LIÊN QUAN đến Chủ nghĩa xã hội khoa học: Trả lời chi tiết, dẫn chứng từ lý thuyết Mác-Lênin và kiến thức giáo trình ở trên
3. Nếu câu hỏi KHÔNG LIÊN QUAN (ví dụ: thời tiết, thể thao, giải trí, công nghệ không liên quan): Lịch sự từ chối và hướng dẫn về chủ đề phù hợp
4. Sử dụng ngôn ngữ học thuật nhưng dễ hiểu, thân thiện
5. Luôn khuyến khích học tập sâu hơn về chủ đề
6. Tham khảo nội dung giáo trình đã cung cấp ở trên khi trả lời

CÁCH PHẢN HỒI KHI CÂU HỎI NGOÀI LĨNH VỰC:
"Xin lỗi, tôi chỉ có thể hỗ trợ các câu hỏi liên quan đến Chủ nghĩa xã hội khoa học và giáo trình học tập. Bạn có muốn thảo luận về [đề xuất chủ đề liên quan từ giáo trình] không?"

VÍ DỤ CHỦ ĐỀ PHÙ HỢP:
- Khái niệm và bản chất của Chủ nghĩa xã hội
- Thời kỳ quá độ lên CNXH
- Kinh nghiệm của Việt Nam trong xây dựng CNXH
- Đặc điểm riêng của con đường CNXH ở Việt Nam
- Thành tựu và thách thức của quá trình đổi mới
- Lý thuyết Mác-Lênin về giai cấp và đấu tranh giai cấp
- Quan niệm về dân chủ theo Mác-Lênin và Hồ Chí Minh
- Lịch sử phát triển dân chủ từ nguyên thủy đến xã hội chủ nghĩa
            `.trim(),
                        },
                    ],
                },
                {
                    role: 'model',
                    parts: [
                        {
                            text: 'Tôi đã sẵn sàng hỗ trợ bạn học tập Chủ nghĩa xã hội khoa học. Tôi sẽ tập trung vào giáo trình và chỉ trả lời các câu hỏi liên quan đến lĩnh vực này. Bạn muốn thảo luận về chương nào trong giáo trình?',
                        },
                    ],
                },
            ]
            this.initialInstructionGiven = true
        }
    }

    /**
     * Giữ lịch sử hội thoại ở mức phù hợp để tránh vượt quá token limit.
     */
    private trimChatHistory() {
        if (this.chatHistory.length > 2 + MAX_CONVERSATION_PAIRS * 2) {
            const startIndex =
                this.chatHistory.length - MAX_CONVERSATION_PAIRS * 2
            this.chatHistory = [
                this.chatHistory[0],
                this.chatHistory[1],
                ...this.chatHistory.slice(startIndex),
            ]
        }
    }

    /**
     * Kiểm tra xem câu hỏi có phải là chào hỏi không
     */
    private isGreeting(prompt: string): boolean {
        const greetingKeywords = [
            'xin chào',
            'chào',
            'hello',
            'hi',
            'hey',
            'chào bạn',
            'chào anh',
            'chào chị',
            'chào em',
            'good morning',
            'good afternoon',
            'good evening',
            'buổi sáng',
            'buổi chiều',
            'buổi tối',
            'how are you',
            'bạn khỏe không',
            'có khỏe không',
            'khỏe không',
            'cảm ơn',
            'thank you',
            'thanks',
            'tạm biệt',
            'bye',
            'goodbye',
            'see you',
            'hẹn gặp lại',
        ]

        const lowercasePrompt = prompt.toLowerCase().trim()

        // Chỉ kiểm tra các mẫu chào hỏi cụ thể
        // Không match nếu câu hỏi có từ khóa học thuật
        const isActualGreeting = greetingKeywords.some(
            (keyword) =>
                lowercasePrompt.includes(keyword.toLowerCase()) ||
                lowercasePrompt === keyword.toLowerCase()
        )

        // Nếu câu hỏi chứa các từ khóa học thuật thì không phải chào hỏi
        const academicKeywords = [
            'giải thích',
            'là gì',
            'tại sao',
            'như thế nào',
            'khi nào',
            'ở đâu',
            'ai',
            'gì',
            'sao',
            'explain',
            'what',
            'why',
            'how',
            'when',
            'where',
            'who',
            'define',
            'definition',
            'concept',
            'khái niệm',
            'định nghĩa',
            'phân tích',
            'so sánh',
            'đặc điểm',
            'tính chất',
            'ý nghĩa',
            'vai trò',
            'tác động',
            'ảnh hưởng',
        ]

        const hasAcademicContent = academicKeywords.some((keyword) =>
            lowercasePrompt.includes(keyword.toLowerCase())
        )

        // Chỉ coi là chào hỏi nếu có từ chào hỏi và KHÔNG có nội dung học thuật
        return isActualGreeting && !hasAcademicContent
    }

    /**
     * Kiểm tra xem câu hỏi có liên quan đến Chủ nghĩa xã hội khoa học không
     */
    private isRelevantQuestion(prompt: string): boolean {
        // Trước tiên kiểm tra chào hỏi
        if (this.isGreeting(prompt)) {
            return true // Chấp nhận chào hỏi
        }

        // Lấy từ khóa động từ knowledge base
        const dynamicKeywords = getAllKeywords()

        // Từ khóa cố định từ giáo trình
        const staticKeywords = [
            // Chỉ những từ khóa cụ thể trong giáo trình
            'chủ nghĩa xã hội',
            'xã hội chủ nghĩa',
            'cnxh',
            'xhcn',
            'mác',
            'marx',
            'lênin',
            'lenin',
            'mác-lênin',
            'dân chủ xã hội chủ nghĩa',
            'thời kỳ quá độ',
            'quá độ',
            'quá độ lên chủ nghĩa xã hội',
            'đặc điểm thời kỳ quá độ',
            'giai đoạn quá độ',
            'việt nam',
            'đổi mới',
            'cải cách kinh tế',
            'giảm nghèo',
            'chuyển đổi số',
            'năng lượng tái tạo',
            'tăng trưởng xanh',
            'kinh tế thị trường',
            'định hướng xã hội chủ nghĩa',
            // Các thuật ngữ trong giáo trình cụ thể
            'phương thức sản xuất',
            'quan hệ sản xuất',
            'lực lượng sản xuất',
            'nhà nước kiểu mới',
            'nhân dân làm chủ',
            'công hữu',
            'tư liệu sản xuất',
            'nền kinh tế phát triển cao',
            'nền văn hóa phát triển cao',
            // Từ khóa mới từ nội dung cập nhật
            'giai cấp công nhân',
            'giai cấp vô sản',
            'tư bản chủ nghĩa',
            'tbcn',
            'chuyên chính vô sản',
            'kinh tế đa thành phần',
            'công nghiệp hóa',
            'hiện đại hóa',
            'hội nhập quốc tế',
            'asean',
            'wto',
            'fta',
            'cptpp',
            'evfta',
            'vneid',
            'dịch vụ công',
            'số hóa',
            'giảm nghèo đa chiều',
            'dân tộc thiểu số',
            'quy hoạch điện',
            'năng lượng tái tạo',
            'an ninh năng lượng',
            'net zero',
            'chuyển đổi xanh',
            'già hóa dân số',
            'bhxh',
            'bhyt',
            'năng suất lao động',
        ]

        // Kết hợp từ khóa động và tĩnh
        const allRelevantKeywords = [...dynamicKeywords, ...staticKeywords]

        const lowercasePrompt = prompt.toLowerCase()

        // Chỉ cần kiểm tra có từ khóa liên quan hay không
        // Nếu không có từ khóa nào phù hợp thì coi là không liên quan
        const hasRelevantKeywords = allRelevantKeywords.some((keyword) =>
            lowercasePrompt.includes(keyword.toLowerCase())
        )

        return hasRelevantKeywords
    }

    /**
     * Tạo phản hồi chào hỏi thân thiện
     */
    private createGreetingResponse(prompt: string): string {
        const lowercasePrompt = prompt.toLowerCase().trim()

        // Phản hồi cho các loại chào hỏi khác nhau
        if (
            lowercasePrompt.includes('xin chào') ||
            lowercasePrompt.includes('chào')
        ) {
            return `Xin chào! Tôi là AI Assistant của Trạm Lý Luận, chuyên hỗ trợ học tập về Chủ nghĩa xã hội khoa học. 

Tôi có thể giúp bạn:
• Giải thích các khái niệm trong giáo trình CNXH khoa học
• Phân tích quan điểm của Mác-Lênin về dân chủ
• Thảo luận về kinh nghiệm xây dựng CNXH ở Việt Nam
• Trả lời câu hỏi về lịch sử phát triển dân chủ

Bạn muốn tìm hiểu về chủ đề nào?`
        }

        if (
            lowercasePrompt.includes('cảm ơn') ||
            lowercasePrompt.includes('thank')
        ) {
            return `Rất vui được hỗ trợ bạn! Tôi luôn sẵn sàng giúp bạn khám phá thêm về Chủ nghĩa xã hội khoa học. Nếu có thêm câu hỏi nào khác, đừng ngại hỏi nhé! 😊`
        }

        if (
            lowercasePrompt.includes('tạm biệt') ||
            lowercasePrompt.includes('bye')
        ) {
            return `Tạm biệt! Chúc bạn học tập hiệu quả. Hẹn gặp lại bạn khi cần tìm hiểu thêm về Chủ nghĩa xã hội khoa học! 📚✨`
        }

        if (
            lowercasePrompt.includes('khỏe không') ||
            lowercasePrompt.includes('how are you')
        ) {
            return `Cảm ơn bạn đã hỏi thăm! Tôi đang hoạt động tốt và sẵn sàng hỗ trợ bạn học tập về Chủ nghĩa xã hội khoa học. 

Bạn có muốn thảo luận về:
• Quan niệm dân chủ theo Mác-Lênin và Hồ Chí Minh
• Lịch sử phát triển dân chủ qua các thời kỳ  
• Đặc điểm dân chủ xã hội chủ nghĩa ở Việt Nam
• Hay chủ đề nào khác trong giáo trình?`
        }

        // Phản hồi chung cho chào hỏi
        return `Chào bạn! Tôi là AI Assistant của Trạm Lý Luận. Tôi có thể hỗ trợ bạn học tập về Chủ nghĩa xã hội khoa học và các chủ đề trong giáo trình. Bạn muốn tìm hiểu về điều gì?`
    }

    /**
     * Tạo phản hồi từ chối lịch sự với gợi ý chủ đề
     */
    private createRejectionResponse(): string {
        const suggestions = [
            'khái niệm và bản chất của Chủ nghĩa xã hội',
            'thời kỳ quá độ lên CNXH ở Việt Nam',
            'thành tựu của quá trình đổi mới',
            'đặc điểm riêng của con đường CNXH Việt Nam',
            'lý thuyết Mác-Lênin về giai cấp và đấu tranh giai cấp',
            'quá trình công nghiệp hóa và hiện đại hóa',
            'kinh tế thị trường định hướng xã hội chủ nghĩa',
        ]

        const randomSuggestion =
            suggestions[Math.floor(Math.random() * suggestions.length)]

        return `🚫 **Câu hỏi ngoài lĩnh vực hỗ trợ**

Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến **Chủ nghĩa xã hội khoa học** và **giáo trình học tập**.

✅ **Thay vào đó, bạn có muốn tìm hiểu về:**
• ${randomSuggestion}
• Các khái niệm cơ bản trong giáo trình CNXH khoa học  
• Kinh nghiệm xây dựng CNXH ở Việt Nam
• Lý thuyết Mác-Lênin và ứng dụng thực tiễn
• Quá trình đổi mới và phát triển của Việt Nam

📚 **Hãy đặt câu hỏi về những chủ đề này để tôi có thể hỗ trợ bạn tốt nhất!**`
    }

    /**
     * Gửi yêu cầu sinh nội dung từ mô hình Gemini với filtering.
     */
    async generateContent(prompt: string): Promise<string> {
        // Kiểm tra xem có phải chào hỏi không
        if (this.isGreeting(prompt)) {
            return this.createGreetingResponse(prompt)
        }

        // Kiểm tra tính liên quan của câu hỏi
        if (!this.isRelevantQuestion(prompt)) {
            return this.createRejectionResponse()
        }

        this.ensureInitialInstruction()
        this.chatHistory.push({ role: 'user', parts: [{ text: prompt }] })
        this.trimChatHistory()

        const requestBody: GeminiApiRequestBody = {
            contents: this.chatHistory,
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 2048,
            },
            safetySettings: [
                {
                    category: 'HARM_CATEGORY_HARASSMENT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                },
                {
                    category: 'HARM_CATEGORY_HATE_SPEECH',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                },
                {
                    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                },
                {
                    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE',
                },
            ],
        }

        try {
            const response = await axios.post<GeminiApiResponse>(
                this.apiEndpoint,
                requestBody,
                {
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 45000,
                }
            )

            const botResponse =
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text
            if (!botResponse) {
                throw new Error('Phản hồi từ Gemini API không đúng định dạng.')
            }

            this.chatHistory.push({
                role: 'model',
                parts: [{ text: botResponse }],
            })
            return botResponse
        } catch (error: any) {
            if (
                this.chatHistory.length > 0 &&
                this.chatHistory[this.chatHistory.length - 1].role === 'user'
            ) {
                this.chatHistory.pop()
            }

            console.error(
                'Lỗi khi gọi Gemini API:',
                error.response?.data || error.message
            )
            if (axios.isAxiosError(error) && error.response) {
                const { status, data } = error.response
                const errorMessage =
                    data?.error?.message || 'Lỗi không xác định từ máy chủ.'
                if (status === 429)
                    throw new Error(
                        `Hệ thống đang quá tải, vui lòng thử lại sau. (${errorMessage})`
                    )
                throw new Error(`Lỗi từ API: ${status} - ${errorMessage}`)
            }
            throw error
        }
    }

    resetChatHistory() {
        this.chatHistory = []
        this.initialInstructionGiven = false
    }
}

export const geminiApiClient = new GeminiApiClient()
