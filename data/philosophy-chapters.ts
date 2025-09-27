export const philosophyBlogs = {
    '5.1': {
        title: {
            vietnamese:
                'Tư tưởng Hồ Chí Minh về Đại đoàn kết toàn dân tộc và đoàn kết quốc tế',
            english:
                'Ho Chi Minh’s Thought on National Unity and International Solidarity',
        },
        sections: ['5.1.1', '5.1.2', '5.1.3', '5.1.4', '5.1.5'],
    },
    '5.2': {
        title: {
            vietnamese:
                'Đại đoàn kết dân tộc – chiến lược lâu dài hay chỉ là sách lược nhất thời?',
            english:
                'National Great Unity – Long-term Strategy or Temporary Tactic?',
        },
        sections: ['5.2.1', '5.2.2', '5.2.3', '5.2.4', '5.2.5', '5.2.6'],
    },
} as const

export const philosophySections = {
    '5.1.1': {
        title: {
            vietnamese: 'Vai trò của đại đoàn kết toàn dân tộc',
            english: 'The Role of National Unity',
        },
        blog: '5.1',
    },
    '5.1.2': {
        title: {
            vietnamese: 'Lực lượng của khối đại đoàn kết toàn dân tộc',
            english: 'Forces of the National Unity Bloc',
        },
        blog: '5.1',
    },
    '5.1.3': {
        title: {
            vietnamese: 'Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc',
            english: 'Conditions for Building the National Unity Bloc',
        },
        blog: '5.1',
    },
    '5.1.4': {
        title: {
            vietnamese:
                'Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc – Mặt trận dân tộc thống nhất',
            english:
                'Forms and Principles of Organization of the National Unity Bloc – The United National Front',
        },
        blog: '5.1',
    },
    '5.1.5': {
        title: {
            vietnamese: 'Phương thức xây dựng khối đại đoàn kết dân tộc',
            english: 'Methods of Building the National Unity Bloc',
        },
        blog: '5.1',
    },
    '5.2.1': {
        title: {
            vietnamese: 'Đại đoàn kết dân tộc – Đặt vấn đề và cơ sở hình thành',
            english:
                'National Great Unity – Problem Statement and Formation Basis',
        },
        blog: '5.2',
    },
    '5.2.2': {
        title: {
            vietnamese: 'Nội dung cơ bản tư tưởng đại đoàn kết',
            english: 'Basic Content of Great Unity Thought',
        },
        blog: '5.2',
    },
    '5.2.3': {
        title: {
            vietnamese:
                'Đại đoàn kết là đường lối chiến lược, không phải sách lược nhất thời',
            english: 'Great Unity as Strategic Line, Not Temporary Tactic',
        },
        blog: '5.2',
    },
    '5.2.4': {
        title: {
            vietnamese: 'Ý nghĩa chiến lược quyết định thắng lợi cách mạng',
            english: 'Strategic Significance Determining Revolutionary Victory',
        },
        blog: '5.2',
    },
    '5.2.5': {
        title: {
            vietnamese:
                'Dẫn chứng từ bối cảnh xã hội, kinh tế – chính trị hiện nay',
            english: 'Evidence from Current Social, Economic-Political Context',
        },
        blog: '5.2',
    },
    '5.2.6': {
        title: {
            vietnamese: 'Kết luận về tính chiến lược của đại đoàn kết dân tộc',
            english: 'Conclusion on Strategic Nature of National Great Unity',
        },
        blog: '5.2',
    },
} as const

export type BlogId = keyof typeof philosophyBlogs
export type ChapterId = keyof typeof philosophyBlogs
export type SectionId = keyof typeof philosophySections
