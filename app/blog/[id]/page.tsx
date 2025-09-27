'use client'

import { BlogAISummarizer } from '@/components/blog-ai-summarizer'
import { BlogReader } from '@/components/blog-reader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/language-context'
import { blogData, type BlogId } from '@/data/blog-data'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface BlogPageProps {
    params: Promise<{ id: string }>
}

export default function BlogPage({ params }: BlogPageProps) {
    const { t, currentLanguage } = useLanguage()

    // Use React.use() to unwrap the Promise
    const { id } = React.use(params)
    const blogId = Number.parseInt(id) as BlogId
    const blog = blogData[blogId]

    if (!blog) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20">
            {/* Enhanced Header with Background Effects */}
            <div className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    {/* Back Navigation */}
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            asChild
                            className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400"
                        >
                            <Link
                                href="/blogs"
                                className="flex items-center gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                {t('blog.backToArticles')}
                            </Link>
                        </Button>
                    </div>

                    {/* Hero Section */}
                    <div className="w-full mx-auto mb-16">
                        <div className="relative mb-12">
                            {/* Featured Image */}
                            <div className="relative w-full h-80 md:h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                                <Image
                                    src={blog.image || '/placeholder.svg'}
                                    alt={blog.title[currentLanguage]}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Badges on image */}
                                <div className="absolute top-6 left-6 flex gap-3 z-20">
                                    {blog.section && (
                                        <Badge
                                            variant="outline"
                                            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm px-3 py-1"
                                        >
                                            {blog.section}
                                        </Badge>
                                    )}
                                    <Badge
                                        variant="secondary"
                                        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm px-3 py-1"
                                    >
                                        {t(
                                            `blog.languageLabels.${blog.originalLanguage}` as any
                                        )}
                                    </Badge>
                                </div>

                                {/* Title overlay */}
                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                        {blog.title[currentLanguage]}
                                    </h1>

                                    {/* Meta information */}
                                    <div className="flex flex-wrap items-center gap-6 text-white/90 text-base">
                                        <div className="flex items-center gap-2">
                                            <User className="h-5 w-5" />
                                            {blog.author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-5 w-5" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-5 w-5" />
                                            {blog.readTime[currentLanguage]}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Excerpt - Enhanced Design */}
                            <div className="mt-16 max-w-4xl mx-auto">
                                <div className="relative">
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-blue-100/20 to-emerald-100/20 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-emerald-900/10 rounded-2xl blur-xl"></div>

                                    <div className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50 p-8 md:p-12 shadow-lg">
                                        {/* Quote decoration */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full"></div>
                                        </div>

                                        <blockquote className="text-center">
                                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed font-light italic tracking-wide">
                                                "{blog.excerpt[currentLanguage]}
                                                "
                                            </p>
                                        </blockquote>

                                        {/* Bottom decoration */}
                                        <div className="flex justify-center mt-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section - Giãn rộng và đặt trước AI Summarizer */}
            <div className="w-full px-4 pb-16">
                {/* Enhanced Content Card với khoảng cách rộng hơn */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Background decoration for content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl blur-xl"></div>

                    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                        {/* Main content area với padding rộng hơn */}
                        <div className="p-8 md:p-12 lg:p-16 xl:p-24">
                            <BlogReader blog={blog} />
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Summarizer Section - Đặt ở dưới nội dung */}
            <div className="w-full px-4 pb-8">
                <div className="max-w-6xl mx-auto">
                    <BlogAISummarizer
                        blogContent={blog.content[currentLanguage]}
                        blogTitle={blog.title[currentLanguage]}
                        language={currentLanguage}
                    />
                </div>
            </div>

            {/* Navigation Section - Previous/Next Articles */}
            <div className="w-full px-4 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-gray-100/50 to-slate-100/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50 rounded-2xl blur-xl"></div>

                        <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Previous Article */}
                                {(() => {
                                    const prevId = blogId - 1
                                    const prevBlog =
                                        prevId > 0
                                            ? blogData[prevId as BlogId]
                                            : null
                                    return prevBlog ? (
                                        <Link
                                            href={`/blog/${prevId}`}
                                            className="group"
                                        >
                                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <ArrowLeft className="h-5 w-5 text-white" />
                                                    </div>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm text-muted-foreground mb-1">
                                                        {currentLanguage ===
                                                        'vietnamese'
                                                            ? 'Bài trước'
                                                            : 'Previous'}
                                                    </p>
                                                    <h3 className="text-base font-medium line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                        {
                                                            prevBlog.title[
                                                                currentLanguage
                                                            ]
                                                        }
                                                    </h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 rounded-xl opacity-50">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                                    <ArrowLeft className="h-5 w-5 text-gray-400" />
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm text-muted-foreground">
                                                    {currentLanguage ===
                                                    'vietnamese'
                                                        ? 'Không có bài trước'
                                                        : 'No previous article'}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })()}

                                {/* Next Article */}
                                {(() => {
                                    const nextId = blogId + 1
                                    const nextBlog = blogData[nextId as BlogId]
                                    return nextBlog ? (
                                        <Link
                                            href={`/blog/${nextId}`}
                                            className="group"
                                        >
                                            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                <div className="min-w-0 flex-1 text-right">
                                                    <p className="text-sm text-muted-foreground mb-1">
                                                        {currentLanguage ===
                                                        'vietnamese'
                                                            ? 'Bài tiếp theo'
                                                            : 'Next'}
                                                    </p>
                                                    <h3 className="text-base font-medium line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                        {
                                                            nextBlog.title[
                                                                currentLanguage
                                                            ]
                                                        }
                                                    </h3>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <ArrowLeft className="h-5 w-5 text-white rotate-180" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="flex items-center gap-4 p-4 rounded-xl opacity-50">
                                            <div className="min-w-0 flex-1 text-right">
                                                <p className="text-sm text-muted-foreground">
                                                    {currentLanguage ===
                                                    'vietnamese'
                                                        ? 'Không có bài tiếp theo'
                                                        : 'No next article'}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                                    <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })()}
                            </div>

                            {/* Back to Articles Button */}
                            <div className="mt-8 text-center">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30"
                                >
                                    <Link
                                        href="/blogs"
                                        className="flex items-center gap-2"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        {currentLanguage === 'vietnamese'
                                            ? 'Về danh sách bài viết'
                                            : 'Back to Articles'}
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
