'use client'

import { useLanguage } from '@/contexts/language-context'
import { BookOpen, Github, Heart, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    const { t, currentLanguage, getLocalizedContent } = useLanguage()

    return (
        <footer className="relative bg-gradient-to-br from-stone-50/90 via-slate-50/80 to-stone-100/70 dark:from-stone-900/90 dark:via-slate-900/80 dark:to-stone-800/70 border-t border-stone-200/50 dark:border-slate-700/50 backdrop-blur-sm">
            {/* Academic Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            <div className="relative container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Enhanced Brand */}
                    <div className="space-y-4">
                        <div className="group flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                            <div className="relative w-10 h-10 bg-gradient-to-br from-stone-600 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                <BookOpen className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-lg bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent tracking-tight">
                                    {t('home.title')}
                                </span>
                                <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                                    {t('nav.subtitle')}
                                </span>
                            </div>
                        </div>
                        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-2 pt-2">
                            <Link
                                href="mailto:trollergamehuydk@gmail.com"
                                className="group w-9 h-9 bg-gradient-to-br from-stone-100/80 to-slate-200/80 dark:from-stone-800/80 dark:to-slate-700/80 rounded-lg flex items-center justify-center text-stone-600 dark:text-stone-400 hover:text-white hover:bg-gradient-to-br hover:from-stone-600 hover:to-slate-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                            >
                                <Mail className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://github.com/GiaoXomDaiDe"
                                target="_blank"
                                className="group w-9 h-9 bg-gradient-to-br from-slate-100/80 to-stone-200/80 dark:from-slate-800/80 dark:to-stone-700/80 rounded-lg flex items-center justify-center text-stone-600 dark:text-stone-400 hover:text-white hover:bg-gradient-to-br hover:from-slate-600 hover:to-stone-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                            >
                                <Github className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm uppercase tracking-wider">
                            {t('footer.quickLinks')}
                        </h3>
                        <div className="space-y-2">
                            <Link
                                href="/blogs"
                                className="block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 text-sm transition-colors duration-300"
                            >
                                {t('nav.blog')}
                            </Link>
                            <Link
                                href="/videos"
                                className="block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 text-sm transition-colors duration-300"
                            >
                                {t('nav.videos')}
                            </Link>
                            <Link
                                href="/quiz"
                                className="block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 text-sm transition-colors duration-300"
                            >
                                {t('nav.quiz')}
                            </Link>
                            <Link
                                href="/feedback"
                                className="block text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 text-sm transition-colors duration-300"
                            >
                                {t('nav.feedback')}
                            </Link>
                        </div>
                    </div>

                    {/* Resources & Features */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm uppercase tracking-wider">
                            {t('footer.features')}
                        </h3>
                        <div className="space-y-2">
                            <div className="text-stone-600 dark:text-stone-400 text-sm">
                                🤖 {t('footer.aiAssistant')}
                            </div>
                            <div className="text-stone-600 dark:text-stone-400 text-sm">
                                🌐 {t('footer.languageSupport')}
                            </div>
                            <div className="text-stone-600 dark:text-stone-400 text-sm">
                                📚 {t('footer.articlesCount')}
                            </div>
                            <div className="text-stone-600 dark:text-stone-400 text-sm">
                                🎓 {t('footer.interactiveQuiz')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-stone-200/60 dark:border-slate-700/60 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-stone-600 dark:text-stone-400">
                                &copy; 2025 {t('home.title')}.{' '}
                                {t('footer.rights')}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Heart className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-stone-600 dark:text-stone-400">
                                {t('footer.builtWith')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
