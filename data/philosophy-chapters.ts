export const philosophyBlogs = {
    '4.1': {
        title: {
            vietnamese: 'Dân chủ và dân chủ xã hội chủ nghĩa',
            english: 'Democracy and Democratic Socialism',
        },
        sections: ['4.1.1', '4.1.2', '4.1.3', '4.1.4', '4.1.5'],
    },
} as const

export const philosophySections = {
    '4.1.1': {
        title: {
            vietnamese: 'Khái niệm về chủ nghĩa xã hội và quá độ',
            english: 'Concept of Socialism and Transition',
        },
        blog: '4.1',
    },
    '4.1.2': {
        title: {
            vietnamese: 'Đặc điểm thời kỳ quá độ / VN khác như thế nào?',
            english:
                'Characteristics of the Transitional Period / How is Vietnam Different?',
        },
        blog: '4.1',
    },
    '4.1.3': {
        title: {
            vietnamese: 'Các giai đoạn quá độ ở Việt Nam/Thế giới',
            english: 'Transitional Stages in Vietnam/World',
        },
        blog: '4.1',
    },
    '4.1.4': {
        title: {
            vietnamese:
                'Thành tựu và thách thức của VN kể từ thời kỳ quá độ XHCN',
            english:
                'Achievements and Challenges of Vietnam since the Transitional Period to Socialism',
        },
        blog: '4.1',
    },
    '4.1.5': {
        title: {
            vietnamese:
                'Liên hệ thực tiễn tại VN: Giảm nghèo đa chiều, Chuyển đổi số dịch vụ công, Năng lượng tái tạo & tăng trưởng xanh',
            english:
                'Practical Application in Vietnam: Multidimensional Poverty Reduction, Digital Transformation of Public Services, Renewable Energy & Green Growth',
        },
        blog: '4.1',
    },
} as const

export type BlogId = keyof typeof philosophyBlogs
export type ChapterId = keyof typeof philosophyBlogs
export type SectionId = keyof typeof philosophySections
