'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useLanguage } from '@/contexts/language-context'
import type { SummaryResult } from '@/services/AIContentSummarizer'
import {
    Check,
    ChevronDown,
    ChevronUp,
    Copy,
    FileText,
    Loader2,
    Sparkles,
} from 'lucide-react'
import React, { useState } from 'react'

interface BlogAISummarizerProps {
    blogContent: string
    blogTitle: string
    language: 'vietnamese' | 'english'
}

export function BlogAISummarizer({
    blogContent,
    blogTitle,
    language,
}: BlogAISummarizerProps) {
    const { currentLanguage } = useLanguage()
    const [isLoading, setIsLoading] = useState(false)
    const [summaries, setSummaries] = useState<{
        [key: string]: SummaryResult
    }>({})
    const [isOpen, setIsOpen] = useState(false)
    const [copiedStates, setCopiedStates] = useState<{
        [key: string]: boolean
    }>({})

    // Get current summary for the active language
    const currentSummary = summaries[language]

    // Reset open state when language changes and no summary exists for new language
    React.useEffect(() => {
        if (!currentSummary) {
            setIsOpen(false)
        }
    }, [language, currentSummary])

    const handleSummarize = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: blogContent,
                    title: blogTitle,
                    language: language,
                    summaryType: 'full', // full, excerpt, concepts, bullets
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(
                    errorData.details || 'Failed to summarize content'
                )
            }

            const result = await response.json()

            setSummaries((prev) => ({
                ...prev,
                [language]: result,
            }))
            setIsOpen(true)
        } catch (error) {
            console.error('Error summarizing content:', error)
            const errorMessage =
                error instanceof Error ? error.message : 'Unknown error'
            alert(
                currentLanguage === 'vietnamese'
                    ? `Có lỗi xảy ra khi tóm tắt: ${errorMessage}`
                    : `Error summarizing content: ${errorMessage}`
            )
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = async (text: string, key: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedStates((prev) => ({ ...prev, [key]: true }))

            // Reset copied state after 2 seconds
            setTimeout(() => {
                setCopiedStates((prev) => ({ ...prev, [key]: false }))
            }, 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg border-purple-100 dark:border-purple-900/30">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-purple-500" />
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">
                            {currentLanguage === 'vietnamese'
                                ? 'AI Tóm Tắt Nội Dung'
                                : 'AI Content Summary'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm">
                            {currentLanguage === 'vietnamese'
                                ? 'Tiếng Việt'
                                : 'English'}
                        </Badge>
                        <Badge variant="secondary" className="text-sm">
                            GPT-4o
                        </Badge>
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {!currentSummary ? (
                    <div className="text-center py-4">
                        <p className="text-sm text-muted-foreground mb-4">
                            {currentLanguage === 'vietnamese'
                                ? 'Sử dụng AI để tóm tắt nội dung bài viết thành các điểm chính'
                                : 'Use AI to summarize article content into key points'}
                        </p>
                        <Button
                            onClick={handleSummarize}
                            disabled={isLoading}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                            size="sm"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    {currentLanguage === 'vietnamese'
                                        ? 'Đang tóm tắt...'
                                        : 'Summarizing...'}
                                </>
                            ) : (
                                <>
                                    <FileText className="h-4 w-4 mr-2" />
                                    {currentLanguage === 'vietnamese'
                                        ? 'Tóm tắt AI'
                                        : 'AI Summarize'}
                                </>
                            )}
                        </Button>
                    </div>
                ) : (
                    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className="w-full flex items-center justify-between p-3 h-auto hover:bg-purple-50 dark:hover:bg-purple-950/20 text-base"
                            >
                                <span className="font-medium">
                                    {currentLanguage === 'vietnamese'
                                        ? 'Xem kết quả tóm tắt AI'
                                        : 'View AI Summary Results'}
                                </span>
                                {isOpen ? (
                                    <ChevronUp className="h-5 w-5" />
                                ) : (
                                    <ChevronDown className="h-5 w-5" />
                                )}
                            </Button>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="space-y-6 mt-4">
                            {/* Excerpt */}
                            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-base font-semibold text-purple-700 dark:text-purple-300">
                                        {currentLanguage === 'vietnamese'
                                            ? '📝 Tóm tắt ngắn'
                                            : '📝 Brief Summary'}
                                    </h4>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            copyToClipboard(
                                                currentSummary.excerpt,
                                                'excerpt'
                                            )
                                        }
                                        className="h-8 w-8 p-0"
                                    >
                                        {copiedStates.excerpt ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                <p className="text-sm leading-relaxed">
                                    {currentSummary.excerpt}
                                </p>
                            </div>

                            {/* Key Concepts */}
                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-base font-semibold text-green-700 dark:text-green-300">
                                        {currentLanguage === 'vietnamese'
                                            ? '🎯 Khái niệm chính'
                                            : '🎯 Key Concepts'}
                                    </h4>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            copyToClipboard(
                                                currentSummary.keyConcepts.join(
                                                    ', '
                                                ),
                                                'concepts'
                                            )
                                        }
                                        className="h-8 w-8 p-0"
                                    >
                                        {copiedStates.concepts ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {currentSummary.keyConcepts
                                        .slice(0, 8)
                                        .map((concept, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="text-sm px-3 py-1"
                                            >
                                                {concept}
                                            </Badge>
                                        ))}
                                </div>
                            </div>

                            {/* Bullet Points */}
                            <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-base font-semibold text-orange-700 dark:text-orange-300">
                                        {currentLanguage === 'vietnamese'
                                            ? '📋 Điểm chính'
                                            : '📋 Main Points'}
                                    </h4>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            copyToClipboard(
                                                currentSummary.bulletPoints.join(
                                                    '\n• '
                                                ),
                                                'bullets'
                                            )
                                        }
                                        className="h-8 w-8 p-0"
                                    >
                                        {copiedStates.bullets ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                <ul className="text-sm space-y-2">
                                    {currentSummary.bulletPoints
                                        .slice(0, 5)
                                        .map((point, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-orange-500 mt-1 text-base">
                                                    •
                                                </span>
                                                <span className="leading-relaxed">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Regenerate button */}
                            <Button
                                onClick={handleSummarize}
                                disabled={isLoading}
                                variant="outline"
                                size="default"
                                className="w-full"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        {currentLanguage === 'vietnamese'
                                            ? 'Đang tạo lại...'
                                            : 'Regenerating...'}
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-4 w-4 mr-2" />
                                        {currentLanguage === 'vietnamese'
                                            ? 'Tạo lại tóm tắt'
                                            : 'Regenerate Summary'}
                                    </>
                                )}
                            </Button>
                        </CollapsibleContent>
                    </Collapsible>
                )}
            </CardContent>
        </Card>
    )
}
