'use client'

import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/language-context'
import {
    Copy,
    Facebook,
    Mail,
    MessageCircle,
    Share2,
    Twitter,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface ShareDialogProps {
    video: {
        id: number
        title: string
        url: string
    }
}

export function ShareDialog({ video }: ShareDialogProps) {
    const { t } = useLanguage()
    const [copied, setCopied] = useState(false)

    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/videos/${video.id}`

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            toast.success('Đã sao chép liên kết!')
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            toast.error('Không thể sao chép liên kết')
        }
    }

    const shareOptions = [
        {
            name: 'Facebook',
            icon: Facebook,
            color: 'bg-blue-600 hover:bg-blue-700',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: 'Twitter',
            icon: Twitter,
            color: 'bg-sky-500 hover:bg-sky-600',
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(video.title)}`,
        },
        {
            name: 'Zalo',
            icon: MessageCircle,
            color: 'bg-blue-500 hover:bg-blue-600',
            url: `https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: 'Email',
            icon: Mail,
            color: 'bg-gray-600 hover:bg-gray-700',
            url: `mailto:?subject=${encodeURIComponent(video.title)}&body=${encodeURIComponent(`Xem video này: ${shareUrl}`)}`,
        },
    ]

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-green-50 dark:hover:bg-green-950 hover:text-green-600 dark:hover:text-green-400"
                >
                    <Share2 className="h-4 w-4" />
                    {t('videoPlayer.share')}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Chia sẻ video</DialogTitle>
                    <DialogDescription>
                        Chọn cách bạn muốn chia sẻ video này
                    </DialogDescription>
                </DialogHeader>

                {/* Copy Link */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <label
                                htmlFor="link"
                                className="text-sm font-medium"
                            >
                                Liên kết
                            </label>
                            <Input id="link" defaultValue={shareUrl} readOnly />
                        </div>
                        <Button
                            type="submit"
                            size="sm"
                            className="px-3"
                            onClick={handleCopyLink}
                        >
                            <span className="sr-only">Copy</span>
                            {copied ? (
                                <span className="text-green-600">✓</span>
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        {shareOptions.map((option) => (
                            <Button
                                key={option.name}
                                variant="outline"
                                className={`flex items-center gap-2 text-white ${option.color} border-none`}
                                onClick={() => {
                                    window.open(
                                        option.url,
                                        '_blank',
                                        'width=600,height=400'
                                    )
                                }}
                            >
                                <option.icon className="h-4 w-4" />
                                {option.name}
                            </Button>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
