import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components'

interface FeedbackEmailProps {
    name: string
    email: string
    category: string
    subject: string
    message: string
}

export default function FeedbackEmail({
    name,
    email,
    category,
    subject,
    message,
}: FeedbackEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>
                Feedback mới từ {name} - {subject}
            </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={section}>
                        <Text style={title}>
                            📧 Feedback mới từ Học Viện Bác Hồ
                        </Text>

                        <Text style={text}>
                            <strong>Người gửi:</strong> {name}
                        </Text>

                        <Text style={text}>
                            <strong>Email:</strong> {email}
                        </Text>

                        <Text style={text}>
                            <strong>Loại feedback:</strong>{' '}
                            {getCategoryLabel(category)}
                        </Text>

                        <Text style={text}>
                            <strong>Tiêu đề:</strong> {subject}
                        </Text>

                        <Section style={messageSection}>
                            <Text style={messageTitle}>Nội dung:</Text>
                            <Text style={messageText}>{message}</Text>
                        </Section>

                        <Button
                            style={button}
                            href={`mailto:${email}?subject=Re: ${subject}`}
                        >
                            Trả lời ngay
                        </Button>

                        <Text style={footer}>
                            Email này được gửi từ form feedback trên website Học
                            Viện Bác Hồ.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        bug: '🐛 Báo lỗi',
        feature: '✨ Đề xuất tính năng',
        content: '📝 Góp ý nội dung',
        general: '💬 Phản hồi chung',
    }
    return labels[category] || category
}

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
}

const section = {
    padding: '0 48px',
}

const title = {
    fontSize: '24px',
    lineHeight: '1.25',
    color: '#1f2937',
    fontWeight: '600',
    margin: '16px 0',
}

const text = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#374151',
    margin: '8px 0',
}

const messageSection = {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    margin: '16px 0',
    border: '1px solid #e5e7eb',
}

const messageTitle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 8px 0',
}

const messageText = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
}

const button = {
    backgroundColor: '#d97706',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px 24px',
    margin: '24px 0',
}

const footer = {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#6b7280',
    margin: '24px 0 0 0',
    textAlign: 'center' as const,
}
