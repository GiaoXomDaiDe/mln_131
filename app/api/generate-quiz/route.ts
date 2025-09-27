import { openaiClient } from '@/services/OpenAIApiClient'
import { NextRequest, NextResponse } from 'next/server'

export interface QuizQuestion {
    question: string
    options: string[]
    correct: number
    explanation: string
}

export async function POST(req: NextRequest) {
    try {
        const { language = 'vietnamese' } = await req.json()

        const prompt =
            language === 'vietnamese'
                ? `Tạo 5 câu hỏi trắc nghiệm về "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc" với format JSON như sau:
            [
                {
                    "question": "Câu hỏi...",
                    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
                    "correct": 2,
                    "explanation": "Giải thích chi tiết..."
                }
            ]
            
            Yêu cầu:
            - Câu hỏi phải chính xác, có độ khó vừa phải
            - 4 đáp án mỗi câu, chỉ 1 đáp án đúng
            - Giải thích rõ ràng, có dẫn chứng từ tư tưởng Hồ Chí Minh
            - Nội dung tập trung vào: vai trò, ý nghĩa, nguyên tắc, phương pháp đại đoàn kết
            - Chỉ trả về JSON, không có text khác`
                : `Create 5 multiple choice questions about "Ho Chi Minh's Thought on National Great Unity" in JSON format:
            [
                {
                    "question": "Question...",
                    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
                    "correct": 2,
                    "explanation": "Detailed explanation..."
                }
            ]
            
            Requirements:
            - Accurate questions with moderate difficulty
            - 4 options each, only 1 correct
            - Clear explanations with Ho Chi Minh Thought references
            - Focus on: role, significance, principles, methods of great unity
            - Return only JSON, no other text`

        const response = await openaiClient.chat(prompt)

        // Parse JSON response
        const jsonMatch = response.match(/\[[\s\S]*\]/)
        if (!jsonMatch) {
            throw new Error('Invalid JSON format from AI')
        }

        const generatedQuestions: QuizQuestion[] = JSON.parse(jsonMatch[0])

        // Validate structure
        if (
            !Array.isArray(generatedQuestions) ||
            generatedQuestions.length === 0
        ) {
            throw new Error('Invalid quiz structure')
        }

        // Validate each question
        for (const q of generatedQuestions) {
            if (
                !q.question ||
                !Array.isArray(q.options) ||
                q.options.length !== 4 ||
                typeof q.correct !== 'number' ||
                q.correct < 0 ||
                q.correct > 3 ||
                !q.explanation
            ) {
                throw new Error('Invalid question structure')
            }
        }

        return NextResponse.json({
            success: true,
            data: generatedQuestions,
        })
    } catch (error: any) {
        console.error('❌ [API] Error generating quiz:', error)

        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to generate quiz',
                details:
                    process.env.NODE_ENV === 'development'
                        ? error.stack
                        : undefined,
            },
            { status: 500 }
        )
    }
}
