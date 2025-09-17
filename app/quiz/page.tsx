'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { philosophyBlogs } from '@/data/philosophy-chapters'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function QuizOverviewPage() {
    const { t, getLocalizedContent, currentLanguage } = useLanguage()

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
                <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen max-w-4xl">
                    <section className="text-center">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-full backdrop-blur-sm mb-6">
                                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-amber-800 dark:text-amber-200 tracking-wide">
                                    {t('quiz.interactiveQuiz')}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 dark:text-stone-100 tracking-tight leading-tight mb-4">
                                <span className="font-extralight italic text-amber-800 dark:text-amber-200">
                                    {t('quiz.quiz')}
                                </span>
                                <br />
                                <span className="font-bold">
                                    {t('quiz.scientificSocialism')}
                                </span>
                            </h1>

                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
                                {t('quiz.selectChapterPrompt')}
                            </p>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center space-x-4 mt-8">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-600"></div>
                                <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                                <div className="w-16 h-px bg-amber-300 dark:bg-amber-600"></div>
                                <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300 dark:to-amber-600"></div>
                            </div>
                        </div>

                        {/* Chapter 4 Quiz Card */}
                        <div className="flex justify-center">
                            <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 p-8 hover:shadow-2xl transition-all duration-300 w-full max-w-lg">
                                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="h-6 w-6 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-3 text-stone-900 dark:text-stone-100">
                                        {getLocalizedContent(
                                            philosophyBlogs['4.1'].title
                                        )}
                                    </h3>

                                    <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
                                        {t('quiz.chapter4Description')}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <Button
                                            asChild
                                            className="bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-xl px-6 py-3 font-medium transition-all duration-200 group-hover:scale-105"
                                        >
                                            <Link href="/quiz/4">
                                                {t('quiz.startQuiz')}{' '}
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>

                                        <span className="text-sm text-stone-600 dark:text-stone-400 font-medium">
                                            {
                                                philosophyBlogs['4.1'].sections
                                                    .length
                                            }{' '}
                                            {t('quiz.sections')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
