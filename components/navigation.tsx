'use client'

import { ClientOnly } from '@/components/client-only'
import { LanguageSelector } from '@/components/language-selector'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLanguage } from '@/contexts/language-context'
import { BookOpen, Brain, Home, MessageSquare, Video } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { t } = useLanguage()

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: t('nav.home'), icon: Home },
        { href: '/blogs', label: t('nav.blog'), icon: BookOpen },
        { href: '/videos', label: t('nav.videos'), icon: Video },
        { href: '/quiz', label: t('nav.quiz'), icon: Brain },
        { href: '/feedback', label: t('nav.feedback'), icon: MessageSquare },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
                isScrolled
                    ? 'bg-white/80 dark:bg-stone-900/80 backdrop-blur-2xl border-stone-200/60 dark:border-slate-700/60 shadow-2xl shadow-stone-500/10 dark:shadow-slate-400/10'
                    : 'bg-gradient-to-r from-stone-50/95 via-slate-50/95 to-stone-50/95 dark:from-stone-900/95 dark:via-slate-900/95 dark:to-stone-900/95 backdrop-blur-xl border-stone-200/50 dark:border-slate-700/50 shadow-lg'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Enhanced Logo */}
                    <Link
                        href="/"
                        className={`group flex items-center space-x-3 hover:scale-105 transition-all duration-300 ${
                            isScrolled
                                ? 'p-2 rounded-xl bg-white/20 dark:bg-stone-800/20 backdrop-blur-lg'
                                : ''
                        }`}
                    >
                        <span className="flex flex-col">
                            <span className="font-black text-xl bg-gradient-to-r from-stone-900 to-slate-800 dark:from-stone-100 dark:to-slate-200 bg-clip-text text-transparent tracking-tight">
                                {t('home.title')}
                            </span>
                            <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                                {t('nav.subtitle')}
                            </span>
                        </span>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 rounded-xl transition-all duration-300 hover:scale-105 ${
                                    isScrolled
                                        ? 'hover:bg-white/30 dark:hover:bg-stone-800/30 backdrop-blur-lg'
                                        : 'hover:bg-stone-100/60 dark:hover:bg-stone-800/60'
                                }`}
                            >
                                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                                <span>{item.label}</span>
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-stone-300/20 to-slate-300/20 dark:from-stone-600/20 dark:to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                            </Link>
                        ))}

                        {/* Enhanced Controls */}
                        <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-stone-200/50 dark:border-slate-700/50">
                            <div className="relative group">
                                <LanguageSelector />
                            </div>

                            <ClientOnly>
                                <div className="relative group">
                                    <ThemeToggle />
                                </div>
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
