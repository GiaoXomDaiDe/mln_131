"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { philosophyBlogs } from "@/data/philosophy-chapters";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function QuizOverviewPage() {
  const { t, getLocalizedContent, currentLanguage } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mt-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t("quiz.quiz")}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          {t("quiz.selectBlogPrompt")} {/* Thêm dòng này vào translations.ts */}
        </p>

        <div className="flex justify-center">
          {/* Blog 2 Quiz Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-300 w-full max-w-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                {currentLanguage === "vietnamese"
                  ? "Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội"
                  : "Socialism and the Transition Period to Socialism"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("home.blog2Description")}
              </p>
              <div className="flex items-center justify-between">
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-purple-500 group-hover:text-white transition-colors"
                >
                  <Link href="/quiz/2">
                    {" "}
                    {/* Trỏ đến ID chương tổng quát */}
                    {t("home.explore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* Số câu hỏi sẽ được tính toán trong component QuizBlogPage */}
                <span className="text-sm text-muted-foreground">
                  {/* Bạn có thể hiển thị số lượng quiz câu hỏi ở đây nếu muốn,
                                        nhưng nó sẽ cần logic để tổng hợp từ blogData */}
                  {t("home.articles")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
