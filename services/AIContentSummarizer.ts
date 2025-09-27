import { OpenAIApiClient, type OpenAIChatMessage } from './OpenAIApiClient'

export interface SummaryOptions {
    language?: 'vietnamese' | 'english'
    summaryType?: 'excerpt' | 'bullet-points' | 'key-concepts' | 'full-summary'
    maxLength?: number
}

export interface SummaryResult {
    excerpt: string
    bulletPoints: string[]
    keyConcepts: string[]
    fullSummary: string
}

export class AIContentSummarizer {
    private openai: OpenAIApiClient

    constructor(apiKey: string) {
        this.openai = new OpenAIApiClient(apiKey, 'gpt-4o')
    }

    /**
     * Tạo tóm tắt toàn diện từ nội dung blog
     */
    async summarizeContent(
        content: string,
        title: string,
        options: SummaryOptions = {}
    ): Promise<SummaryResult> {
        const { language = 'vietnamese', maxLength = 200 } = options

        const systemPrompt = this.createSystemPrompt(language)
        const userPrompt = this.createUserPrompt(
            content,
            title,
            language,
            maxLength
        )

        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
        ]

        try {
            const response = await this.openai.chat(messages, {
                temperature: 0.5,
                max_tokens: 2000,
            })

            // Clean and parse JSON response
            const summaryData = this.parseJsonResponse(response)

            return {
                excerpt: summaryData.excerpt || '',
                bulletPoints: summaryData.bulletPoints || [],
                keyConcepts: summaryData.keyConcepts || [],
                fullSummary: summaryData.fullSummary || '',
            }
        } catch (error) {
            console.error('Error summarizing content:', error)
            throw new Error('Không thể tóm tắt nội dung. Vui lòng thử lại.')
        }
    }

    /**
     * Tạo excerpt ngắn gọn cho blog
     */
    async generateExcerpt(
        content: string,
        title: string,
        language: 'vietnamese' | 'english' = 'vietnamese',
        maxWords: number = 50
    ): Promise<string> {
        const systemPrompt =
            language === 'vietnamese'
                ? `Bạn là chuyên gia viết tóm tắt nội dung giáo dục về Chủ nghĩa xã hội khoa học.
         Nhiệm vụ: Tạo excerpt (tóm tắt ngắn) hấp dẫn và chính xác từ nội dung bài viết.`
                : `You are an expert at writing educational content summaries for Scientific Socialism.
         Task: Create engaging and accurate excerpts from article content.`

        const userPrompt =
            language === 'vietnamese'
                ? `Tạo excerpt ngắn gọn (tối đa ${maxWords} từ) cho bài viết sau:

TIÊU ĐỀ: ${title}

NỘI DUNG: ${content}

YÊU CẦU:
- Tối đa ${maxWords} từ
- Súc tích, hấp dẫn
- Nắm bắt ý chính
- Khuyến khích đọc tiếp

Trả về chỉ excerpt, không cần giải thích.`
                : `Create a concise excerpt (max ${maxWords} words) for the following article:

TITLE: ${title}

CONTENT: ${content}

REQUIREMENTS:
- Maximum ${maxWords} words  
- Concise and engaging
- Capture main idea
- Encourage further reading

Return only the excerpt, no explanation needed.`

        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
        ]

        const response = await this.openai.chat(messages, {
            temperature: 0.6,
            max_tokens: 300,
        })

        return response.trim().replace(/^["']|["']$/g, '') // Remove surrounding quotes
    }

    /**
     * Trích xuất key concepts từ nội dung
     */
    async extractKeyConcepts(
        content: string,
        language: 'vietnamese' | 'english' = 'vietnamese',
        maxConcepts: number = 8
    ): Promise<string[]> {
        const systemPrompt =
            language === 'vietnamese'
                ? `Bạn là chuyên gia phân tích nội dung giáo dục về Chủ nghĩa xã hội khoa học.
         Nhiệm vụ: Trích xuất các khái niệm quan trọng nhất từ văn bản.`
                : `You are an expert at analyzing educational content for Scientific Socialism.
         Task: Extract the most important concepts from text.`

        const userPrompt =
            language === 'vietnamese'
                ? `Từ nội dung sau, hãy trích xuất ${maxConcepts} khái niệm/thuật ngữ quan trọng nhất:

${content}

YÊU CẦU:
- Tối đa ${maxConcepts} khái niệm
- Ưu tiên thuật ngữ chuyên môn
- Bỏ qua từ phổ thông
- CHỈ TRẢ VỀ JSON ARRAY THUẦN TÚY, KHÔNG MARKDOWN: ["khái niệm 1", "khái niệm 2", ...]`
                : `From the following content, extract the ${maxConcepts} most important concepts/terms:

${content}

REQUIREMENTS:
- Maximum ${maxConcepts} concepts
- Prioritize technical terms
- Skip common words  
- RETURN ONLY PURE JSON ARRAY, NO MARKDOWN: ["concept 1", "concept 2", ...]`

        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
        ]

        const response = await this.openai.chat(messages, {
            temperature: 0.3,
            max_tokens: 500,
        })

        try {
            const parsed = this.parseJsonResponse(response)
            return Array.isArray(parsed) ? parsed : parsed.concepts || []
        } catch {
            // Fallback: split by lines if JSON parsing fails
            return response
                .split('\n')
                .map((line) => line.trim().replace(/^[-*]\s*/, ''))
                .filter((line) => line.length > 0)
                .slice(0, maxConcepts)
        }
    }

    /**
     * Tạo bullet points từ nội dung
     */
    async generateBulletPoints(
        content: string,
        language: 'vietnamese' | 'english' = 'vietnamese',
        maxPoints: number = 6
    ): Promise<string[]> {
        const systemPrompt =
            language === 'vietnamese'
                ? `Bạn là chuyên gia tóm tắt nội dung giáo dục.
         Nhiệm vụ: Tạo các điểm chính dạng bullet point từ nội dung dài.`
                : `You are an expert at summarizing educational content.
         Task: Create main points in bullet format from long content.`

        const userPrompt =
            language === 'vietnamese'
                ? `Từ nội dung sau, tạo ${maxPoints} điểm chính dạng bullet points:

${content}

YÊU CẦU:
- Tối đa ${maxPoints} điểm
- Mỗi điểm 15-25 từ
- Bao quát ý chính
- Ngôn ngữ rõ ràng, súc tích
- CHỈ TRẢ VỀ JSON ARRAY THUẦN TÚY, KHÔNG MARKDOWN: ["Điểm 1", "Điểm 2", ...]`
                : `From the following content, create ${maxPoints} main bullet points:

${content}

REQUIREMENTS:
- Maximum ${maxPoints} points
- Each point 15-25 words
- Cover main ideas
- Clear, concise language
- RETURN ONLY PURE JSON ARRAY, NO MARKDOWN: ["Point 1", "Point 2", ...]`

        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
        ]

        const response = await this.openai.chat(messages, {
            temperature: 0.4,
            max_tokens: 800,
        })

        try {
            const parsed = this.parseJsonResponse(response)
            return Array.isArray(parsed) ? parsed : parsed.bulletPoints || []
        } catch {
            // Fallback: split by lines
            return response
                .split('\n')
                .map((line) => line.trim().replace(/^[-*•]\s*/, ''))
                .filter((line) => line.length > 0)
                .slice(0, maxPoints)
        }
    }

    /**
     * Tạo system prompt chính
     */
    private createSystemPrompt(language: string): string {
        if (language === 'vietnamese') {
            return `Bạn là chuyên gia tóm tắt nội dung giáo dục về Chủ nghĩa xã hội khoa học và lý luận chính trị Việt Nam.

NHIỆM VỤ:
- Tạo các dạng tóm tắt khác nhau từ nội dung giáo trình
- Giữ nguyên thuật ngữ chuyên môn chính xác
- Đảm bảo tính học thuật và khoa học

ĐỊNH DẠNG TRẢ VỀ - CHỈ TRẢ VỀ JSON THUẦN TÚY, KHÔNG MARKDOWN:
{
  "excerpt": "Tóm tắt ngắn 40-60 từ, hấp dẫn độc giả",
  "bulletPoints": ["Điểm chính 1", "Điểm chính 2", "..."],
  "keyConcepts": ["Khái niệm 1", "Khái niệm 2", "..."],
  "fullSummary": "Tóm tắt đầy đủ 100-150 từ"
}`
        } else {
            return `You are an expert at summarizing educational content about Scientific Socialism and Vietnamese political theory.

TASKS:
- Create different types of summaries from curriculum content
- Maintain accurate professional terminology  
- Ensure academic and scientific accuracy

RETURN FORMAT:
{
  "excerpt": "Short 40-60 word summary, engaging to readers",
  "bulletPoints": ["Main point 1", "Main point 2", "..."],
  "keyConcepts": ["Concept 1", "Concept 2", "..."], 
  "fullSummary": "Complete summary 100-150 words"
}`
        }
    }

    /**
     * Tạo user prompt với nội dung cụ thể
     */
    private createUserPrompt(
        content: string,
        title: string,
        language: string,
        maxLength: number
    ): string {
        const plainText = this.extractPlainText(content)

        if (language === 'vietnamese') {
            return `Hãy tóm tắt nội dung bài học sau đây:

TIÊU ĐỀ: ${title}

NỘI DUNG:
${plainText}

YÊU CẦU:
- Excerpt: 40-60 từ, thu hút độc giả
- Bullet points: 5-6 điểm chính, mỗi điểm 15-25 từ
- Key concepts: 6-8 thuật ngữ/khái niệm quan trọng
- Full summary: Tóm tắt toàn diện 100-150 từ

Trả về kết quả dưới dạng JSON theo định dạng đã cho.`
        } else {
            return `Please summarize the following lesson content:

TITLE: ${title}

CONTENT:
${plainText}

REQUIREMENTS:
- Excerpt: 40-60 words, engaging for readers
- Bullet points: 5-6 main points, 15-25 words each
- Key concepts: 6-8 important terms/concepts  
- Full summary: Comprehensive summary 100-150 words

Return result in JSON format as specified.`
        }
    }

    /**
     * Parse JSON response from OpenAI, handle markdown code blocks
     */
    private parseJsonResponse(response: string): any {
        let cleanedResponse = response.trim()

        // Remove markdown code blocks if present
        if (cleanedResponse.includes('```json')) {
            cleanedResponse = cleanedResponse
                .replace(/```json\s*/g, '')
                .replace(/```\s*$/g, '')
                .trim()
        }

        // Remove any other code block markers
        cleanedResponse = cleanedResponse
            .replace(/^```[\w]*\s*/g, '')
            .replace(/```\s*$/g, '')
            .trim()

        try {
            return JSON.parse(cleanedResponse)
        } catch (error) {
            console.error('Failed to parse JSON:', cleanedResponse)
            // Fallback: return empty structure
            return {
                excerpt: 'Không thể tạo tóm tắt ngắn',
                bulletPoints: ['Không thể tạo bullet points'],
                keyConcepts: ['Không thể trích xuất khái niệm'],
                fullSummary: 'Không thể tạo tóm tắt đầy đủ',
            }
        }
    }

    /**
     * Trích xuất plain text từ markdown
     */
    private extractPlainText(content: string): string {
        return content
            .replace(/#{1,6}\s+/g, '')
            .replace(/\*\*(.*?)\*\*/g, '$1')
            .replace(/\*(.*?)\*/g, '$1')
            .replace(/\[(.*?)\]\(.*?\)/g, '$1')
            .replace(/```[\s\S]*?```/g, '')
            .replace(/`(.*?)`/g, '$1')
            .replace(/^\s*[-*+]\s+/gm, '• ')
            .replace(/^\s*\d+\.\s+/gm, '')
            .replace(/\n\s*\n/g, '\n')
            .trim()
    }
}

// Usage example:
// const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY!
// const summarizer = new AIContentSummarizer(apiKey)
// const summary = await summarizer.summarizeContent(content, title, { language: 'vietnamese' })
// const excerpt = await summarizer.generateExcerpt(content, title, 'vietnamese', 50)
