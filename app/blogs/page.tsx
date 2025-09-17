'use client'

import { BlogCard } from '@/components/blog-card'
import { BlogSelector } from '@/components/chapter-selector'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/language-context'
import { blogData } from '@/data/blog-data'
import { BookOpen, Filter, Search, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
// Import philosophy data for filtering logic
import { philosophyBlogs, type SectionId } from '@/data/philosophy-chapters'

// Convert blog data to array format
const allblogs = Object.values(blogData).map((blog) => ({
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

export default function blogsPage() {
    const { t } = useLanguage()
    const searchParams = useSearchParams()
    const [selectedBlog, setSelectedBlog] = useState('all')
    const [selectedSection, setSelectedSection] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    // Handle URL parameters on component mount
    useEffect(() => {
        const blogParam = searchParams.get('blog')
        if (blogParam && Object.keys(philosophyBlogs).includes(blogParam)) {
            setSelectedBlog(blogParam)
        }
    }, [searchParams])

    const handleBlogChange = (blog: string) => {
        setSelectedBlog(blog)
        setSelectedSection('all') // Reset section when blog changes
    }

    const handleSectionChange = (section: string) => {
        setSelectedSection(section)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const clearAllFilters = () => {
        setSearchTerm('')
        setSelectedBlog('all')
        setSelectedSection('all')
    }

    // Check if any filters are active
    const hasActiveFilters = searchTerm !== '' || selectedBlog !== 'all'

    // Logic lọc blog dựa trên chương, mục và từ khóa tìm kiếm
    const filteredblogs = allblogs.filter((blog) => {
        // 1. Lọc theo từ khóa tìm kiếm (trên tiêu đề và tóm tắt tiếng Việt)
        const matchesSearch =
            blog.title.vietnamese
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            blog.excerpt.vietnamese
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

        // 2. Lọc theo chương và mục
        let matchesBlogAndSection = true

        if (selectedBlog !== 'all') {
            // Nếu có chương được chọn
            // Ensure selectedBlog is a valid BlogId for indexing philosophyBlogs
            const blogKey = selectedBlog as keyof typeof philosophyBlogs //
            const blogSections = philosophyBlogs[blogKey]?.sections //

            if (blogSections) {
                // Use readonly array type assertion to match the actual type from philosophyBlogs
                matchesBlogAndSection = (
                    blogSections as readonly SectionId[]
                ).includes(blog.section as SectionId)

                if (selectedSection !== 'all') {
                    // Nếu có cả mục con được chọn
                    // Ensure selectedSection is a valid SectionId for comparison
                    matchesBlogAndSection =
                        matchesBlogAndSection &&
                        blog.section === (selectedSection as SectionId)
                }
            } else {
                // Nếu chương không tồn tại trong philosophyBlogs, không khớp
                matchesBlogAndSection = false
            }
        }

        return matchesSearch && matchesBlogAndSection
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden">
            {/* Elegant Academic Background Pattern */}
            <div className="absolute inset-0 opacity-40 dark:opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Full Page Content Overlay with Lower Opacity */}
            <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen">
                    {/* Added pb-20 and min-h-screen */}
                    {/* Minimalist Header with Elegant Typography */}
                    <div className="mb-16">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            {/* Refined Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-amber-800 dark:text-amber-200 tracking-wide">
                                    {filteredblogs.length}{' '}
                                    {t('blogPage.articlesAvailable')}
                                </span>
                            </div>

                            {/* Elegant Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                                <span className="font-extralight italic text-amber-800 dark:text-amber-200">
                                    {t('blogPage.heroTitle').split(' ')[0]}
                                </span>
                                <br />
                                <span className="font-bold">
                                    {t('blogPage.heroTitle')
                                        .split(' ')
                                        .slice(1)
                                        .join(' ')}
                                </span>
                            </h1>

                            {/* Subtle Description */}
                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
                                {t('blogPage.heroDescription')}
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

                    {/* Sophisticated Filter Section */}
                    <div className="mb-12">
                        <div className="max-w-5xl mx-auto">
                            {/* Filter Card with Academic Styling */}
                            <div className="bg-white/60 dark:bg-stone-900/60 backdrop-blur-xl border border-stone-200/40 dark:border-stone-700/40 rounded-2xl shadow-xl shadow-stone-500/10 dark:shadow-black/20 overflow-hidden">
                                {/* Filter Header */}
                                <div className="bg-gradient-to-r from-amber-50/80 via-stone-50/80 to-slate-50/80 dark:from-amber-950/40 dark:via-stone-950/40 dark:to-slate-950/40 border-b border-stone-200/40 dark:border-stone-700/40 p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-amber-600 dark:bg-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                                                <Filter className="w-4 h-4 text-white" />
                                            </div>
                                            <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
                                                {t('blogPage.filterAndSearch')}
                                            </h2>
                                        </div>

                                        {/* Clear Filters - Elegant Button */}
                                        {hasActiveFilters && (
                                            <Button
                                                onClick={clearAllFilters}
                                                variant="ghost"
                                                size="sm"
                                                className="text-stone-600 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 hover:bg-stone-100/60 dark:hover:bg-stone-800/60 rounded-lg transition-all duration-200"
                                            >
                                                <X className="w-4 h-4 mr-2" />
                                                {t('blogPage.clearAll')}
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                {/* Filter Content */}
                                <div className="p-6 space-y-6">
                                    {/* Elegant Search */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Search className="w-5 h-5 text-stone-400 dark:text-stone-500 group-focus-within:text-amber-600 dark:group-focus-within:text-amber-400 transition-colors" />
                                        </div>
                                        <Input
                                            placeholder={t(
                                                'blogPage.searchPlaceholder'
                                            )}
                                            className="pl-12 pr-4 py-3 bg-stone-50/50 dark:bg-stone-800/50 border-stone-200/60 dark:border-stone-700/60 rounded-xl focus:border-amber-400 dark:focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 dark:focus:ring-amber-500/20 transition-all duration-200"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                    </div>

                                    {/* Refined Filter Row */}
                                    <div className="bg-stone-50/50 dark:bg-stone-800/30 rounded-xl p-4 border border-stone-200/30 dark:border-stone-700/30">
                                        <BlogSelector
                                            selectedBlog={selectedBlog}
                                            onBlogChange={handleBlogChange}
                                            selectedSection={selectedSection}
                                            onSectionChange={
                                                handleSectionChange
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Refined Results Summary */}
                    {(searchTerm || selectedBlog !== 'all') && (
                        <div className="mb-10 max-w-5xl mx-auto">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50/60 dark:bg-amber-900/30 border border-amber-200/40 dark:border-amber-800/30 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-amber-500 dark:bg-amber-400 rounded-full"></div>
                                    <span className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                                        {filteredblogs.length === 0
                                            ? t('blogPage.noResults')
                                            : `${filteredblogs.length} ${t(
                                                  'blogPage.resultsFound'
                                              )}`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Elegant Blog Grid with Masonry-like Layout */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredblogs.map((blog, index) => (
                                <div
                                    key={blog.id}
                                    className="group relative"
                                    style={{
                                        opacity: 0,
                                        transform: 'translateY(20px)',
                                        animation: `fadeInUp 0.6s ease-out ${
                                            index * 0.1
                                        }s forwards`,
                                    }}
                                >
                                    {/* Elegant Card Container */}
                                    <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 dark:shadow-black/20 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 dark:hover:shadow-amber-400/10 hover:-translate-y-2 hover:scale-[1.02]">
                                        {/* Subtle Accent Line */}
                                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <BlogCard blog={blog} />
                                    </div>

                                    {/* Floating Academic Decoration */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-full border border-amber-300/50 dark:border-amber-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 shadow-lg">
                                        <div className="absolute inset-1 bg-amber-400/20 dark:bg-amber-500/20 rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredblogs.length === 0 && (
                        <div className="text-center py-12">
                            <div className="relative">
                                {/* Background decoration */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-r from-stone-200/50 to-slate-200/50 dark:from-stone-800/30 dark:to-slate-800/30 rounded-full blur-2xl"></div>
                                </div>

                                <div className="relative z-10">
                                    <BookOpen className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                                    <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                                        {t('blog.noArticlesFound')}
                                    </h3>
                                    <p className="text-muted-foreground/70 max-w-md mx-auto">
                                        {t('blog.tryDifferentFilters')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
