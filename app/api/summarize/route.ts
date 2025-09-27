import { AIContentSummarizer } from '@/services/AIContentSummarizer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { content, title, language, summaryType } = await request.json()

        // Validate required fields
        if (!content || !title) {
            return NextResponse.json(
                { error: 'Content and title are required' },
                { status: 400 }
            )
        }

        // Get API key from server environment
        const apiKey = process.env.OPENAI_API_KEY
        if (!apiKey) {
            console.error('OpenAI API key not configured')
            return NextResponse.json(
                { error: 'API configuration error' },
                { status: 500 }
            )
        }

        // Initialize summarizer
        const summarizer = new AIContentSummarizer(apiKey)

        let result

        switch (summaryType) {
            case 'excerpt':
                result = await summarizer.generateExcerpt(
                    content,
                    title,
                    language
                )
                break
            case 'concepts':
                result = await summarizer.extractKeyConcepts(content, language)
                break
            case 'bullets':
                result = await summarizer.generateBulletPoints(
                    content,
                    language
                )
                break
            default:
                // Full summary
                result = await summarizer.summarizeContent(content, title, {
                    language: language || 'vietnamese',
                    maxLength: 100,
                })
        }

        return NextResponse.json(result)
    } catch (error) {
        console.error('Summarization error:', error)

        // Return appropriate error message
        const errorMessage =
            error instanceof Error ? error.message : 'Unknown error occurred'

        return NextResponse.json(
            {
                error: 'Failed to summarize content',
                details: errorMessage,
            },
            { status: 500 }
        )
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Summarize API endpoint. Use POST method.' },
        { status: 200 }
    )
}
