import axios from 'axios'

interface YouTubeVideoSnippet {
    title: string
    description: string
    thumbnails: {
        default: { url: string; width: number; height: number }
        medium: { url: string; width: number; height: number }
        high: { url: string; width: number; height: number }
        standard?: { url: string; width: number; height: number }
        maxres?: { url: string; width: number; height: number }
    }
    channelTitle: string
    publishedAt: string
    channelId: string
    defaultLanguage?: string
    defaultAudioLanguage?: string
}

interface YouTubeVideoStatistics {
    viewCount: string
    likeCount: string
    commentCount: string
    favoriteCount: string
}

interface YouTubeVideoContentDetails {
    duration: string // ISO 8601 format (PT4M13S)
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
}

interface YouTubeVideoItem {
    id: string
    snippet: YouTubeVideoSnippet
    statistics: YouTubeVideoStatistics
    contentDetails: YouTubeVideoContentDetails
}

interface YouTubeApiResponse {
    items: YouTubeVideoItem[]
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
}

export interface VideoInfo {
    id: string
    title: string
    description: string
    thumbnail: string
    duration: string // Formatted duration (e.g., "4:13")
    channelTitle: string
    publishedAt: string
    viewCount: number
    likeCount: number
    commentCount: number
    youtubeUrl: string
}

class YouTubeApiService {
    private static instance: YouTubeApiService
    private apiKey: string
    private baseUrl = 'https://www.googleapis.com/youtube/v3'

    private constructor() {
        this.apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ''
        if (!this.apiKey) {
            console.warn(
                '[YouTube API] API key not found in environment variables'
            )
        }
    }

    public static getInstance(): YouTubeApiService {
        if (!YouTubeApiService.instance) {
            YouTubeApiService.instance = new YouTubeApiService()
        }
        return YouTubeApiService.instance
    }

    /**
     * Extract video ID from YouTube URL
     */
    private extractVideoId(url: string): string | null {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
            /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
        ]

        for (const pattern of patterns) {
            const match = url.match(pattern)
            if (match) {
                return match[1]
            }
        }

        console.error('[YouTube API] Could not extract video ID from URL:', url)
        return null
    }

    /**
     * Convert ISO 8601 duration to readable format
     */
    private formatDuration(isoDuration: string): string {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
        if (!match) return '0:00'

        const hours = parseInt(match[1] || '0')
        const minutes = parseInt(match[2] || '0')
        const seconds = parseInt(match[3] || '0')

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        } else {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`
        }
    }

    /**
     * Format number with K, M suffixes
     */
    private formatCount(count: string): number {
        return parseInt(count) || 0
    }

    /**
     * Get video information by video ID
     */
    public async getVideoInfo(videoId: string): Promise<VideoInfo | null> {
        try {
            console.log('[YouTube API] Fetching video info for ID:', videoId)

            const response = await axios.get<YouTubeApiResponse>(
                `${this.baseUrl}/videos`,
                {
                    params: {
                        key: this.apiKey,
                        id: videoId,
                        part: 'snippet,statistics,contentDetails',
                        fields: 'items(id,snippet(title,description,thumbnails,channelTitle,publishedAt),statistics(viewCount,likeCount,commentCount),contentDetails(duration))',
                    },
                }
            )

            if (!response.data.items || response.data.items.length === 0) {
                console.error('[YouTube API] Video not found:', videoId)
                return null
            }

            const video = response.data.items[0]
            const snippet = video.snippet
            const statistics = video.statistics
            const contentDetails = video.contentDetails

            // Choose the best available thumbnail
            const thumbnail =
                snippet.thumbnails.maxres?.url ||
                snippet.thumbnails.standard?.url ||
                snippet.thumbnails.high?.url ||
                snippet.thumbnails.medium?.url ||
                snippet.thumbnails.default?.url ||
                '/placeholder.svg?height=200&width=350'

            const videoInfo: VideoInfo = {
                id: video.id,
                title: snippet.title,
                description: snippet.description,
                thumbnail: thumbnail,
                duration: this.formatDuration(contentDetails.duration),
                channelTitle: snippet.channelTitle,
                publishedAt: snippet.publishedAt,
                viewCount: this.formatCount(statistics.viewCount),
                likeCount: this.formatCount(statistics.likeCount),
                commentCount: this.formatCount(statistics.commentCount),
                youtubeUrl: `https://www.youtube.com/watch?v=${video.id}`,
            }

            console.log(
                '[YouTube API] Successfully fetched video info:',
                videoInfo.title
            )
            return videoInfo
        } catch (error) {
            console.error('[YouTube API] Error fetching video info:', error)

            if (axios.isAxiosError(error)) {
                if (error.response?.status === 403) {
                    console.error(
                        '[YouTube API] API key invalid or quota exceeded'
                    )
                } else if (error.response?.status === 404) {
                    console.error('[YouTube API] Video not found or private')
                }
            }

            return null
        }
    }

    /**
     * Get video information by YouTube URL
     */
    public async getVideoInfoByUrl(url: string): Promise<VideoInfo | null> {
        const videoId = this.extractVideoId(url)
        if (!videoId) {
            return null
        }

        return this.getVideoInfo(videoId)
    }

    /**
     * Get multiple videos information by URLs
     */
    public async getMultipleVideosInfo(
        urls: string[]
    ): Promise<(VideoInfo | null)[]> {
        console.log(
            '[YouTube API] Fetching info for multiple videos:',
            urls.length
        )

        try {
            // Extract video IDs
            const videoIds = urls
                .map((url) => this.extractVideoId(url))
                .filter((id) => id !== null) as string[]

            if (videoIds.length === 0) {
                console.error('[YouTube API] No valid video IDs found')
                return urls.map(() => null)
            }

            // Batch request for multiple videos (YouTube API supports up to 50 IDs per request)
            const response = await axios.get<YouTubeApiResponse>(
                `${this.baseUrl}/videos`,
                {
                    params: {
                        key: this.apiKey,
                        id: videoIds.join(','),
                        part: 'snippet,statistics,contentDetails',
                        fields: 'items(id,snippet(title,description,thumbnails,channelTitle,publishedAt),statistics(viewCount,likeCount,commentCount),contentDetails(duration))',
                    },
                }
            )

            // Create a map of video ID to video info
            const videoMap = new Map<string, VideoInfo>()

            if (response.data.items) {
                response.data.items.forEach((video) => {
                    const snippet = video.snippet
                    const statistics = video.statistics
                    const contentDetails = video.contentDetails

                    const thumbnail =
                        snippet.thumbnails.maxres?.url ||
                        snippet.thumbnails.standard?.url ||
                        snippet.thumbnails.high?.url ||
                        snippet.thumbnails.medium?.url ||
                        snippet.thumbnails.default?.url ||
                        '/placeholder.svg?height=200&width=350'

                    const videoInfo: VideoInfo = {
                        id: video.id,
                        title: snippet.title,
                        description: snippet.description,
                        thumbnail: thumbnail,
                        duration: this.formatDuration(contentDetails.duration),
                        channelTitle: snippet.channelTitle,
                        publishedAt: snippet.publishedAt,
                        viewCount: this.formatCount(statistics.viewCount),
                        likeCount: this.formatCount(statistics.likeCount),
                        commentCount: this.formatCount(statistics.commentCount),
                        youtubeUrl: `https://www.youtube.com/watch?v=${video.id}`,
                    }

                    videoMap.set(video.id, videoInfo)
                })
            }

            // Return results in the same order as input URLs
            const results = urls.map((url) => {
                const videoId = this.extractVideoId(url)
                return videoId ? videoMap.get(videoId) || null : null
            })

            console.log(
                '[YouTube API] Successfully fetched',
                results.filter((r) => r !== null).length,
                'out of',
                urls.length,
                'videos'
            )
            return results
        } catch (error) {
            console.error(
                '[YouTube API] Error fetching multiple videos info:',
                error
            )

            if (axios.isAxiosError(error)) {
                if (error.response?.status === 403) {
                    console.error(
                        '[YouTube API] API key invalid or quota exceeded'
                    )
                } else if (error.response?.status === 400) {
                    console.error('[YouTube API] Bad request - check video IDs')
                }
            }

            return urls.map(() => null)
        }
    }

    /**
     * Test API key and connection
     */
    public async testConnection(): Promise<boolean> {
        try {
            console.log('[YouTube API] Testing connection...')

            // Test with a known public video
            const testVideoId = 'dQw4w9WgXcQ' // Rick Roll - always available for testing
            const response = await axios.get(`${this.baseUrl}/videos`, {
                params: {
                    key: this.apiKey,
                    id: testVideoId,
                    part: 'snippet',
                    fields: 'items(id,snippet(title))',
                },
            })

            const isWorking =
                response.data.items && response.data.items.length > 0
            console.log(
                '[YouTube API] Connection test result:',
                isWorking ? 'SUCCESS' : 'FAILED'
            )

            return isWorking
        } catch (error) {
            console.error('[YouTube API] Connection test failed:', error)
            return false
        }
    }
}

export default YouTubeApiService
