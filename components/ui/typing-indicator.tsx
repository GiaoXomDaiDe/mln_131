export function TypingIndicator() {
    return (
        <div className="flex items-center justify-center p-2">
            {/* 👇 [SỬA ĐỔI] Gradient đơn giản hóa để tránh xung đột CSS */}
            <p className="animate-text-gradient bg-gradient-to-r from-purple-500 via-blue-500 to-red-500 bg-[300%_auto] bg-clip-text text-transparent">
                Học Viện Bác Hồ đang suy nghĩ...
            </p>
        </div>
    )
}
