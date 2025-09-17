'use client'

import { BlogCard } from '@/components/blog-card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { blogData } from '@/data/blog-data'
import {
    ArrowRight,
    BookOpen,
    Brain,
    Globe,
    Sparkles,
    Video,
} from 'lucide-react'
import Link from 'next/link'

// Convert blog data to array format for homepage
const blogs = Object.values(blogData)
    .slice(0, 3)
    .map((blog) => ({
        id: blog.id,
        section: blog.section,
        title: blog.title,
        excerpt: blog.excerpt,
        author: blog.author,
        date: blog.date,
        readTime: blog.readTime,
        image: blog.image,
        originalLanguage: blog.originalLanguage,
    }))

export default function HomePage() {
    const { t } = useLanguage()

    return (
        <div className="container mx-auto px-4 py-8 relative overflow-hidden">
            {/* Hero Section */}
            <section className="text-center mb-20 relative overflow-hidden">
                {/* Simple Dark Academy Grid */}
                <div className="absolute inset-0 -z-10">
                    {/* Clean Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,#000_50%,transparent_100%)]"></div>
                </div>

                {/* Subtle Academic Orbs */}
                <div className="absolute inset-0 -z-5 overflow-hidden">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-slate-500/10 to-gray-600/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-br from-stone-500/8 to-slate-500/8 rounded-full blur-3xl animate-float delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-gray-500/12 to-stone-600/12 rounded-full blur-3xl animate-float delay-500"></div>
                </div>

                {/* Main Content Container with Academic Styling */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <div className="bg-gradient-to-br from-stone-50/80 via-slate-50/60 to-stone-100/40 dark:from-slate-900/80 dark:via-stone-900/60 dark:to-slate-800/40 rounded-2xl border border-stone-200/50 dark:border-slate-700/50 p-12 shadow-lg transition-all duration-500 group">
                        {/* Academic Badge with Individual Animation */}
                        <div className="group/badge relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-stone-100/60 via-slate-100/60 to-stone-100/60 dark:from-slate-800/60 dark:via-stone-800/60 dark:to-slate-800/60 border border-stone-300/40 dark:border-slate-600/40 mb-8 animate-fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer">
                            <div className="relative group/pulse">
                                <div className="w-3 h-3 bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 rounded-full animate-pulse group-hover/pulse:animate-ping transition-all duration-300"></div>
                                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 rounded-full animate-ping opacity-50"></div>
                            </div>
                            <span className="group/text text-sm font-semibold bg-gradient-to-r from-stone-700 via-slate-700 to-stone-700 dark:from-stone-300 dark:via-slate-300 dark:to-stone-300 bg-clip-text text-transparent hover:from-stone-600 hover:via-slate-600 hover:to-stone-600 dark:hover:from-stone-200 dark:hover:via-slate-200 dark:hover:to-stone-200 transition-all duration-300">
                                ✨ {t('home.platformBadge')}
                            </span>
                            <div className="group/dot w-2 h-2 bg-gradient-to-r from-slate-500 to-stone-500 dark:from-slate-400 dark:to-stone-400 rounded-full hover:scale-150 hover:rotate-180 transition-all duration-300"></div>
                        </div>
                        {/* Academic Typography with Individual Animations */}
                        <div className="space-y-8 mb-16">
                            <h1 className="group/title text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter animate-fade-in-up delay-200 relative cursor-pointer">
                                <span className="bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 dark:from-stone-100 dark:via-slate-200 dark:to-stone-100 bg-clip-text text-transparent group-hover/title:from-stone-700 group-hover/title:via-slate-600 group-hover/title:to-stone-700 dark:group-hover/title:from-stone-300 dark:group-hover/title:via-slate-300 dark:group-hover/title:to-stone-300 transition-all duration-700">
                                    {t('home.title')}
                                </span>
                                {/* Subtle Text Shadow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/10 via-slate-500/10 to-stone-500/10 bg-clip-text text-transparent blur-lg opacity-0 group-hover/title:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </h1>

                            <div className="group/subtitle relative cursor-pointer">
                                <p className="text-xl md:text-3xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400 group-hover/subtitle:text-stone-800 dark:group-hover/subtitle:text-stone-100 transition-colors duration-300">
                                    {t('home.subtitle')}
                                </p>
                            </div>
                        </div>

                        {/* Academic Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-800">
                            <Button
                                asChild
                                size="lg"
                                className="group relative px-10 py-5 text-lg font-bold bg-gradient-to-r from-stone-700 via-slate-700 to-stone-700 hover:from-stone-800 hover:via-slate-800 hover:to-stone-800 dark:from-stone-600 dark:via-slate-600 dark:to-stone-600 dark:hover:from-stone-500 dark:hover:via-slate-500 dark:hover:to-stone-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                            >
                                <Link href="/blogs">
                                    {/* Subtle shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                    {/* Academic glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-600 via-slate-600 to-stone-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                                    <BookOpen className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                                    {t('home.readBlog')}
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group px-10 py-5 text-lg font-bold border-2 border-stone-300 dark:border-slate-600 hover:border-stone-500 dark:hover:border-slate-400 text-stone-700 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-200 rounded-xl backdrop-blur-sm hover:bg-stone-50 dark:hover:bg-slate-950/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                                asChild
                            >
                                <Link href="/videos">
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-500/10 via-slate-400/10 to-stone-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Video className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                                    {t('home.watchVideos')}
                                </Link>
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="group px-10 py-5 text-lg font-bold text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 rounded-xl hover:bg-gradient-to-r hover:from-stone-50 hover:to-slate-50 dark:hover:from-stone-950/20 dark:hover:to-slate-950/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                                asChild
                            >
                                <Link href="/quiz">
                                    <div className="absolute inset-0 bg-gradient-to-r from-stone-500/5 via-slate-500/5 to-stone-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Sparkles className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                                    {t('home.exploreNow')}
                                </Link>
                            </Button>
                        </div>
                        {/* Academic Stats Grid with Individual Animations */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-1000">
                            {/* Articles Card */}
                            <div className="relative group/articles cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-stone-500/20 to-slate-600/20 rounded-2xl blur-xl opacity-0 group-hover/articles:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-stone-50/80 to-slate-50/80 dark:from-stone-950/40 dark:to-slate-950/40 border border-stone-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="group/icon w-16 h-16 bg-gradient-to-br from-stone-600 to-slate-700 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-stone-500/30 relative overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover/icon:translate-x-[100%] transition-transform duration-700"></div>
                                        <BookOpen className="h-8 w-8 text-white relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="group/number text-4xl font-black bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 bg-clip-text text-transparent mb-2 hover:scale-110 hover:from-stone-500 hover:to-slate-500 dark:hover:from-stone-300 dark:hover:to-slate-300 transition-all duration-300 cursor-pointer">
                                        20+
                                    </div>
                                    <div className="group/text text-sm font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider hover:text-stone-700 dark:hover:text-stone-300 transition-colors duration-300 cursor-pointer">
                                        {t('home.articlesCount')}
                                    </div>
                                </div>
                            </div>

                            {/* Languages Card */}
                            <div className="relative group/languages cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-stone-600/20 rounded-2xl blur-xl opacity-0 group-hover/languages:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-slate-50/80 to-stone-50/80 dark:from-slate-950/40 dark:to-stone-950/40 border border-slate-200/50 dark:border-slate-800/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="group/icon w-16 h-16 bg-gradient-to-br from-slate-600 to-stone-700 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-slate-500/30 relative overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover/icon:translate-x-[100%] transition-transform duration-700"></div>
                                        <Globe className="h-8 w-8 text-white relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="group/number text-4xl font-black bg-gradient-to-r from-slate-600 to-stone-600 dark:from-slate-400 dark:to-stone-400 bg-clip-text text-transparent mb-2 hover:scale-110 hover:from-slate-500 hover:to-stone-500 dark:hover:from-slate-300 dark:hover:to-stone-300 transition-all duration-300 cursor-pointer">
                                        2
                                    </div>
                                    <div className="group/text text-sm font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider hover:text-stone-700 dark:hover:text-stone-300 transition-colors duration-300 cursor-pointer">
                                        {t('home.languagesSupported')}
                                    </div>
                                </div>
                            </div>

                            {/* AI Card */}
                            <div className="relative group/ai cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-stone-500/20 to-slate-600/20 rounded-2xl blur-xl opacity-0 group-hover/ai:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-stone-50/80 to-slate-50/80 dark:from-stone-950/40 dark:to-slate-950/40 border border-stone-200/50 dark:border-stone-800/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="group/icon w-16 h-16 bg-gradient-to-br from-stone-600 to-slate-700 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-stone-500/30 relative overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/40 to-white/20 transform -skew-x-12 translate-x-[-100%] group-hover/icon:translate-x-[100%] transition-transform duration-700"></div>
                                        <Brain className="h-8 w-8 text-white relative z-10 group-hover/icon:scale-110 transition-all duration-300" />
                                    </div>
                                    <div className="group/number text-4xl font-black bg-gradient-to-r from-stone-600 to-slate-600 dark:from-stone-400 dark:to-slate-400 bg-clip-text text-transparent mb-2 hover:scale-110 hover:from-stone-500 hover:to-slate-500 dark:hover:from-stone-300 dark:hover:to-slate-300 transition-all duration-300 cursor-pointer">
                                        AI
                                    </div>
                                    <div className="group/text text-sm font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider hover:text-stone-700 dark:hover:text-stone-300 transition-colors duration-300 cursor-pointer">
                                        Assistant
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Blog Overview - Full Width Container with Hand Background */}
            <section className="mt-20 -mx-4">
                {/* Full Width Container with Hand Background */}
                <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden border border-stone-200/30 dark:border-slate-700/30 backdrop-blur-sm">
                    {/* Light Mode Background */}
                    <div
                        className="dark:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/hand-light.jpg')",
                        }}
                    >
                        {/* Light Mode Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/80 via-slate-50/60 to-stone-100/80 backdrop-blur-[1px]"></div>
                    </div>

                    {/* Dark Mode Background */}
                    <div
                        className="hidden dark:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/hand.jpg')",
                            filter: 'contrast(1.1) brightness(0.9)',
                        }}
                    >
                        {/* Dark Mode Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-slate-900/70 to-stone-900/85 backdrop-blur-[1px]"></div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 text-center px-8 py-20 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-stone-900 dark:text-stone-100 drop-shadow-2xl">
                            {t('home.exploreBlogs')}
                        </h1>
                        <div className="mt-6 h-1 w-32 bg-gradient-to-r from-stone-600 via-slate-600 to-stone-600 dark:from-stone-400 dark:via-slate-400 dark:to-stone-400 mx-auto rounded-full shadow-lg"></div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-stone-500/10 to-slate-500/10 rounded-full -translate-x-32 -translate-y-32 animate-float"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-slate-500/10 to-stone-500/10 rounded-full translate-x-24 translate-y-24 animate-float delay-1000"></div>
                </div>

                <div className="px-4 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Chapter 4 Card */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-stone-50/90 to-slate-50/85 dark:from-stone-900/90 dark:via-slate-900/70 dark:to-stone-800/50 p-6 border border-stone-300/70 dark:border-slate-700/60 hover:shadow-xl hover:shadow-stone-500/25 dark:hover:shadow-slate-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up backdrop-blur-sm">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-stone-500/15 to-slate-500/15 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-slate-500/10 to-stone-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-stone-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-stone-500/30 transition-all duration-300 shadow-lg">
                                    <BookOpen className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black mb-3 text-stone-900 dark:text-stone-100 group-hover:text-stone-700 dark:group-hover:text-stone-300 transition-colors duration-300 leading-tight">
                                    {t('chapters.chapter4.title')}
                                </h3>

                                {/* Content */}
                                <div className="text-sm text-stone-700 dark:text-stone-400 mb-4 leading-relaxed flex-1">
                                    <p>{t('chapters.chapter4.subtitle')}</p>
                                </div>

                                {/* Action Button */}
                                <Button
                                    asChild
                                    size="sm"
                                    className="w-full bg-gradient-to-r from-stone-700 to-slate-700 hover:from-stone-800 hover:to-slate-800 dark:from-stone-600 dark:to-slate-600 dark:hover:from-stone-500 dark:hover:to-slate-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl mt-auto"
                                >
                                    <Link href="/blogs?blog=4.1">
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        {t('buttons.learnNow')}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Skeleton Card 1 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-slate-50/90 to-stone-50/85 dark:from-slate-900/90 dark:via-stone-900/70 dark:to-slate-800/50 p-6 border border-slate-300/70 dark:border-stone-700/60 hover:shadow-xl hover:shadow-slate-500/25 dark:hover:shadow-stone-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up delay-200 backdrop-blur-sm">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-500/15 to-stone-500/15 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-stone-500/10 to-slate-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Skeleton Icon */}
                                <div className="w-14 h-14 bg-slate-400/60 dark:bg-stone-700/50 rounded-xl flex items-center justify-center mb-4 animate-pulse">
                                    <div className="w-7 h-7 bg-slate-500/60 dark:bg-stone-600/50 rounded"></div>
                                </div>

                                {/* Skeleton Title */}
                                <div className="mb-3 space-y-2">
                                    <div className="h-5 bg-slate-400/60 dark:bg-stone-700/50 rounded animate-pulse"></div>
                                    <div className="h-5 bg-slate-400/60 dark:bg-stone-700/50 rounded w-3/4 animate-pulse"></div>
                                </div>

                                {/* Skeleton Content */}
                                <div className="mb-4 space-y-2 flex-1">
                                    <div className="h-4 bg-slate-400/60 dark:bg-stone-700/50 rounded animate-pulse"></div>
                                    <div className="h-4 bg-slate-400/60 dark:bg-stone-700/50 rounded w-5/6 animate-pulse"></div>
                                </div>

                                {/* Skeleton Button */}
                                <div className="w-full h-9 bg-slate-400/60 dark:bg-stone-700/50 rounded-xl animate-pulse mt-auto"></div>
                            </div>
                        </div>

                        {/* Skeleton Card 2 */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 via-stone-50/90 to-slate-50/85 dark:from-stone-900/90 dark:via-slate-900/70 dark:to-stone-800/50 p-6 border border-stone-300/70 dark:border-slate-700/60 hover:shadow-xl hover:shadow-stone-500/25 dark:hover:shadow-slate-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up delay-400 backdrop-blur-sm">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-stone-500/15 to-slate-500/15 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-slate-500/10 to-stone-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Skeleton Icon */}
                                <div className="w-14 h-14 bg-stone-400/60 dark:bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 animate-pulse">
                                    <div className="w-7 h-7 bg-stone-500/60 dark:bg-slate-600/50 rounded"></div>
                                </div>

                                {/* Skeleton Title */}
                                <div className="mb-3 space-y-2">
                                    <div className="h-5 bg-stone-400/60 dark:bg-slate-700/50 rounded animate-pulse"></div>
                                    <div className="h-5 bg-stone-400/60 dark:bg-slate-700/50 rounded w-2/3 animate-pulse"></div>
                                </div>

                                {/* Skeleton Content */}
                                <div className="mb-4 space-y-2 flex-1">
                                    <div className="h-4 bg-stone-400/60 dark:bg-slate-700/50 rounded animate-pulse"></div>
                                    <div className="h-4 bg-stone-400/60 dark:bg-slate-700/50 rounded w-4/5 animate-pulse"></div>
                                </div>

                                {/* Skeleton Button */}
                                <div className="w-full h-9 bg-stone-400/60 dark:bg-slate-700/50 rounded-xl animate-pulse mt-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured blogs */}
            <section className="mt-32">
                {/* Container with Background */}
                <div className="relative bg-gradient-to-br from-stone-50/80 via-slate-50/60 to-stone-100/40 dark:from-slate-900/80 dark:via-stone-900/60 dark:to-slate-800/40 rounded-3xl p-12 border border-stone-200/50 dark:border-slate-700/50 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-20 animate-fade-in-up">
                        <div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-stone-900 via-slate-800 to-stone-900 dark:from-stone-100 dark:via-slate-200 dark:to-stone-100 bg-clip-text text-transparent tracking-tighter">
                                {t('home.latestPosts')}
                            </h2>
                            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                                {t('home.featuredPostsDescription')}
                            </p>
                        </div>
                        <Button
                            asChild
                            className="hidden md:flex px-8 py-4 text-lg font-bold bg-gradient-to-r from-stone-700 via-slate-700 to-stone-700 hover:from-stone-800 hover:via-slate-800 hover:to-stone-800 dark:from-stone-600 dark:via-slate-600 dark:to-stone-600 dark:hover:from-stone-500 dark:hover:via-slate-500 dark:hover:to-stone-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 rounded-xl"
                        >
                            <Link href="/blogs">
                                {t('home.viewAll')}{' '}
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogs.map((blog, index) => (
                            <div
                                key={blog.id}
                                className={`transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 animate-fade-in-up`}
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-stone-500/20 via-slate-500/20 to-stone-500/20 dark:from-stone-400/20 dark:via-slate-400/20 dark:to-stone-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-700"></div>
                                    <div className="relative bg-gradient-to-br from-stone-50/90 via-slate-50/70 to-stone-100/50 dark:from-stone-900/90 dark:via-slate-900/70 dark:to-stone-800/50 rounded-2xl border border-stone-200/60 dark:border-slate-700/60 p-2 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-700">
                                        <BlogCard blog={blog} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 md:hidden animate-fade-in-up delay-800">
                        <Button
                            asChild
                            className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-stone-700 via-slate-700 to-stone-700 hover:from-stone-800 hover:via-slate-800 hover:to-stone-800 dark:from-stone-600 dark:via-slate-600 dark:to-stone-600 dark:hover:from-stone-500 dark:hover:via-slate-500 dark:hover:to-stone-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 rounded-xl"
                        >
                            <Link href="/blogs">
                                {t('home.viewAll')}{' '}
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
