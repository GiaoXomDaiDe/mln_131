'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useLanguage } from '@/contexts/language-context'
import YouTubeApiService, { VideoInfo } from '@/services/YouTubeApiService'
import {
    ArrowLeft,
    BookOpen,
    Calendar1,
    ExternalLink,
    Eye,
    Globe,
    Play,
    ThumbsUp,
    TrendingUp,
    Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Video data with URLs and manual descriptions
const videoInfoList = [
    {
        id: 1,
        url: 'https://www.youtube.com/watch?v=AtbQeFo0c0U',
        descriptionKey: 'videos.hoChiMinhUnity1Description',
    },
    {
        id: 2,
        url: 'https://www.youtube.com/watch?v=euqtheBsAYo',
        descriptionKey: 'videos.hoChiMinhUnity2Description',
    },
    {
        id: 3,
        url: 'https://www.youtube.com/watch?v=Lkf7huMlpJI',
        descriptionKey: 'videos.hoChiMinhUnity3Description',
    },
]

// Enhanced video data structure
interface DetailedVideoData extends VideoInfo {
    descriptionKey?: string
    manualDescription?: string
}

// Helper functions
const getYouTubeVideoId = (url: string) => {
    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )
    return match?.[1] || ''
}

const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
}

const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

const getTimeAgo = (dateString: string): string => {
    const now = new Date()
    const publishDate = new Date(dateString)
    const diffInMs = now.getTime() - publishDate.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays < 1) return 'Hôm nay'
    if (diffInDays < 7) return `${diffInDays} ngày trước`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} tuần trước`
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} tháng trước`
    return `${Math.floor(diffInDays / 365)} năm trước`
}

export default function VideoPlayerPage() {
    const { t } = useLanguage()
    const params = useParams()
    const videoId = parseInt(params.id as string)

    const [currentVideo, setCurrentVideo] = useState<DetailedVideoData | null>(
        null
    )
    const [relatedVideos, setRelatedVideos] = useState<DetailedVideoData[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchVideoData = async () => {
            setIsLoading(true)
            setError(null)

            try {
                console.log(
                    '[Video Detail] Fetching data for video ID:',
                    videoId
                )

                const youtubeService = YouTubeApiService.getInstance()

                // Test connection
                const connectionTest = await youtubeService.testConnection()
                if (!connectionTest) {
                    throw new Error('YouTube API connection failed')
                }

                // Get all video URLs
                const allUrls = videoInfoList.map((info) => info.url)

                // Fetch all videos data
                const videosData =
                    await youtubeService.getMultipleVideosInfo(allUrls)

                // Process and combine with manual descriptions
                const processedVideos = videoInfoList
                    .map((info, index) => {
                        const youtubeData = videosData[index]
                        if (youtubeData) {
                            return {
                                ...youtubeData,
                                descriptionKey: info.descriptionKey,
                                manualDescription: t(
                                    info.descriptionKey as any
                                ),
                            } as DetailedVideoData
                        }
                        return null
                    })
                    .filter(Boolean) as DetailedVideoData[]

                // Find current video
                const current = processedVideos.find((v) => {
                    const videoIndex = videoInfoList.findIndex(
                        (info) => info.id === videoId
                    )
                    return (
                        videoIndex !== -1 &&
                        v.id ===
                            getYouTubeVideoId(videoInfoList[videoIndex].url)
                    )
                })

                if (current) {
                    setCurrentVideo(current)
                    setRelatedVideos(
                        processedVideos.filter((v) => v.id !== current.id)
                    )
                } else {
                    throw new Error('Video not found')
                }
            } catch (error) {
                console.error(
                    '[Video Detail] Error fetching video data:',
                    error
                )
                setError(
                    error instanceof Error ? error.message : 'Unknown error'
                )

                // Fallback to basic data
                const videoInfo = videoInfoList.find(
                    (info) => info.id === videoId
                )
                if (videoInfo) {
                    const basicVideo: DetailedVideoData = {
                        id: getYouTubeVideoId(videoInfo.url),
                        title: `Video ${videoId}`,
                        description: t(videoInfo.descriptionKey as any),
                        thumbnail: '/placeholder.svg?height=300&width=500',
                        duration: 'Unknown',
                        channelTitle: 'Unknown Channel',
                        publishedAt: new Date().toISOString(),
                        viewCount: 0,
                        likeCount: 0,
                        commentCount: 0,
                        youtubeUrl: videoInfo.url,
                        descriptionKey: videoInfo.descriptionKey,
                        manualDescription: t(videoInfo.descriptionKey as any),
                    }
                    setCurrentVideo(basicVideo)
                }
            } finally {
                setIsLoading(false)
            }
        }

        fetchVideoData()
    }, [videoId, t])

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-stone-100 dark:from-slate-950 dark:via-amber-950/20 dark:to-stone-950">
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='33' cy='5' r='1'/%3E%3Ccircle cx='3' cy='23' r='1'/%3E%3Ccircle cx='23' cy='33' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>
                <div className="container mx-auto px-4 py-8 relative">
                    <Skeleton className="w-32 h-10 mb-8" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <Skeleton className="aspect-video w-full rounded-lg" />
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <Skeleton className="h-8 w-3/4" />
                                    <div className="flex gap-4">
                                        <Skeleton className="h-4 w-20" />
                                        <Skeleton className="h-4 w-20" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                    <Skeleton className="h-20 w-full" />
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardContent className="p-6">
                                    <Skeleton className="h-6 w-32 mb-4" />
                                    <div className="space-y-4">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex gap-3">
                                                <Skeleton className="w-24 h-16 rounded" />
                                                <div className="flex-1 space-y-2">
                                                    <Skeleton className="h-4 w-full" />
                                                    <Skeleton className="h-3 w-2/3" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Error state
    if (error || !currentVideo) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-stone-100 dark:from-slate-950 dark:via-amber-950/20 dark:to-stone-950 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        Video không tìm thấy
                    </h1>
                    <p className="text-stone-600 dark:text-stone-400 mb-6">
                        {error ||
                            'Không thể tải video này. Vui lòng thử lại sau.'}
                    </p>
                    <Link href="/videos">
                        <Button variant="outline" size="lg">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Quay lại danh sách video
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const youtubeVideoId = currentVideo.id
    const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-stone-100 dark:from-slate-950 dark:via-amber-950/20 dark:to-stone-950">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3Ccircle cx='33' cy='5' r='1'/%3E%3Ccircle cx='3' cy='23' r='1'/%3E%3Ccircle cx='23' cy='33' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative">
                {/* Header with Enhanced Navigation */}
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <Link href="/videos">
                            <Button
                                variant="outline"
                                size="lg"
                                className="backdrop-blur-sm bg-white/80 dark:bg-stone-900/80 border-amber-200/50 dark:border-amber-800/50 hover:bg-amber-50 dark:hover:bg-amber-950/20"
                            >
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Danh sách video
                            </Button>
                        </Link>

                        <Badge
                            variant="secondary"
                            className="px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40"
                        >
                            <Play className="w-3 h-3 mr-2" />
                            Video học tập
                        </Badge>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-12">
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                        {/* Main Video Section - Enhanced */}
                        <div className="xl:col-span-3 space-y-8">
                            {/* Video Player with Enhanced Frame */}
                            <Card className="overflow-hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-2 border-amber-200/50 dark:border-amber-800/50 shadow-2xl shadow-amber-500/10 dark:shadow-black/20">
                                <div className="relative">
                                    {/* Decorative header */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>

                                    <div className="aspect-video bg-black rounded-b-lg">
                                        <iframe
                                            src={embedUrl}
                                            title={currentVideo.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            className="w-full h-full rounded-b-lg"
                                        />
                                    </div>
                                </div>
                            </Card>

                            {/* Enhanced Video Information */}
                            <Card className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-amber-200/50 dark:border-amber-800/50 shadow-lg">
                                <CardHeader className="pb-4">
                                    <div className="space-y-2">
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                                            {currentVideo.title}
                                        </h1>
                                        <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                                            <Users className="w-4 h-4" />
                                            <span className="font-medium">
                                                {currentVideo.channelTitle}
                                            </span>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    {/* Stats Grid - Simplified */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-xl p-4 border border-blue-200/50 dark:border-blue-800/50">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                    <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                                                        {formatNumber(
                                                            currentVideo.viewCount
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-blue-700 dark:text-blue-300">
                                                        Lượt xem
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-xl p-4 border border-green-200/50 dark:border-green-800/50">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                                    <ThumbsUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-green-900 dark:text-green-100">
                                                        {formatNumber(
                                                            currentVideo.likeCount
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-green-700 dark:text-green-300">
                                                        Thích
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Publication Info */}
                                    <div className="flex items-center gap-4 p-4 bg-stone-50/50 dark:bg-stone-800/20 rounded-xl border border-stone-200/50 dark:border-stone-700/50">
                                        <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-lg">
                                            <Calendar1 className="h-5 w-5 text-stone-600 dark:text-stone-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-stone-900 dark:text-stone-100">
                                                Xuất bản:{' '}
                                                {formatDate(
                                                    currentVideo.publishedAt
                                                )}
                                            </div>
                                            <div className="text-sm text-stone-600 dark:text-stone-400">
                                                {getTimeAgo(
                                                    currentVideo.publishedAt
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced Description */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                            <h3 className="font-semibold text-lg text-stone-900 dark:text-stone-100">
                                                Nội dung video
                                            </h3>
                                        </div>

                                        <div className="bg-gradient-to-br from-amber-50/50 via-stone-50/50 to-slate-50/50 dark:from-amber-950/10 dark:via-stone-950/10 dark:to-slate-950/10 rounded-xl p-6 border border-amber-200/30 dark:border-amber-800/30">
                                            <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-base">
                                                {currentVideo.manualDescription}
                                            </p>
                                        </div>

                                        {/* YouTube Description if available */}
                                        {currentVideo.description &&
                                            currentVideo.description !==
                                                currentVideo.manualDescription && (
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                                                        <h4 className="font-medium text-stone-700 dark:text-stone-300">
                                                            Mô tả
                                                        </h4>
                                                    </div>
                                                    <div className="bg-stone-50/50 dark:bg-stone-900/20 rounded-lg p-4 border border-stone-200/50 dark:border-stone-700/50">
                                                        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-3">
                                                            {currentVideo.description.slice(
                                                                0,
                                                                300
                                                            )}
                                                            ...
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Enhanced Sidebar */}
                        <div className="space-y-6">
                            {/* Related Videos */}
                            <Card className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-amber-200/50 dark:border-amber-800/50 shadow-lg">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-lg">
                                            <TrendingUp className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                                        </div>
                                        <h3 className="font-semibold text-lg text-stone-900 dark:text-stone-100">
                                            Video liên quan
                                        </h3>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {relatedVideos.map((video, index) => {
                                        const relatedVideoInfo =
                                            videoInfoList.find(
                                                (info) =>
                                                    getYouTubeVideoId(
                                                        info.url
                                                    ) === video.id
                                            )

                                        return (
                                            <Link
                                                key={video.id}
                                                href={`/videos/${relatedVideoInfo?.id || index + 1}`}
                                            >
                                                <div className="group flex gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-stone-50/50 dark:hover:from-amber-950/10 dark:hover:to-stone-950/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-amber-200/50 dark:hover:border-amber-800/30">
                                                    {/* Enhanced Thumbnail */}
                                                    <div className="flex-shrink-0 relative">
                                                        <div className="w-28 h-20 rounded-lg overflow-hidden border border-stone-200/50 dark:border-stone-700/50">
                                                            <Image
                                                                src={
                                                                    video.thumbnail
                                                                }
                                                                alt={
                                                                    video.title
                                                                }
                                                                width={112}
                                                                height={80}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>

                                                        {/* Play button overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                                                                <Play className="w-4 h-4 text-amber-600 ml-0.5" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Enhanced Info */}
                                                    <div className="flex-1 min-w-0 space-y-2">
                                                        <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 line-clamp-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                                                            {video.title}
                                                        </h4>

                                                        <div className="text-xs text-stone-500 dark:text-stone-400">
                                                            {video.channelTitle}
                                                        </div>

                                                        <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
                                                            <div className="flex items-center gap-1">
                                                                <Eye className="w-3 h-3" />
                                                                {formatNumber(
                                                                    video.viewCount
                                                                )}
                                                            </div>
                                                            <span>•</span>
                                                            <div className="flex items-center gap-1">
                                                                <ThumbsUp className="w-3 h-3" />
                                                                {formatNumber(
                                                                    video.likeCount
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </CardContent>
                            </Card>

                            {/* YouTube Link Only */}
                            <Card className="bg-gradient-to-br from-amber-50/50 via-stone-50/50 to-slate-50/50 dark:from-amber-950/10 dark:via-stone-950/10 dark:to-slate-950/10 backdrop-blur-md border-amber-200/50 dark:border-amber-800/50">
                                <CardContent className="p-4">
                                    <Link
                                        href={currentVideo.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Xem trên YouTube
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
