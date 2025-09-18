import FeedbackEmail from '@/components/emails/feedback-email'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Schema validation cho form data
const feedbackSchema = z.object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    category: z.enum(['bug', 'feature', 'content', 'general'], {
        errorMap: () => ({ message: 'Loại feedback không hợp lệ' }),
    }),
    subject: z.string().min(5, 'Tiêu đề phải có ít nhất 5 ký tự'),
    message: z.string().min(10, 'Nội dung phải có ít nhất 10 ký tự'),
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Validate dữ liệu
        const validatedData = feedbackSchema.parse(body)

        const { name, email, category, subject, message } = validatedData

        // Gửi email
        const { data, error } = await resend.emails.send({
            from:
                process.env.FEEDBACK_EMAIL_FROM ||
                'Trạm Lý Luận <feedback@your-domain.com>',
            to: [process.env.FEEDBACK_EMAIL_TO || 'johnweak003@gmail.com'],
            subject: `[Trạm Lý Luận] ${subject}`,
            react: FeedbackEmail({ name, email, category, subject, message }),
            replyTo: email, // Cho phép reply trực tiếp về email người gửi
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json(
                {
                    success: false,
                    error: 'Không thể gửi email. Vui lòng thử lại.',
                },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            message: 'Feedback đã được gửi thành công!',
            emailId: data?.id,
        })
    } catch (error) {
        console.error('API error:', error)

        // Xử lý lỗi validation
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Dữ liệu không hợp lệ',
                    details: error.errors.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message,
                    })),
                },
                { status: 400 }
            )
        }

        return NextResponse.json(
            {
                success: false,
                error: 'Lỗi server. Vui lòng thử lại sau.',
            },
            { status: 500 }
        )
    }
}
