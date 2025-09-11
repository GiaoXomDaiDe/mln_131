// app/quiz/[chapterId]/page.tsx
'use client'

import { Quiz } from '@/components/quiz'
import { notFound } from 'next/navigation'
import { blogData } from '@/data/blog-data'
// SỬA LỖI 1: Đổi tên import từ philosophyChapters thành philosophyBlogs
import {
    philosophyBlogs,
    type ChapterId,
    type SectionId,
} from '@/data/philosophy-chapters'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

interface QuizPageProps {
    params: { chapterId: string }
}

export default function QuizChapterPage({ params }: QuizPageProps) {
    const { chapterId } = params
    const { t, getLocalizedContent, currentLanguage } = useLanguage()

    let sectionsInChapter: SectionId[] = []
    let chapterTitleLocalized: string = ''

    // SỬA LỖI 2: Bổ sung các section còn thiếu cho chương 2 và 3
    if (chapterId === '2') {
        sectionsInChapter = [
            ...philosophyBlogs['2.1'].sections,
            ...philosophyBlogs['2.2'].sections,
            ...philosophyBlogs['2.3'].sections, // Bổ sung section 2.3
        ]
        // Cập nhật lại tiêu đề cho đầy đủ
        chapterTitleLocalized = t('footer.blog2') // Dùng key từ translations cho tiện
    } else if (chapterId === '3') {
        sectionsInChapter = [
            ...philosophyBlogs['3.1'].sections,
            ...philosophyBlogs['3.2'].sections,
            ...philosophyBlogs['3.3'].sections, // Bổ sung section 3.3
        ]
        // Cập nhật lại tiêu đề cho đầy đủ
        chapterTitleLocalized = t('footer.blog3') // Dùng key từ translations cho tiện
    } else {
        const specificChapterId = chapterId as ChapterId
        if (philosophyBlogs[specificChapterId]) {
            sectionsInChapter = philosophyBlogs[specificChapterId].sections
            chapterTitleLocalized = getLocalizedContent(
                philosophyBlogs[specificChapterId].title,
            )
        } else {
            notFound()
        }
    }

    // Lọc dữ liệu blog để lấy các quiz của các section trong chương
    const chapterBlogs = Object.values(blogData).filter((blog) =>
        sectionsInChapter.includes(blog.section),
    )

    // Kết hợp tất cả các câu hỏi quiz từ các blog của chương
    const combinedQuizQuestions = chapterBlogs.flatMap(
        (blog) => blog.quiz?.[currentLanguage] || [],
    )

    if (combinedQuizQuestions.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-4xl text-center">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('quiz.noQuizAvailable')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{t('quiz.noQuizQuestionsMessage')}</p>
                        <Button asChild className="mt-4">
                            <Link href="/quiz">
                                {t('quiz.backToQuizOverview')}
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center">
                {/* Sửa lại key translation cho phù hợp hơn */}
                {t('quiz.quizForBlog', { blog: chapterId })}: {chapterTitleLocalized}
            </h1>
            <Quiz questions={combinedQuizQuestions} />
        </div>
    )
}