'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useLanguage } from '@/contexts/language-context'
import { quizData } from '@/data/quiz-data'
import {
    ArrowRight,
    BookOpen,
    Brain,
    CheckCircle,
    Lightbulb,
    MessageCircle,
    RefreshCw,
    Sparkles,
    Star,
    Target,
    Trophy,
    Wand2,
    XCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface QuizQuestion {
    question: string
    options: string[]
    correct: number
    explanation: string
}

interface QuizProgress {
    currentQuestion: number
    totalQuestions: number
    correctAnswers: number
    answers: (number | null)[]
    showExplanation: boolean
    selectedAnswer: number | null
    quizCompleted: boolean
}

interface MascotState {
    mood:
        | 'excited'
        | 'encouraging'
        | 'celebrating'
        | 'thinking'
        | 'cheering'
        | 'generating'
    message: string
}

interface QuizMode {
    type: 'preset' | 'generated'
    isGenerating: boolean
    generatedQuiz: QuizQuestion[] | null
}

export default function QuizPage() {
    const { t, currentLanguage } = useLanguage()

    // Lấy quiz data về Đại đoàn kết dân tộc (quiz ID 6)
    const hoChiMinhUnityQuiz = quizData[6] || { vietnamese: [], english: [] }
    const sampleQuiz: QuizQuestion[] =
        currentLanguage === 'vietnamese'
            ? hoChiMinhUnityQuiz.vietnamese
            : hoChiMinhUnityQuiz.english

    const [quizMode, setQuizMode] = useState<QuizMode>({
        type: 'preset',
        isGenerating: false,
        generatedQuiz: null,
    })

    // Chọn quiz dựa trên mode
    const currentQuiz =
        quizMode.type === 'generated' && quizMode.generatedQuiz
            ? quizMode.generatedQuiz
            : sampleQuiz

    const [progress, setProgress] = useState<QuizProgress>({
        currentQuestion: 0,
        totalQuestions: currentQuiz.length,
        correctAnswers: 0,
        answers: new Array(currentQuiz.length).fill(null),
        showExplanation: false,
        selectedAnswer: null,
        quizCompleted: false,
    })

    const [mascot, setMascot] = useState<MascotState>({
        mood: 'excited',
        message:
            currentLanguage === 'vietnamese'
                ? 'Chào bạn! Tôi là AI Mentor chuyên về Tư tưởng Hồ Chí Minh. Hãy cùng khám phá kiến thức về đại đoàn kết toàn dân tộc nhé! 🚀'
                : "Hello! I'm your AI Mentor specializing in Ho Chi Minh Thought. Let's explore knowledge about national great unity! 🚀",
    })

    const currentQuestion = currentQuiz[progress.currentQuestion]

    // Function tạo quiz tự động bằng AI
    const generateAIQuiz = async () => {
        setQuizMode((prev) => ({ ...prev, isGenerating: true }))
        setMascot({
            mood: 'generating',
            message:
                currentLanguage === 'vietnamese'
                    ? '🤖 Đang tạo bộ câu hỏi mới về tư tưởng Hồ Chí Minh cho bạn...'
                    : '🤖 Generating new questions about Ho Chi Minh Thought for you...',
        })

        try {
            const response = await fetch('/api/generate-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    language: currentLanguage,
                }),
            })

            const result = await response.json()

            if (!result.success) {
                throw new Error(result.error || 'Failed to generate quiz')
            }

            const generatedQuestions: QuizQuestion[] = result.data

            // Set generated quiz
            setQuizMode({
                type: 'generated',
                isGenerating: false,
                generatedQuiz: generatedQuestions,
            })

            // Reset progress
            setProgress({
                currentQuestion: 0,
                totalQuestions: generatedQuestions.length,
                correctAnswers: 0,
                answers: new Array(generatedQuestions.length).fill(null),
                showExplanation: false,
                selectedAnswer: null,
                quizCompleted: false,
            })

            setMascot({
                mood: 'excited',
                message:
                    currentLanguage === 'vietnamese'
                        ? '✨ Đã tạo xong bộ câu hỏi mới! Hãy thử thách bản thân với những câu hỏi AI tạo ra nhé!'
                        : '✨ New quiz generated! Challenge yourself with AI-created questions!',
            })
        } catch (error) {
            console.error('Error generating quiz:', error)
            setQuizMode((prev) => ({ ...prev, isGenerating: false }))
            setMascot({
                mood: 'encouraging',
                message:
                    currentLanguage === 'vietnamese'
                        ? '😅 Xin lỗi, có lỗi khi tạo quiz mới. Hãy thử lại hoặc sử dụng bộ câu hỏi có sẵn nhé!'
                        : '😅 Sorry, error generating new quiz. Please try again or use the preset questions!',
            })
        }
    }

    // Function chuyển về quiz mặc định
    const usePresetQuiz = () => {
        setQuizMode({
            type: 'preset',
            isGenerating: false,
            generatedQuiz: null,
        })

        setProgress({
            currentQuestion: 0,
            totalQuestions: sampleQuiz.length,
            correctAnswers: 0,
            answers: new Array(sampleQuiz.length).fill(null),
            showExplanation: false,
            selectedAnswer: null,
            quizCompleted: false,
        })

        setMascot({
            mood: 'excited',
            message:
                currentLanguage === 'vietnamese'
                    ? '📚 Đã chuyển về bộ câu hỏi chuẩn về Đại đoàn kết toàn dân tộc!'
                    : '📚 Switched to standard National Great Unity questions!',
        })
    }

    const handleAnswerSelect = (answerIndex: number) => {
        if (progress.showExplanation) return

        setProgress((prev) => ({
            ...prev,
            selectedAnswer: answerIndex,
            showExplanation: true,
        }))

        const isCorrect = answerIndex === currentQuestion.correct

        // Update mascot based on answer
        if (isCorrect) {
            setMascot({
                mood: 'celebrating',
                message:
                    currentLanguage === 'vietnamese'
                        ? '🎉 Tuyệt vời! Bạn đã trả lời đúng! Hãy đọc giải thích để hiểu sâu hơn nhé!'
                        : '🎉 Excellent! You got it right! Read the explanation to understand more!',
            })
        } else {
            setMascot({
                mood: 'encouraging',
                message:
                    currentLanguage === 'vietnamese'
                        ? '💪 Đừng lo! Học từ sai lầm là cách tốt nhất để tiến bộ. Hãy xem giải thích nhé!'
                        : "💪 Don't worry! Learning from mistakes is the best way to improve. Check the explanation!",
            })
        }

        // Update answers array
        const newAnswers = [...progress.answers]
        newAnswers[progress.currentQuestion] = answerIndex

        setProgress((prev) => ({
            ...prev,
            answers: newAnswers,
            correctAnswers: isCorrect
                ? prev.correctAnswers +
                  (prev.answers[prev.currentQuestion] === null ? 1 : 0)
                : prev.correctAnswers -
                  (prev.answers[prev.currentQuestion] ===
                  currentQuestion.correct
                      ? 1
                      : 0),
        }))
    }

    const handleNextQuestion = () => {
        if (progress.currentQuestion < progress.totalQuestions - 1) {
            setProgress((prev) => ({
                ...prev,
                currentQuestion: prev.currentQuestion + 1,
                showExplanation: false,
                selectedAnswer: prev.answers[prev.currentQuestion + 1],
            }))

            setMascot({
                mood: 'thinking',
                message:
                    currentLanguage === 'vietnamese'
                        ? '🤔 Câu tiếp theo đây! Hãy suy nghĩ kỹ trước khi chọn đáp án nhé!'
                        : '🤔 Next question! Think carefully before choosing your answer!',
            })
        } else {
            // Quiz completed
            setProgress((prev) => ({
                ...prev,
                quizCompleted: true,
            }))

            const score =
                (progress.correctAnswers / progress.totalQuestions) * 100
            let completionMessage = ''

            if (score >= 90) {
                completionMessage =
                    currentLanguage === 'vietnamese'
                        ? '🏆 Xuất sắc! Bạn có hiểu biết rất tốt về chủ nghĩa xã hội khoa học!'
                        : '🏆 Outstanding! You have excellent knowledge of scientific socialism!'
            } else if (score >= 70) {
                completionMessage =
                    currentLanguage === 'vietnamese'
                        ? '⭐ Tốt lắm! Bạn đã nắm vững khá nhiều kiến thức!'
                        : '⭐ Great job! You have a solid grasp of the knowledge!'
            } else {
                completionMessage =
                    currentLanguage === 'vietnamese'
                        ? '📚 Bạn cần ôn tập thêm. Hãy đọc lại tài liệu và thử lại nhé!'
                        : '📚 You need more practice. Review the materials and try again!'
            }

            setMascot({
                mood: 'celebrating',
                message: completionMessage,
            })
        }
    }

    const restartQuiz = () => {
        setProgress({
            currentQuestion: 0,
            totalQuestions: sampleQuiz.length,
            correctAnswers: 0,
            answers: new Array(sampleQuiz.length).fill(null),
            showExplanation: false,
            selectedAnswer: null,
            quizCompleted: false,
        })

        setMascot({
            mood: 'excited',
            message:
                currentLanguage === 'vietnamese'
                    ? 'Chào bạn! Tôi là AI Mentor chuyên về Tư tưởng Hồ Chí Minh. Hãy cùng khám phá kiến thức về đại đoàn kết toàn dân tộc nhé! 🚀'
                    : "Hello! I'm your AI Mentor specializing in Ho Chi Minh Thought. Let's explore knowledge about national great unity! 🚀",
        })
    }

    if (progress.quizCompleted) {
        const score = (progress.correctAnswers / progress.totalQuestions) * 100

        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden p-4">
                {/* Academic Background Pattern */}
                <div className="fixed inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#a78b5a_0.5px,transparent_0)] bg-[size:64px_64px] opacity-60"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0.5px_0.5px,#947856_0.5px,transparent_0)] bg-[size:16px_16px] opacity-30"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_0.5px,transparent_0.5px),linear-gradient(to_bottom,#8b7355_0.5px,transparent_0.5px)] bg-[size:128px_128px] opacity-20"></div>
                </div>

                {/* Content Overlay */}
                <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                    <div className="max-w-4xl mx-auto py-8">
                        {/* Results Card */}
                        <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10"></div>

                            <CardHeader className="relative text-center pb-4">
                                <div className="flex justify-center mb-4">
                                    {score >= 90 ? (
                                        <Trophy className="h-16 w-16 text-yellow-500" />
                                    ) : score >= 70 ? (
                                        <Star className="h-16 w-16 text-blue-500" />
                                    ) : (
                                        <Target className="h-16 w-16 text-purple-500" />
                                    )}
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    {currentLanguage === 'vietnamese'
                                        ? 'Kết Quả Quiz'
                                        : 'Quiz Results'}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400">
                                    {currentLanguage === 'vietnamese'
                                        ? `Bạn đã trả lời đúng ${progress.correctAnswers}/${progress.totalQuestions} câu`
                                        : `You answered ${progress.correctAnswers}/${progress.totalQuestions} questions correctly`}
                                </p>
                            </CardHeader>

                            <CardContent className="relative space-y-6">
                                {/* Score Display */}
                                <div className="text-center">
                                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                                        {Math.round(score)}%
                                    </div>
                                    <Badge
                                        variant={
                                            score >= 70
                                                ? 'default'
                                                : 'secondary'
                                        }
                                        className="text-lg px-4 py-2"
                                    >
                                        {score >= 90
                                            ? currentLanguage === 'vietnamese'
                                                ? 'Xuất sắc'
                                                : 'Excellent'
                                            : score >= 70
                                              ? currentLanguage === 'vietnamese'
                                                  ? 'Tốt'
                                                  : 'Good'
                                              : currentLanguage === 'vietnamese'
                                                ? 'Cần cải thiện'
                                                : 'Needs Improvement'}
                                    </Badge>
                                </div>

                                {/* Mascot Message */}
                                <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-emerald-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Brain className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {mascot.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={restartQuiz}
                                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3"
                                    >
                                        <RefreshCw className="h-4 w-4 mr-2" />
                                        {currentLanguage === 'vietnamese'
                                            ? 'Làm lại Quiz'
                                            : 'Retry Quiz'}
                                    </Button>

                                    <Button variant="outline" asChild>
                                        <Link href="/quiz">
                                            <BookOpen className="h-4 w-4 mr-2" />
                                            {currentLanguage === 'vietnamese'
                                                ? 'Chọn Quiz khác'
                                                : 'Choose Another Quiz'}
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100 dark:from-amber-950/20 dark:via-stone-950 dark:to-slate-950 relative overflow-hidden p-4">
            {/* Academic Background Pattern */}
            <div className="fixed inset-0 opacity-40 dark:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#8b7355_1px,transparent_0)] bg-[size:32px_32px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#a78b5a_0.5px,transparent_0)] bg-[size:64px_64px] opacity-60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0.5px_0.5px,#947856_0.5px,transparent_0)] bg-[size:16px_16px] opacity-30"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b7355_0.5px,transparent_0.5px),linear-gradient(to_bottom,#8b7355_0.5px,transparent_0.5px)] bg-[size:128px_128px] opacity-20"></div>
            </div>

            {/* Content Overlay */}
            <div className="min-h-screen w-full bg-white/15 dark:bg-stone-900/25 backdrop-blur-[0.5px] relative">
                <div className="max-w-4xl mx-auto py-8">
                    {/* Progress Header */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                {currentLanguage === 'vietnamese'
                                    ? 'Quiz Tư tưởng Hồ Chí Minh'
                                    : 'Ho Chi Minh Thought Quiz'}
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {currentLanguage === 'vietnamese'
                                    ? 'Đại đoàn kết toàn dân tộc'
                                    : 'National Great Unity'}
                            </p>
                            <Badge
                                variant="outline"
                                className="text-lg px-3 py-1"
                            >
                                {progress.currentQuestion + 1}/
                                {progress.totalQuestions}
                            </Badge>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                <span>
                                    {currentLanguage === 'vietnamese'
                                        ? 'Tiến độ'
                                        : 'Progress'}
                                </span>
                                <span>
                                    {Math.round(
                                        ((progress.currentQuestion + 1) /
                                            progress.totalQuestions) *
                                            100
                                    )}
                                    %
                                </span>
                            </div>
                            <Progress
                                value={
                                    ((progress.currentQuestion + 1) /
                                        progress.totalQuestions) *
                                    100
                                }
                                className="h-2"
                            />
                        </div>
                    </div>

                    {/* Quiz Mode Selection */}
                    <div className="mb-6 flex flex-wrap gap-3 justify-center">
                        <Button
                            onClick={usePresetQuiz}
                            variant={
                                quizMode.type === 'preset'
                                    ? 'default'
                                    : 'outline'
                            }
                            className="flex items-center gap-2"
                            disabled={quizMode.isGenerating}
                        >
                            <Brain className="h-4 w-4" />
                            {currentLanguage === 'vietnamese'
                                ? 'Quiz Chuẩn'
                                : 'Standard Quiz'}
                        </Button>

                        <Button
                            onClick={generateAIQuiz}
                            variant={
                                quizMode.type === 'generated'
                                    ? 'default'
                                    : 'outline'
                            }
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                            disabled={quizMode.isGenerating}
                        >
                            {quizMode.isGenerating ? (
                                <Sparkles className="h-4 w-4 animate-spin" />
                            ) : (
                                <Wand2 className="h-4 w-4" />
                            )}
                            {currentLanguage === 'vietnamese'
                                ? 'Tạo Quiz AI'
                                : 'Generate AI Quiz'}
                        </Button>
                    </div>

                    {/* Mascot */}
                    <Card className="mb-6 bg-gradient-to-r from-purple-100 via-blue-100 to-emerald-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-emerald-900/20 border-purple-200 dark:border-purple-700">
                        <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                                    <Brain className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="font-semibold text-purple-700 dark:text-purple-300">
                                            AI Mentor
                                        </span>
                                        <MessageCircle className="h-4 w-4 text-purple-500" />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {mascot.message}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Question Card */}
                    <Card className="mb-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                        <CardHeader>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">
                                        {progress.currentQuestion + 1}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">
                                    {currentQuestion.question}
                                </h2>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            {currentQuestion.options.map((option, index) => {
                                const isSelected =
                                    progress.selectedAnswer === index
                                const isCorrect =
                                    index === currentQuestion.correct
                                const showResult = progress.showExplanation

                                let buttonClass =
                                    'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 '

                                if (showResult) {
                                    if (isCorrect) {
                                        buttonClass +=
                                            'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                                    } else if (isSelected && !isCorrect) {
                                        buttonClass +=
                                            'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                                    } else {
                                        buttonClass +=
                                            'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
                                    }
                                } else {
                                    if (isSelected) {
                                        buttonClass +=
                                            'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                                    } else {
                                        buttonClass +=
                                            'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/10 text-gray-700 dark:text-gray-300'
                                    }
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            handleAnswerSelect(index)
                                        }
                                        disabled={progress.showExplanation}
                                        className={buttonClass}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="flex-1 pr-4">
                                                {option}
                                            </span>
                                            {showResult && (
                                                <div className="flex-shrink-0">
                                                    {isCorrect ? (
                                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                                    ) : isSelected ? (
                                                        <XCircle className="h-5 w-5 text-red-500" />
                                                    ) : null}
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                )
                            })}
                        </CardContent>
                    </Card>

                    {/* Explanation Card */}
                    {progress.showExplanation && (
                        <Card className="mb-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Lightbulb className="h-5 w-5 text-blue-500" />
                                    <h3 className="font-semibold text-blue-700 dark:text-blue-300">
                                        {currentLanguage === 'vietnamese'
                                            ? 'Giải thích'
                                            : 'Explanation'}
                                    </h3>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {currentQuestion.explanation}
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Navigation */}
                    {progress.showExplanation && (
                        <div className="flex justify-center">
                            <Button
                                onClick={handleNextQuestion}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
                            >
                                {progress.currentQuestion <
                                progress.totalQuestions - 1 ? (
                                    <>
                                        {currentLanguage === 'vietnamese'
                                            ? 'Câu tiếp theo'
                                            : 'Next Question'}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                ) : (
                                    <>
                                        {currentLanguage === 'vietnamese'
                                            ? 'Xem kết quả'
                                            : 'View Results'}
                                        <Trophy className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
