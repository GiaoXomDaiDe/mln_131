'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/contexts/language-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Schema validation
const feedbackSchema = z.object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    category: z.enum(['bug', 'feature', 'content', 'general'], {
        errorMap: () => ({ message: 'Vui lòng chọn loại feedback' }),
    }),
    subject: z.string().min(5, 'Tiêu đề phải có ít nhất 5 ký tự'),
    message: z.string().min(10, 'Nội dung phải có ít nhất 10 ký tự'),
})

type FeedbackFormData = z.infer<typeof feedbackSchema>

export function FeedbackForm() {
    const { t } = useLanguage()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FeedbackFormData>({
        resolver: zodResolver(feedbackSchema),
        defaultValues: {
            name: '',
            email: '',
            category: undefined,
            subject: '',
            message: '',
        },
    })

    const onSubmit = async (data: FeedbackFormData) => {
        setIsLoading(true)
        setSubmitError(null)

        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Lỗi gửi feedback')
            }

            setIsSubmitted(true)
            reset()
        } catch (error) {
            console.error('Submit error:', error)
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : 'Có lỗi xảy ra. Vui lòng thử lại.'
            )
        } finally {
            setIsLoading(false)
        }
    }

    // Nếu gửi thành công
    if (isSubmitted) {
        return (
            <Card>
                <CardContent className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">
                        {t('feedback.thankYou')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {t('feedback.successMessage')}
                    </p>
                    <Button
                        onClick={() => {
                            setIsSubmitted(false)
                            setSubmitError(null)
                        }}
                    >
                        {t('feedback.sendAnother')}
                    </Button>
                </CardContent>
            </Card>
        )
    }

    // UI Form
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('feedback.title')}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Tên người gửi */}
                    <div className="space-y-2">
                        <Label htmlFor="name">{t('feedback.fullName')}</Label>
                        <Input
                            id="name"
                            {...register('name')}
                            className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email người gửi */}
                    <div className="space-y-2">
                        <Label htmlFor="email">{t('feedback.email')}</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Loại góp ý */}
                    <div className="space-y-2">
                        <Label htmlFor="category">
                            {t('feedback.category')}
                        </Label>
                        <select
                            id="category"
                            {...register('category')}
                            className={`w-full rounded border p-2 bg-background ${
                                errors.category ? 'border-red-500' : ''
                            }`}
                        >
                            <option value="">
                                {t('feedback.categoryPlaceholder')}
                            </option>
                            <option value="bug">{t('feedback.bug')}</option>
                            <option value="feature">
                                {t('feedback.feature')}
                            </option>
                            <option value="content">
                                {t('feedback.content')}
                            </option>
                            <option value="general">
                                {t('feedback.general')}
                            </option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                {errors.category.message}
                            </p>
                        )}
                    </div>

                    {/* Tiêu đề góp ý */}
                    <div className="space-y-2">
                        <Label htmlFor="subject">{t('feedback.subject')}</Label>
                        <Input
                            id="subject"
                            {...register('subject')}
                            className={errors.subject ? 'border-red-500' : ''}
                        />
                        {errors.subject && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    {/* Nội dung góp ý */}
                    <div className="space-y-2">
                        <Label htmlFor="message">{t('feedback.message')}</Label>
                        <Textarea
                            id="message"
                            rows={6}
                            {...register('message')}
                            placeholder={t('feedback.messagePlaceholder')}
                            className={errors.message ? 'border-red-500' : ''}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm flex items-center gap-1">
                                <AlertCircle className="h-4 w-4" />
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Hiển thị lỗi submit */}
                    {submitError && (
                        <div className="p-4 border border-red-300 rounded-md bg-red-50 dark:bg-red-900/20">
                            <p className="text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                                <AlertCircle className="h-4 w-4" />
                                {submitError}
                            </p>
                        </div>
                    )}

                    {/* Nút gửi */}
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            t('feedback.sending') || 'Đang gửi...'
                        ) : (
                            <>
                                <Send className="h-4 w-4 mr-2" />
                                {t('feedback.send')}
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
