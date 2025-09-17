'use client'

import { ChatBubble } from '@/components/chat-bubble'
import { ClientOnly } from '@/components/client-only'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
    title: 'Triết Talk - Khám phá thế giới triết học',
    description:
        'Blog triết học với nội dung đa ngôn ngữ, quiz tương tác và AI assistant',
    generator: 'v0.dev',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <LanguageProvider>
                        {/* Topographic Background Images - Responsive to theme */}
                        <div className="fixed inset-0 -z-50 overflow-hidden">
                            {/* Light mode background */}
                            <div
                                className="w-full h-full opacity-60 dark:opacity-0 transition-opacity duration-500"
                                style={{
                                    backgroundImage:
                                        'url(/topography-background-light.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundAttachment: 'fixed',
                                    filter: 'contrast(1.3) brightness(1.1)',
                                }}
                            />
                            {/* Dark mode background */}
                            <div
                                className="absolute inset-0 w-full h-full opacity-0 dark:opacity-60 transition-opacity duration-500"
                                style={{
                                    backgroundImage:
                                        'url(/topography-background.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundAttachment: 'fixed',
                                    filter: 'contrast(1.5) brightness(0.9)',
                                }}
                            />
                            {/* Glass Overlay with Custom Colors */}
                            <div
                                className="absolute inset-0 backdrop-blur-[0.5px] transition-opacity duration-500"
                                style={{
                                    backgroundColor:
                                        'rgba(225, 222, 217, 0.15)',
                                }}
                            ></div>
                            <div
                                className="absolute inset-0 opacity-0 dark:opacity-100 backdrop-blur-[0.5px] transition-opacity duration-500"
                                style={{
                                    backgroundColor: 'rgba(18, 19, 22, 0.65)', // Darker color with higher opacity for dark mode
                                }}
                            ></div>
                            {/* Enhanced gradient overlay for better readability - More transparent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent"></div>
                        </div>

                        <Navigation />
                        <main className="min-h-screen pt-16 relative z-10">
                            {children}
                        </main>
                        <Footer />
                        <ClientOnly>
                            <ChatBubble />
                        </ClientOnly>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
