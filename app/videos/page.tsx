'use client'

import { VideoCard } from '@/components/video-card'
import { useLanguage } from '@/contexts/language-context'
import { useEffect, useState } from 'react'

// Define a type for the video data structure for better type safety
interface VideoData {
    id: number
    title: string
    description: string
    thumbnail: string
    duration: string
    youtubeUrl: string
    uploadDate: string
    views: number
}

export default function VideosPage() {
    const { t } = useLanguage()
    const [videos, setVideos] = useState<VideoData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // List of video information including URLs and manual data
        const videoInfoList = [
            {
                id: 1,
                url: 'https://www.youtube.com/watch?v=YMdUVldvp7Q',
                title: 'TTHCM về thời kỳ quá độ lên chủ nghĩa xã hội',
                descriptionKey: 'videos.sampleVideo1Description',
                duration: '25:42',
                uploadDate: '2024-01-15',
                views: 1250,
            },
            {
                id: 2,
                url: 'https://www.youtube.com/watch?v=53vmQNVBm0w',
                title: 'CAPITALISM, SOCIALISM & COMMUNISM EXPLAINED SIMPLY',
                descriptionKey: 'videos.sampleVideo2Description',
                duration: '18:35',
                uploadDate: '2024-01-10',
                views: 890,
            },
            {
                id: 3,
                url: 'https://www.youtube.com/watch?v=B8PJzEqEVWU',
                title: 'How Vietnam Became an Economic Superstar Under Communist Rule',
                descriptionKey: 'videos.sampleVideo3Description',
                duration: '22:18',
                uploadDate: '2024-01-05',
                views: 2100,
            },
        ]

        const fetchVideoDetails = async () => {
            setIsLoading(true)
            try {
                // Create an array of promises to fetch details for all videos concurrently
                const videoDetailsPromises = videoInfoList.map(
                    async (videoInfo) => {
                        // Use a public oEmbed service (noembed.com) to get video metadata without CORS issues or API keys
                        const response = await fetch(
                            `https://noembed.com/embed?url=${encodeURIComponent(
                                videoInfo.url
                            )}`
                        )
                        if (!response.ok) {
                            throw new Error(
                                `Failed to fetch data for ${videoInfo.url}`
                            )
                        }
                        const data = await response.json()

                        // Combine fetched data with manual data
                        return {
                            id: videoInfo.id,
                            title:
                                videoInfo.title ||
                                data.title ||
                                'Untitled Video', // Use manual title first, then fetched title
                            description: t(videoInfo.descriptionKey as any), // Manual description from translations
                            thumbnail:
                                data.thumbnail_url ||
                                '/placeholder.svg?height=200&width=350', // Fetched thumbnail
                            duration: videoInfo.duration,
                            youtubeUrl: videoInfo.url,
                            uploadDate: videoInfo.uploadDate,
                            views: videoInfo.views,
                        }
                    }
                )

                // Wait for all fetch requests to complete
                const detailedVideos = await Promise.all(videoDetailsPromises)
                setVideos(detailedVideos as VideoData[])
            } catch (error) {
                console.error('Failed to fetch video details:', error)
                // You could set an error state here to show a message to the user
            } finally {
                setIsLoading(false)
            }
        }

        fetchVideoDetails()
    }, [t]) // Re-run the effect if the language changes to update descriptions

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
                <div className="container mx-auto px-4 py-8 pt-28 pb-20 relative min-h-screen">
                    {/* Elegant Header Section */}
                    <div className="mb-16">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            {/* Refined Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-800/40 rounded-full backdrop-blur-sm">
                                <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-amber-800 dark:text-amber-200 tracking-wide">
                                    {isLoading ? '...' : videos.length}{' '}
                                    {t('videos.videosAvailable')}
                                </span>
                            </div>

                            {/* Elegant Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 dark:text-stone-100 tracking-tight leading-none">
                                <span className="font-extralight italic text-amber-800 dark:text-amber-200">
                                    {t('videos.title').split(' ')[0]}
                                </span>
                                <br />
                                <span className="font-bold">
                                    {t('videos.title')
                                        .split(' ')
                                        .slice(1)
                                        .join(' ')}
                                </span>
                            </h1>

                            {/* Subtle Description */}
                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
                                {t('videos.description')}
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

                    {/* Video Content Section */}
                    {isLoading ? (
                        // Elegant Loading Skeleton
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="group relative"
                                        style={{
                                            opacity: 0,
                                            transform: 'translateY(20px)',
                                            animation: `fadeInUp 0.6s ease-out ${
                                                i * 0.1
                                            }s forwards`,
                                        }}
                                    >
                                        <div className="relative bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-2xl overflow-hidden shadow-lg shadow-stone-500/10 dark:shadow-black/20">
                                            {/* Skeleton Thumbnail */}
                                            <div className="aspect-video bg-gradient-to-br from-amber-100/40 via-stone-100/40 to-slate-100/40 dark:from-amber-900/20 dark:via-stone-900/20 dark:to-slate-900/20 animate-pulse"></div>

                                            {/* Skeleton Content */}
                                            <div className="p-6 space-y-3">
                                                <div className="h-4 bg-gradient-to-r from-amber-200/40 via-stone-200/40 to-slate-200/40 dark:from-amber-800/20 dark:via-stone-800/20 dark:to-slate-800/20 rounded animate-pulse"></div>
                                                <div className="h-3 bg-gradient-to-r from-stone-200/40 to-slate-200/40 dark:from-stone-800/20 dark:to-slate-800/20 rounded w-3/4 animate-pulse"></div>
                                                <div className="h-3 bg-gradient-to-r from-amber-200/40 to-stone-200/40 dark:from-amber-800/20 dark:to-stone-800/20 rounded w-1/2 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Elegant Video Grid
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videos.map((video, index) => (
                                    <div
                                        key={video.id}
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

                                            <VideoCard video={video} />
                                        </div>

                                        {/* Floating Academic Decoration */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50 rounded-full border border-amber-300/50 dark:border-amber-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 shadow-lg">
                                            <div className="absolute inset-1 bg-amber-400/20 dark:bg-amber-500/20 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
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
