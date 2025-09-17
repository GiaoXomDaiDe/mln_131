'use client'

import { FeedbackForm } from '@/components/feedback-form'
import { useLanguage } from '@/contexts/language-context'

export default function FeedbackPage() {
    const { t } = useLanguage()

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden">
            {/* Full Coverage Academic Background Pattern */}
            <div className="fixed inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                {/* Primary Academic Pattern - Full Coverage */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px]"></div>

                {/* Secondary Layered Pattern for Depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#a78b5a_0.5px,transparent_0)] bg-[size:64px_64px] opacity-60"></div>

                {/* Tertiary Fine Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0.5px_0.5px,#947856_0.5px,transparent_0)] bg-[size:16px_16px] opacity-30"></div>

                {/* Academic Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_0.5px,transparent_0.5px),linear-gradient(to_bottom,#8b7355_0.5px,transparent_0.5px)] bg-[size:128px_128px] opacity-20"></div>
            </div>

            {/* Enhanced Floating Academic Elements - Full Screen Coverage */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Top Section */}
                <div className="absolute top-10 left-1/6 w-2 h-2 bg-amber-600/30 dark:bg-amber-400/20 rounded-full animate-pulse"></div>
                <div className="absolute top-16 right-1/4 w-1 h-1 bg-stone-600/40 dark:bg-stone-400/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-32 left-3/4 w-1.5 h-1.5 bg-slate-600/30 dark:bg-slate-400/20 rounded-full animate-pulse delay-500"></div>

                {/* Middle Section */}
                <div className="absolute top-1/3 left-1/12 w-1 h-1 bg-amber-700/30 dark:bg-amber-300/20 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-stone-500/30 dark:bg-stone-400/20 rounded-full animate-pulse delay-3000"></div>
                <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-amber-600/30 dark:bg-amber-400/20 rounded-full animate-pulse delay-1500"></div>

                {/* Bottom Section */}
                <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-slate-600/40 dark:bg-slate-400/20 rounded-full animate-pulse delay-4000"></div>
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-amber-500/30 dark:bg-amber-300/20 rounded-full animate-pulse delay-2500"></div>
                <div className="absolute bottom-60 right-1/12 w-1.5 h-1.5 bg-stone-600/30 dark:bg-stone-400/20 rounded-full animate-pulse delay-3500"></div>

                {/* Academic Elements */}
                <div className="absolute top-1/4 right-1/2 w-3 h-4 bg-amber-200/20 dark:bg-amber-800/10 rotate-12 rounded-sm animate-pulse delay-4500"></div>
                <div className="absolute bottom-1/3 left-1/2 w-2 h-3 bg-stone-200/20 dark:bg-stone-800/10 -rotate-6 rounded-sm animate-pulse delay-5500"></div>
            </div>

            {/* Full Page Content Overlay with Lower Opacity */}
            <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen max-w-2xl">
                    {/* Elegant Header Section */}
                    <div className="mb-16">
                        <div className="max-w-2xl mx-auto text-center space-y-8">
                            {/* Refined Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-amber-800 dark:text-amber-200 tracking-wide">
                                    {t('feedback.shareYourThoughts')}
                                </span>
                            </div>

                            {/* Elegant Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                                <span className="font-extralight italic text-amber-800 dark:text-amber-200">
                                    {t('feedback.pageTitle').split(' ')[0]}
                                </span>
                                <br />
                                <span className="font-bold">
                                    {t('feedback.pageTitle')
                                        .split(' ')
                                        .slice(1)
                                        .join(' ')}
                                </span>
                            </h1>

                            {/* Subtle Description */}
                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-lg mx-auto leading-relaxed font-light">
                                {t('feedback.pageDescription')}
                            </p>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-8 h-px bg-gradient-to-r from-transparent to-amber-300 dark:to-amber-600"></div>
                                <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                                <div className="w-16 h-px bg-amber-300 dark:bg-amber-600"></div>
                                <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                                <div className="w-8 h-px bg-gradient-to-l from-transparent to-amber-300 dark:to-amber-600"></div>
                            </div>
                        </div>
                    </div>

                    {/* Elegant Form Container */}
                    <div className="relative">
                        <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 dark:shadow-black/20 p-8">
                            {/* Subtle Accent Line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

                            <FeedbackForm />
                        </div>

                        {/* Floating Academic Decoration */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-full border border-amber-300/50 dark:border-amber-700/50 shadow-lg">
                            <div className="absolute inset-1 bg-amber-400/20 dark:bg-amber-500/20 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Keyframes for Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
