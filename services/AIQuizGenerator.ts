import { OpenAIApiClient, type OpenAIChatMessage } from './OpenAIApiClient'

export interface QuizQuestion {
    question: string
    options: string[]
    correct: number
    explanation?: string
}

export interface GenerateQuizOptions {
    numQuestions?: number
    difficulty?: 'easy' | 'medium' | 'hard'
    language?: 'vietnamese' | 'english'
    questionTypes?: ('multiple-choice' | 'true-false')[]
}

export class AIQuizGenerator {
    private openai: OpenAIApiClient

    constructor(apiKey: string) {
        this.openai = new OpenAIApiClient(apiKey, 'gpt-4o')
    }

    /**
     * Tạo quiz từ nội dung blog sử dụng OpenAI
     */
    async generateQuiz(
        content: string,
        title: string,
        options: GenerateQuizOptions = {}
    ): Promise<QuizQuestion[]> {
        const {
            numQuestions = 5,
            difficulty = 'medium',
            language = 'vietnamese',
            questionTypes = ['multiple-choice'],
        } = options

        const systemPrompt = this.createSystemPrompt(language)
        const userPrompt = this.createUserPrompt(
            content,
            title,
            numQuestions,
            difficulty,
            language,
            questionTypes
        )

        const messages: OpenAIChatMessage[] = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
        ]

        try {
            const response = await this.openai.chat(messages, {
                temperature: 0.7,
                max_tokens: 3000,
            })

            // Parse JSON response
            const quizData = JSON.parse(response)

            // Validate and format questions
            return this.validateAndFormatQuestions(quizData.questions)
        } catch (error) {
            console.error('Error generating quiz:', error)
            throw new Error('Không thể tạo quiz. Vui lòng thử lại.')
        }
    }

    /**
     * Tạo system prompt cho OpenAI
     */
    private createSystemPrompt(language: string): string {
        if (language === 'vietnamese') {
            return `Bạn là một chuyên gia giáo dục về Chủ nghĩa xã hội khoa học và lý luận chính trị Việt Nam. 
Nhiệm vụ của bạn là tạo ra các câu hỏi quiz chất lượng cao từ nội dung giáo trình.

QUY TẮC TẠO QUIZ:
1. Câu hỏi phải chính xác, rõ ràng và phù hợp với nội dung
2. Tập trung vào các khái niệm, định nghĩa, và ứng dụng thực tiễn quan trọng
3. Đáp án phải có 1 đáp án đúng duy nhất và 3 đáp án nhiễu hợp lý
4. Giải thích phải súc tích và dựa trên nội dung gốc
5. Sử dụng thuật ngữ chính xác và ngôn ngữ học thuật phù hợp

ĐỊNH DẠNG TRkdy VỀ:
{
  "questions": [
    {
      "question": "Câu hỏi ở đây?",
      "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
      "correct": 0,
      "explanation": "Giải thích tại sao đáp án này đúng"
    }
  ]
}`
        } else {
            return `You are an education expert specializing in Scientific Socialism and Vietnamese political theory.
Your task is to create high-quality quiz questions from curriculum content.

QUIZ CREATION RULES:
1. Questions must be accurate, clear and relevant to the content
2. Focus on important concepts, definitions, and practical applications  
3. Answers must have exactly 1 correct answer and 3 plausible distractors
4. Explanations should be concise and based on source content
5. Use accurate terminology and appropriate academic language

RETURN FORMAT:
{
  "questions": [
    {
      "question": "Question goes here?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Explanation why this answer is correct"
    }
  ]
}`
        }
    }

    /**
     * Tạo user prompt với nội dung cụ thể
     */
    private createUserPrompt(
        content: string,
        title: string,
        numQuestions: number,
        difficulty: string,
        language: string,
        questionTypes: string[]
    ): string {
        if (language === 'vietnamese') {
            return `Dựa vào nội dung bài học sau, hãy tạo ${numQuestions} câu hỏi quiz mức độ ${difficulty}:

TIÊU ĐỀ: ${title}

NỘI DUNG:
${content}

YÊU CẦU:
- Tạo ${numQuestions} câu hỏi trắc nghiệm 4 đáp án
- Mức độ: ${difficulty}
- Câu hỏi phải bao quát các điểm chính trong bài
- Đáp án nhiễu phải hợp lý và không quá dễ loại trừ
- Kèm giải thích ngắn gọn cho mỗi câu

Trả về kết quả dưới dạng JSON theo định dạng đã cho.`
        } else {
            return `Based on the following lesson content, create ${numQuestions} quiz questions at ${difficulty} level:

TITLE: ${title}

CONTENT:
${content}

REQUIREMENTS:
- Create ${numQuestions} multiple-choice questions with 4 options
- Level: ${difficulty}
- Questions should cover main points in the lesson
- Distractors should be plausible and not too easy to eliminate
- Include brief explanation for each question

Return result in JSON format as specified.`
        }
    }

    /**
     * Validate và format câu hỏi quiz
     */
    private validateAndFormatQuestions(questions: any[]): QuizQuestion[] {
        if (!Array.isArray(questions)) {
            throw new Error('Invalid quiz format')
        }

        return questions.map((q, index) => {
            if (
                !q.question ||
                !Array.isArray(q.options) ||
                q.options.length !== 4
            ) {
                throw new Error(`Invalid question format at index ${index}`)
            }

            if (
                typeof q.correct !== 'number' ||
                q.correct < 0 ||
                q.correct > 3
            ) {
                throw new Error(`Invalid correct answer at index ${index}`)
            }

            return {
                question: q.question.trim(),
                options: q.options.map((opt: string) => opt.trim()),
                correct: q.correct,
                explanation: q.explanation?.trim() || '',
            }
        })
    }

    /**
     * Tạo quiz từ blog data hiện có
     */
    async generateQuizFromBlog(
        blogContent: { title: string; content: string },
        options: GenerateQuizOptions = {}
    ): Promise<QuizQuestion[]> {
        const { title, content } = blogContent

        // Extract text content from markdown
        const plainTextContent = this.extractPlainText(content)

        return this.generateQuiz(plainTextContent, title, options)
    }

    /**
     * Trích xuất text thuần từ markdown content
     */
    private extractPlainText(markdownContent: string): string {
        return markdownContent
            .replace(/#{1,6}\s+/g, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
            .replace(/```[\s\S]*?```/g, '') // Remove code blocks
            .replace(/`(.*?)`/g, '$1') // Remove inline code
            .replace(/^\s*[-*+]\s+/gm, '') // Remove bullet points
            .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered lists
            .replace(/\n\s*\n/g, '\n') // Remove extra blank lines
            .trim()
    }
}

// Usage example:
// const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY!
// const quizGenerator = new AIQuizGenerator(apiKey)
// const quiz = await quizGenerator.generateQuizFromBlog(blogData, {
//   numQuestions: 5,
//   difficulty: 'medium',
//   language: 'vietnamese'
// })
