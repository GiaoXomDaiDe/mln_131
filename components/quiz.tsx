"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
// Remove BlogData and BlogId imports as they are no longer directly used here
// import type { BlogData, BlogId } from "@/data/blog-data"

// Define the type for a single quiz question
export type QuizQuestion = {
  question: string
  options: string[]
  correct: number
}

interface QuizProps {
  // Change blog prop to questions prop
  questions: QuizQuestion[]
}

export function Quiz({ questions }: QuizProps) { // Update prop destructuring
  const { currentLanguage, t } = useLanguage() // Add t for general translations
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  // The questions array is now directly passed as a prop
  // const questions = blog.quiz[currentLanguage] // Remove this line

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const handleSubmitAnswer = () => {
    const answerIndex = Number.parseInt(selectedAnswer)
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  // Use t function from language context for localization
  const getLocalizedText = (path: string) => {
    return t(`quiz.${path}`) // Assuming "quiz" is the top-level key for quiz-related translations
  }

  if (showResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {score >= questions.length / 2 ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500" />
            )}
            {getLocalizedText("quizResult")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">
              {score}/{questions.length}
            </div>
            <p className="text-muted-foreground">{getLocalizedText("score").replace('{score}', score.toString()).replace('{total}', questions.length.toString())}</p>
          </div>

          <div className="space-y-4 mb-6">
            {questions.map((question, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">{question.question}</h4>
                <div className="flex items-center gap-2">
                  {answers[index] === question.correct ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm">
                    {getLocalizedText("correctAnswer")} {question.options[question.correct]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={resetQuiz} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" />
            {getLocalizedText("retakeQuiz")}
          </Button>
        </CardContent>
      </Card>
    )
  }

  const currentQuizQuestion = questions[currentQuestion]; // Get the current question

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {getLocalizedText("quiz")} - {getLocalizedText("question")} {currentQuestion + 1}/{questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{currentQuizQuestion.question}</h3>

          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
            {currentQuizQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="w-full">
          {currentQuestion < questions.length - 1 ? getLocalizedText("nextQuestion") : getLocalizedText("complete")}
        </Button>
      </CardContent>
    </Card>
  )
}