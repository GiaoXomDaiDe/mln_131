import { searchCurriculumContent } from '@/data/curriculum/raw-curriculum-content'
import { geminiApiClient } from '@/services/GeminiApiClient'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { message, searchQuery } = await request.json()

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            )
        }

        // Nếu có searchQuery, tìm kiếm nội dung liên quan trước
        let relevantContent = ''
        if (searchQuery) {
            const searchResults = searchCurriculumContent(searchQuery)
            if (searchResults.length > 0) {
                relevantContent = searchResults
                    .map((section) => `${section.title}:\n${section.content}`)
                    .join('\n\n')
            }
        }

        // Tạo prompt với nội dung liên quan (nếu có)
        const enhancedMessage = relevantContent
            ? `Dựa trên nội dung giáo trình sau:\n\n${relevantContent}\n\nCâu hỏi: ${message}`
            : message

        // Gọi Gemini API thông qua client
        const response = await geminiApiClient.generateContent(enhancedMessage)

        return NextResponse.json({
            response,
            relevantSections: searchQuery
                ? searchCurriculumContent(searchQuery).length
                : 0,
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
