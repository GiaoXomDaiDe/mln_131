import {
    getAllHoChiMinhUnityKnowledge,
    getAllUnityKeywords,
    getSampleQuestions,
} from '@/data/ho-chi-minh-unity-knowledge'
import axios from 'axios'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'
const MAX_CONVERSATION_PAIRS = 8
const OPENAI_MODEL = process.env.NEXT_PUBLIC_OPENAI_MODEL || 'gpt-4o-mini'

// Knowledge base từ file ho-chi-minh-unity-knowledge.ts
const FULL_KNOWLEDGE_BASE = getAllHoChiMinhUnityKnowledge()

export type OpenAIModel =
    | 'gpt-4'
    | 'gpt-4o'
    | 'gpt-4o-mini'
    | 'gpt-3.5-turbo'
    | string

export interface OpenAIChatMessage {
    role: 'system' | 'user' | 'assistant'
    content: string
}

export interface OpenAIChatRequest {
    model: OpenAIModel
    messages: OpenAIChatMessage[]
    temperature?: number
    max_tokens?: number
    top_p?: number
    frequency_penalty?: number
    presence_penalty?: number
}

export interface OpenAIChatResponse {
    id: string
    object: string
    created: number
    model: string
    choices: Array<{
        index: number
        message: {
            role: 'assistant'
            content: string
        }
        finish_reason: string
    }>
    usage?: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    }
}

export class OpenAIApiClient {
    private apiKey: string
    private apiUrl: string
    private defaultModel: OpenAIModel
    private chatHistory: OpenAIChatMessage[] = []
    private initialInstructionGiven = false

    constructor(apiKey: string, model: OpenAIModel = OPENAI_MODEL) {
        this.apiKey = apiKey
        this.apiUrl = OPENAI_API_URL
        this.defaultModel = model
    }

    /**
     * Thiết lập hướng dẫn ban đầu về Tư tưởng Hồ Chí Minh
     */
    private ensureInitialInstruction() {
        if (!this.initialInstructionGiven) {
            const systemMessage: OpenAIChatMessage = {
                role: 'system',
                content: `
Bạn là AI Assistant chuyên về Tư tưởng Hồ Chí Minh của nền tảng học tập "Học Viện Bác Hồ".
Chuyên môn: TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC.

NHIỆM VỤ CỦA BẠN:
- Trả lời câu hỏi về tư tưởng Hồ Chí Minh, đặc biệt về đại đoàn kết toàn dân tộc
- Xử lý các câu chào hỏi thân thiện và lịch sự
- Giải thích các khái niệm, nguyên tắc, phương pháp liên quan
- Phân tích ý nghĩa lịch sử và giá trị thời đại
- Hỗ trợ học tập và nghiên cứu về chủ đề này

KIẾN THỨC CHUYÊN MÔN:
${FULL_KNOWLEDGE_BASE}

QUY TẮC PHẢN HỒI:
1. CHÀO HỎI: Trả lời thân thiện, giới thiệu chuyên môn về tư tưởng Hồ Chí Minh
2. CÂU HỎI LIÊN QUAN: Trả lời chi tiết dựa trên kiến thức đã cung cấp, dẫn chứng cụ thể
3. CÂU HỎI NGOÀI LĨNH VỰC: Lịch sự từ chối, hướng về chủ đề phù hợp
4. Sử dụng ngôn ngữ học thuật nhưng dễ hiểu, có tính giáo dục cao
5. Khuyến khích tìm hiểu sâu hơn về tư tưởng Hồ Chí Minh
6. Luôn tham khảo kiến thức đã cung cấp khi trả lời

PHONG CÁCH PHẢN HỒI:
- Tôn trọng, nghiêm túc nhưng thân thiện
- Có cấu trúc rõ ràng (định nghĩa → giải thích → ví dụ → ý nghĩa)
- Sử dụng emoji phù hợp để tạo sự gần gũi
- Đưa ra câu hỏi gợi mở để khuyến khích học tập

VÍ DỤ CHỦ ĐỀ PHÙ HỢP:
- Khái niệm đại đoàn kết toàn dân tộc
- Nguồn gốc tư tưởng đại đoàn kết của Hồ Chí Minh  
- Nguyên tắc và phương pháp xây dựng đại đoàn kết
- Thực tiễn đại đoàn kết trong các thời kỳ lịch sử
- Ý nghĩa và giá trị của đại đoàn kết trong thời đại mới
- Kinh nghiệm xây dựng đại đoàn kết ở Việt Nam
                `.trim(),
            }

            this.chatHistory = [systemMessage]
            this.initialInstructionGiven = true
        }
    }

    /**
     * Giữ lịch sử hội thoại phù hợp
     */
    private trimChatHistory() {
        if (this.chatHistory.length > 1 + MAX_CONVERSATION_PAIRS * 2) {
            const startIndex =
                this.chatHistory.length - MAX_CONVERSATION_PAIRS * 2
            this.chatHistory = [
                this.chatHistory[0], // System message
                ...this.chatHistory.slice(startIndex),
            ]
        }
    }

    /**
     * Kiểm tra chào hỏi
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
            'cảm ơn',
            'thank you',
            'thanks',
            'tạm biệt',
            'bye',
            'goodbye',
        ]

        const lowercasePrompt = prompt.toLowerCase().trim()
        const hasGreeting = greetingKeywords.some((keyword) =>
            lowercasePrompt.includes(keyword.toLowerCase())
        )

        const academicKeywords = [
            'giải thích',
            'là gì',
            'tại sao',
            'như thế nào',
            'hồ chí minh',
            'đại đoàn kết',
            'dân tộc',
            'tư tưởng',
        ]

        const hasAcademicContent = academicKeywords.some((keyword) =>
            lowercasePrompt.includes(keyword.toLowerCase())
        )

        return hasGreeting && !hasAcademicContent
    }

    /**
     * Kiểm tra tính liên quan
     */
    private isRelevantQuestion(prompt: string): boolean {
        if (this.isGreeting(prompt)) {
            return true
        }

        const relevantKeywords = getAllUnityKeywords()
        const additionalKeywords = [
            'hồ chí minh',
            'bác hồ',
            'chủ tịch hồ',
            'tư tưởng hồ chí minh',
            'dân tộc việt nam',
            'cách mạng việt nam',
            'độc lập tự do',
            'yêu nước',
            'lãnh đạo',
            'chính trị',
        ]

        const allKeywords = [...relevantKeywords, ...additionalKeywords]
        const lowercasePrompt = prompt.toLowerCase()

        return allKeywords.some((keyword) =>
            lowercasePrompt.includes(keyword.toLowerCase())
        )
    }

    /**
     * Tạo phản hồi chào hỏi
     */
    private createGreetingResponse(prompt: string): string {
        const lowercasePrompt = prompt.toLowerCase().trim()

        if (lowercasePrompt.includes('chào')) {
            return `🌟 **Xin chào! Tôi là AI Assistant của Học Viện Bác Hồ**

Tôi chuyên về **Tư tưởng Hồ Chí Minh**, đặc biệt là **Đại đoàn kết toàn dân tộc**.

📚 **Tôi có thể hỗ trợ bạn:**
• Giải thích khái niệm và bản chất đại đoàn kết toàn dân tộc
• Phân tích nguồn gốc tư tưởng đại đoàn kết của Bác Hồ
• Tìm hiểu nguyên tắc, phương pháp xây dựng đại đoàn kết
• Nghiên cứu thực tiễn lịch sử và ý nghĩa thời đại

💡 **Bạn muốn tìm hiểu về chủ đề nào?**`
        }

        if (lowercasePrompt.includes('cảm ơn')) {
            return `🙏 **Rất vui được hỗ trợ bạn!**

Học tập về tư tưởng Hồ Chí Minh là hành trình ý nghĩa. Tôi luôn sẵn sàng đồng hành cùng bạn khám phá thêm về **đại đoàn kết toàn dân tộc**.

📖 Nếu có thêm câu hỏi, đừng ngại chia sẻ nhé!`
        }

        return `👋 **Chào mừng đến với Học Viện Bác Hồ!**

Tôi là chuyên gia AI về **Tư tưởng Hồ Chí Minh**. Hãy chia sẻ câu hỏi của bạn về đại đoàn kết toàn dân tộc nhé!`
    }

    /**
     * Tạo phản hồi từ chối
     */
    private createRejectionResponse(): string {
        const sampleQuestions = getSampleQuestions()
        const randomQuestion =
            sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)]

        return `🚫 **Câu hỏi ngoài chuyên môn của tôi**

Xin lỗi, tôi chỉ chuyên về **Tư tưởng Hồ Chí Minh**, đặc biệt là **Đại đoàn kết toàn dân tộc**.

✅ **Thay vào đó, bạn có muốn tìm hiểu:**
• ${randomQuestion}
• Nguồn gốc tư tưởng đại đoàn kết của Bác Hồ
• Thực tiễn đại đoàn kết trong kháng chiến và xây dựng đất nước
• Ý nghĩa của đại đoàn kết trong thời kỳ đổi mới

🎓 **Hãy đặt câu hỏi về những chủ đề này để tôi hỗ trợ bạn tốt nhất!**`
    }

    /**
     * Chat với filtering và context management
     */
    async chat(
        messages: OpenAIChatMessage[] | string,
        options?: {
            model?: OpenAIModel
            temperature?: number
            max_tokens?: number
        }
    ): Promise<string> {
        // Nếu input là string, convert thành array
        if (typeof messages === 'string') {
            const prompt = messages

            // Kiểm tra chào hỏi
            if (this.isGreeting(prompt)) {
                return this.createGreetingResponse(prompt)
            }

            // Kiểm tra tính liên quan
            if (!this.isRelevantQuestion(prompt)) {
                return this.createRejectionResponse()
            }

            this.ensureInitialInstruction()
            this.chatHistory.push({ role: 'user', content: prompt })
            this.trimChatHistory()

            messages = this.chatHistory
        }

        try {
            console.log(
                '🤖 [OpenAI] Generating response for Ho Chi Minh ideology...'
            )

            const requestBody: OpenAIChatRequest = {
                model: options?.model || this.defaultModel,
                messages: Array.isArray(messages) ? messages : [messages],
                temperature: options?.temperature ?? 0.7,
                max_tokens: options?.max_tokens ?? 2000,
                top_p: 0.9,
                frequency_penalty: 0.1,
                presence_penalty: 0.1,
            }

            const response = await axios.post<OpenAIChatResponse>(
                this.apiUrl,
                requestBody,
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 45000,
                }
            )

            const content = response.data.choices?.[0]?.message?.content
            if (!content) throw new Error('Không nhận được phản hồi từ OpenAI')

            // Thêm phản hồi vào lịch sử nếu đang dùng chat history
            if (typeof arguments[0] === 'string') {
                this.chatHistory.push({ role: 'assistant', content })
            }

            console.log('✅ [OpenAI] Response generated successfully')
            if (response.data.usage) {
                console.log('📊 [OpenAI] Token usage:', response.data.usage)
            }

            return content
        } catch (error: any) {
            // Xóa câu hỏi khỏi lịch sử nếu có lỗi
            if (
                typeof arguments[0] === 'string' &&
                this.chatHistory.length > 0 &&
                this.chatHistory[this.chatHistory.length - 1].role === 'user'
            ) {
                this.chatHistory.pop()
            }

            console.error(
                '❌ [OpenAI] Error:',
                error.response?.data || error.message
            )

            if (axios.isAxiosError(error) && error.response) {
                const { status, data } = error.response

                if (status === 401) {
                    throw new Error(
                        '🔑 API key không hợp lệ. Vui lòng kiểm tra cấu hình.'
                    )
                }
                if (status === 429) {
                    throw new Error(
                        '⏱️ Hệ thống đang quá tải. Vui lòng thử lại sau ít phút.'
                    )
                }
                if (status === 500) {
                    throw new Error(
                        '🛠️ Lỗi hệ thống OpenAI. Vui lòng thử lại sau.'
                    )
                }

                const errorMessage =
                    data?.error?.message || 'Lỗi không xác định'
                throw new Error(`🚨 Lỗi API: ${status} - ${errorMessage}`)
            }

            throw new Error('🔄 Không thể tạo phản hồi. Vui lòng thử lại.')
        }
    }

    /**
     * Reset lịch sử chat
     */
    resetChatHistory() {
        this.chatHistory = []
        this.initialInstructionGiven = false
        console.log('🔄 [OpenAI] Chat history reset')
    }

    /**
     * Thông tin lịch sử chat
     */
    getChatHistoryInfo(): { messageCount: number; tokensEstimate: number } {
        const messageCount = this.chatHistory.length
        const totalChars = this.chatHistory.reduce(
            (sum, msg) => sum + msg.content.length,
            0
        )
        const tokensEstimate = Math.ceil(totalChars / 4)

        return { messageCount, tokensEstimate }
    }

    /**
     * Test kết nối
     */
    async testConnection(): Promise<boolean> {
        try {
            console.log('🔍 [OpenAI] Testing connection...')

            const response = await axios.post<OpenAIChatResponse>(
                this.apiUrl,
                {
                    model: this.defaultModel,
                    messages: [{ role: 'user', content: 'Test connection' }],
                    max_tokens: 10,
                },
                {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 10000,
                }
            )

            const isWorking = !!response.data.choices[0]?.message?.content
            console.log(
                '✅ [OpenAI] Connection test:',
                isWorking ? 'SUCCESS' : 'FAILED'
            )

            return isWorking
        } catch (error) {
            console.error('❌ [OpenAI] Connection test failed:', error)
            return false
        }
    }
}

// Tạo instance mặc định
export const openaiClient = new OpenAIApiClient(
    process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY || ''
)

// Export cho backward compatibility
export default OpenAIApiClient
