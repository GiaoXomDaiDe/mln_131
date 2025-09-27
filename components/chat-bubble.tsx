'use client'

import { MessageCircle, Send, X } from 'lucide-react'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'

// Các component UI của bạn
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLanguage } from '@/contexts/language-context'

import { FormattedMessage } from '@/components/ui/formatted-message'
import { TypingIndicator } from '@/components/ui/typing-indicator'

interface Message {
    id: number
    text: string
    isUser: boolean
    timestamp: Date
}

export function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useLanguage()
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const [isBotReplying, setIsBotReplying] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const currentBotMessageId = useRef<number | null>(null)

    // Khởi tạo tin nhắn chào mừng khi mở chat
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessageText =
                '🎓 Xin chào! Tôi là AI Gia Sư chuyên về Tư tưởng Hồ Chí Minh.\n\n📚 Tôi có thể giúp bạn:\n• Tìm hiểu về tư tưởng độc lập dân tộc\n• Học về đại đoàn kết toàn dân tộc\n• Hiểu về chủ nghĩa xã hội\n• Khám phá giá trị văn hóa, đạo đức\n\n🤔 Bạn muốn thảo luận về chủ đề nào trong Tư tưởng Hồ Chí Minh?'
            setMessages([
                {
                    id: 1,
                    text: welcomeMessageText,
                    isUser: false,
                    timestamp: new Date(),
                },
            ])
        }
    }, [isOpen])

    // Tự động cuộn xuống tin nhắn cuối cùng
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isBotReplying])

    const handleSendMessage = async () => {
        const trimmedInput = inputValue.trim()
        if (!trimmedInput || isBotReplying) return

        const userMessage: Message = {
            id: Date.now(),
            text: trimmedInput,
            isUser: true,
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, userMessage])
        setInputValue('')
        setIsBotReplying(true)

        try {
            // Gọi API route để xử lý chat
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: trimmedInput,
                    userId: 'anonymous',
                    progress: {
                        completedLessons:
                            messages.length > 0
                                ? ['Tư tưởng Hồ Chí Minh cơ bản']
                                : [],
                        weakAreas:
                            messages.length < 3 ? ['Đại đoàn kết dân tộc'] : [],
                        strongAreas:
                            messages.length > 5
                                ? ['Độc lập dân tộc', 'Chủ nghĩa xã hội']
                                : ['Độc lập dân tộc'],
                        studyTime: Math.floor(messages.length * 2.5),
                        currentStreak: Math.floor(messages.length / 4),
                        lastActivity: new Date().toISOString(),
                        knowledgeAreas: {
                            'tu-tuong-hcm': Math.min(
                                85 + messages.length * 2,
                                100
                            ),
                            'doc-lap-dan-toc': Math.min(
                                78 + messages.length * 1.5,
                                100
                            ),
                            'dai-doan-ket': Math.min(
                                82 + messages.length * 1.8,
                                100
                            ),
                        },
                    },
                }),
            })

            if (!response.ok) {
                throw new Error(`Lỗi API: ${response.status}`)
            }

            const data = await response.json()
            const botResponseText = data.response

            console.log('AI Response:', botResponseText)

            const botMessagePlaceholder: Message = {
                id: Date.now() + 1,
                text: '',
                isUser: false,
                timestamp: new Date(),
            }
            currentBotMessageId.current = botMessagePlaceholder.id
            setMessages((prev) => [...prev, botMessagePlaceholder])
            setIsBotReplying(false)

            let index = 0
            const intervalId = setInterval(() => {
                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg.id === currentBotMessageId.current
                            ? {
                                  ...msg,
                                  text: botResponseText.substring(0, index + 1),
                              }
                            : msg
                    )
                )
                index++
                if (index >= botResponseText.length) {
                    clearInterval(intervalId)
                    currentBotMessageId.current = null
                }
            }, 2)
        } catch (error: any) {
            // Log lỗi ra console để debug dễ hơn
            console.error('API Error:', error)
            const errorMessage: Message = {
                id: Date.now() + 2,
                text:
                    error.message ||
                    'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.',
                isUser: false,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
            setIsBotReplying(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isBotReplying && inputValue.trim()) {
            handleSendMessage()
        }
    }

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-16 w-16 rounded-2xl shadow-lg hover:shadow-xl z-50 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 border-2 border-white dark:border-slate-300 transform hover:scale-105 transition-all duration-200"
                size="icon"
            >
                <MessageCircle className="h-7 w-7 text-white" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse" />
            </Button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <Card className="w-full max-w-4xl h-[80vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-2xl overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-xl bg-slate-800 dark:bg-slate-600 flex items-center justify-center shadow-sm border-2 border-slate-200 dark:border-slate-400">
                                    <MessageCircle className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                                        AI Gia Sư Tư Tưởng HCM
                                    </CardTitle>
                                    <p className="text-sm text-gray-700 dark:text-gray-200">
                                        Chuyên gia về Tư tưởng Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col p-0 overflow-y-hidden">
                            <ScrollArea className="flex-1 p-4">
                                <div className="space-y-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${
                                                message.isUser
                                                    ? 'justify-end'
                                                    : 'justify-start'
                                            }`}
                                        >
                                            <div
                                                className={`max-w-[85%] rounded-2xl p-4 text-sm whitespace-pre-wrap break-words shadow-sm ${
                                                    message.isUser
                                                        ? 'bg-slate-800 text-white ml-auto'
                                                        : 'bg-white dark:bg-slate-700 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600'
                                                }`}
                                            >
                                                {message.isUser ? (
                                                    message.text
                                                ) : (
                                                    <FormattedMessage
                                                        text={message.text}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {isBotReplying && (
                                        <div className="flex justify-start">
                                            <TypingIndicator />
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>
                            <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex gap-3">
                                <Input
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    onKeyPress={handleKeyPress}
                                    placeholder="Hỏi về Tư tưởng Hồ Chí Minh, độc lập dân tộc, đại đoàn kết..."
                                    className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                    disabled={isBotReplying}
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    className="h-12 w-12 rounded-xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-600 dark:hover:bg-slate-500 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
                                    size="icon"
                                    disabled={
                                        isBotReplying || !inputValue.trim()
                                    }
                                >
                                    <Send className="h-5 w-5 text-white" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    )
}
