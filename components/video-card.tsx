'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/language-context'
import { Calendar, Eye, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Video {
    id: number
    title: string
    description: string
    thumbnail: string
    duration: string
    youtubeUrl: string
    uploadDate: string
    views: number
}

interface VideoCardProps {
    video: Video
}

export function VideoCard({ video }: VideoCardProps) {
    const { t } = useLanguage()

    const formatViews = (views: number) => {
        if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}K`
        }
        return views.toString()
    }

    return (
        <Link href={`/videos/${video.id}`} className="block">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                    <div className="relative">
                        <div className="relative aspect-video group cursor-pointer">
                            <Image
                                src={video.thumbnail || '/placeholder.svg'}
                                alt={video.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-amber-500 hover:bg-amber-600 border-none shadow-lg"
                                >
                                    <Play
                                        className="h-6 w-6 ml-1"
                                        fill="white"
                                    />
                                </Button>
                            </div>
                            <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
                                {video.duration}
                            </Badge>
                        </div>
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                            {video.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {video.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {formatViews(video.views)} {t('videos.views')}
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {video.uploadDate}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
