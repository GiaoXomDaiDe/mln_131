import { AIPersonalTutor } from '@/services/AIPersonalTutor'
import { NextRequest, NextResponse } from 'next/server'

let tutor: AIPersonalTutor | null = null

function getTutor() {
    if (!tutor) {
        // Sử dụng server-side environment variable (không có NEXT_PUBLIC_)
        const apiKey =
            process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY
        if (!apiKey) {
            throw new Error('OpenAI API key not found in environment variables')
        }
        tutor = new AIPersonalTutor(apiKey)
    }
    return tutor
}

export async function POST(request: NextRequest) {
    try {
        const { message, userId = 'anonymous', progress } = await request.json()

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            )
        }

        const personalTutor = getTutor()
        const response = await personalTutor.chatWithTutor(
            userId,
            message,
            progress
        )

        return NextResponse.json({
            response,
            userId,
        })
    } catch (error: any) {
        console.error('Chat API Error:', error)

        return NextResponse.json(
            {
                error: 'Internal server error',
                message: error.message || 'Có lỗi xảy ra khi xử lý yêu cầu',
            },
            { status: 500 }
        )
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Chat API is running',
        status: 'OK',
        endpoints: {
            POST: '/api/chat - Send message to AI assistant',
        },
    })
}
