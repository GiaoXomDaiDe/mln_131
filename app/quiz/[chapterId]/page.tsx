// app/quiz/[chapterId]/page.tsx
'use client'

import { Quiz } from '@/components/quiz'
import { blogData } from '@/data/blog-data'
import { notFound } from 'next/navigation'
// SỬA LỖI 1: Đổi tên import từ philosophyChapters thành philosophyBlogs
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import {
    philosophyBlogs,
    type ChapterId,
    type SectionId,
} from '@/data/philosophy-chapters'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Import the QuizQuestion type
import type { QuizQuestion } from '@/components/quiz'

interface QuizPageProps {
    params: Promise<{ chapterId: string }>
}

export default function QuizChapterPage({ params }: QuizPageProps) {
    const [chapterId, setChapterId] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    const { t, getLocalizedContent, currentLanguage } = useLanguage()

    // Resolve params asynchronously
    useEffect(() => {
        const resolveParams = async () => {
            const resolvedParams = await params
            setChapterId(resolvedParams.chapterId)
            setIsLoading(false)
        }
        resolveParams()
    }, [params])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 flex items-center justify-center">
                <div className="text-stone-600 dark:text-stone-400">
                    Loading...
                </div>
            </div>
        )
    }

    let sectionsInChapter: SectionId[] = []
    let chapterTitleLocalized: string = ''

    // Chỉ hỗ trợ chương 4 hiện tại
    if (chapterId === '4') {
        sectionsInChapter = [...philosophyBlogs['4.1'].sections]
        chapterTitleLocalized = getLocalizedContent(
            philosophyBlogs['4.1'].title
        )
    } else {
        const specificChapterId = chapterId as ChapterId
        if (philosophyBlogs[specificChapterId]) {
            sectionsInChapter = [...philosophyBlogs[specificChapterId].sections]
            chapterTitleLocalized = getLocalizedContent(
                philosophyBlogs[specificChapterId].title
            )
        } else {
            notFound()
        }
    }

    // Lọc dữ liệu blog để lấy các quiz của các section trong chương
    const chapterBlogs = Object.values(blogData).filter((blog) =>
        sectionsInChapter.includes(blog.section as SectionId)
    )

    // Kết hợp tất cả các câu hỏi quiz từ các blog của chương
    const combinedQuizQuestions = chapterBlogs.flatMap((blog) =>
        (blog.quiz?.[currentLanguage] || []).map((q: any) => ({
            question: q.question,
            options: q.options,
            correct: q.correct ?? q.correctAnswer,
            explanation: q.explanation,
        }))
    ) as QuizQuestion[]

    if (combinedQuizQuestions.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden">
                {/* Academic Background Pattern */}
                <div className="fixed inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#a78b5a_0.5px,transparent_0)] bg-[size:64px_64px] opacity-60"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0.5px_0.5px,#947856_0.5px,transparent_0)] bg-[size:16px_16px] opacity-30"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_0.5px,transparent_0.5px),linear-gradient(to_bottom,#8b7355_0.5px,transparent_0.5px)] bg-[size:128px_128px] opacity-20"></div>
                </div>

                {/* Content Overlay */}
                <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                    <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen max-w-4xl text-center">
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 dark:shadow-black/20 p-8 max-w-md">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

                                <div className="space-y-6">
                                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-2xl border border-amber-200/60 dark:border-amber-700/50 flex items-center justify-center shadow-lg">
                                        <span className="text-2xl">📝</span>
                                    </div>

                                    <h2 className="text-2xl font-light text-stone-900 dark:text-stone-100 tracking-tight">
                                        {t('quiz.noQuizAvailable')}
                                    </h2>

                                    <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                                        {t('quiz.noQuizQuestionsMessage')}
                                    </p>

                                    <Button
                                        asChild
                                        className="bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-xl px-6 py-3 font-medium transition-all duration-200"
                                    >
                                        <Link href="/quiz">
                                            {t('quiz.backToQuizOverview')}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden">
            {/* Full Coverage Academic Background Pattern */}
            <div className="fixed inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#a78b5a_0.5px,transparent_0)] bg-[size:64px_64px] opacity-60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0.5px_0.5px,#947856_0.5px,transparent_0)] bg-[size:16px_16px] opacity-30"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_0.5px,transparent_0.5px),linear-gradient(to_bottom,#8b7355_0.5px,transparent_0.5px)] bg-[size:128px_128px] opacity-20"></div>
            </div>

            {/* Floating Academic Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-1/6 w-2 h-2 bg-amber-600/30 dark:bg-amber-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-1/4 w-1 h-1 bg-stone-600/40 dark:bg-stone-400/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-amber-500/30 dark:bg-amber-300/20 rounded-full animate-pulse delay-2500"></div>
            </div>

            {/* Content Overlay */}
            <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen max-w-4xl">
                    {/* Elegant Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-full backdrop-blur-sm mb-6">
                            <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-amber-800 dark:text-amber-200 tracking-wide">
                                {combinedQuizQuestions.length}{' '}
                                {t('quiz.questionsAvailable')}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 dark:text-stone-100 tracking-tight leading-tight mb-4">
                            <span className="font-extralight italic text-amber-800 dark:text-amber-200">
                                {t('quiz.quizForBlog')}:
                            </span>
                            <br />
                            <span className="font-bold">
                                {chapterTitleLocalized}
                            </span>
                        </h1>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-600"></div>
                            <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                            <div className="w-16 h-px bg-amber-300 dark:bg-amber-600"></div>
                            <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300 dark:to-amber-600"></div>
                        </div>
                    </div>

                    {/* Quiz Container */}
                    <div className="relative">
                        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 dark:shadow-black/20">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

                            <div className="p-8">
                                <Quiz questions={combinedQuizQuestions} />
                            </div>
                        </div>

                        {/* Floating Academic Decoration */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-full border border-amber-300/50 dark:border-amber-700/50 shadow-lg">
                            <div className="absolute inset-1 bg-amber-400/20 dark:bg-amber-500/20 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
