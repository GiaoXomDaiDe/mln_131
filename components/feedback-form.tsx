'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/contexts/language-context'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, CheckCircle, Send } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Schema validation with dynamic translations
const createFeedbackSchema = (t: any) =>
    z.object({
        name: z.string().min(2, t('feedback.validation.nameRequired')),
        email: z.string().email(t('feedback.validation.emailInvalid')),
        category: z.enum(['bug', 'feature', 'content', 'general'], {
            errorMap: () => ({
                message: t('feedback.validation.categoryRequired'),
            }),
        }),
        subject: z.string().min(5, t('feedback.validation.subjectRequired')),
        message: z.string().min(10, t('feedback.validation.messageRequired')),
    })

type FeedbackFormData = {
    name: string
    email: string
    category: 'bug' | 'feature' | 'content' | 'general'
    subject: string
    message: string
}

export function FeedbackForm() {
    const { t } = useLanguage()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    // Create schema with current language translations
    const feedbackSchema = useMemo(() => createFeedbackSchema(t), [t])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
        clearErrors,
        setError,
        getValues,
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

    // Track if we have errors and current language
    const [lastLanguage, setLastLanguage] = useState<any>(null)
    const hasErrors = Object.keys(errors).length > 0

    // Re-validate when language changes to update error messages
    useEffect(() => {
        // Initialize lastLanguage on first render
        if (lastLanguage === null) {
            setLastLanguage(t)
            return
        }

        if (lastLanguage !== t && hasErrors) {
            // Language changed and we have errors to update
            setTimeout(() => {
                trigger() // Re-trigger validation with new language
            }, 0)
            setLastLanguage(t)
        } else if (lastLanguage !== t) {
            // Just update the language tracker
            setLastLanguage(t)
        }
    }, [t, hasErrors, lastLanguage, trigger])

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
                throw new Error(
                    result.error || t('feedback.validation.defaultError')
                )
            }

            setIsSubmitted(true)
            reset()
        } catch (error) {
            console.error('Submit error:', error)
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : t('feedback.validation.submitError')
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
