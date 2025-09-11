export const philosophyBlogs = {
    '2.1': {
        title: {
            vietnamese: 'Hàng hóa và lao động sản xuất hàng hóa',
            english: 'Commodities and Commodity Production Labor',
            japanese: '商品と商品生産労働',
        },
        sections: ['2.1.1', '2.1.2', '2.1.3', '2.1.4'],
    },
    '2.2': {
        title: {
            vietnamese: 'Thị trường và nền kinh tế thị trường',
            english: 'Market and Market Economy',
            japanese: '市場と市場経済',
        },
        sections: ['2.2.1', '2.2.2', '2.2.3'],
    },
    '2.3': {
        title: {
            vietnamese: 'Vai trò của một số chủ thể tham gia thị trường',
            english: 'Roles of Some Market Participants',
            japanese: '市場参加者の役割',
        },
        sections: ['2.3.1'],
    },
    '3.1': {
        title: {
            vietnamese: 'Tư bản và quá trình sản xuất tư bản chủ nghĩa',
            english: 'Capital and the Capitalist Production Process',
            japanese: '資本と資本主義生産過程',
        },
        sections: ['3.1.1', '3.1.2', '3.1.3'],
    },
    '3.2': {
        title: {
            vietnamese: 'Tích lũy tư bản',
            english: 'Capital Accumulation',
            japanese: '資本の蓄積',
        },
        sections: ['3.2.1', '3.2.2', '3.2.3'],
    },
    '3.3': {
        title: {
            vietnamese: 'Các hình thức biểu hiện của giá trị thặng dư',
            english: 'Forms of Manifestation of Surplus Value',
            japanese: '剰余価値の表現形態',
        },
        sections: ['3.3.1', '3.3.2', '3.3.3'],
    },
} as const

export const philosophySections = {
    '2.1.1': {
        title: {
            vietnamese: 'Sản xuất hàng hóa',
            english: 'Commodity Production',
            japanese: '商品生産',
        },
        blog: '2.1',
    },
    '2.1.2': {
        title: {
            vietnamese: 'Hàng hóa',
            english: 'Commodities',
            japanese: '商品',
        },
        blog: '2.1',
    },
    '2.1.3': {
        title: {
            vietnamese: 'Tiền tệ',
            english: 'Money',
            japanese: '貨幣',
        },
        blog: '2.1',
    },
    '2.1.4': {
        title: {
            vietnamese: 'Dịch vụ và quan hệ trao đổi trong điều kiện ngày nay',
            english: 'Services and Exchange Relations in Modern Conditions',
            japanese: '現代における サービスと交換関係',
        },
        blog: '2.1',
    },
    '2.2.1': {
        title: {
            vietnamese: 'Khái niệm, phân loại và vai trò của thị trường',
            english: 'Concept, Classification and Role of Market',
            japanese: '市場の概念、分類、役割',
        },
        blog: '2.2',
    },
    '2.2.2': {
        title: {
            vietnamese: 'Nền kinh tế thị trường và các quy luật chủ yếu',
            english: 'Market Economy and Main Laws',
            japanese: '市場経済と主要法則',
        },
        blog: '2.2',
    },
    '2.2.3': {
        title: {
            vietnamese: 'Cạnh tranh trong nền kinh tế thị trường',
            english: 'Competition in Market Economy',
            japanese: '市場経済における競争',
        },
        blog: '2.2',
    },
    '2.3.1': {
        title: {
            vietnamese: 'Vai trò của một số chủ thể tham gia thị trường',
            english: 'Roles of Some Market Participants',
            japanese: '市場参加者の役割',
        },
        blog: '2.3',
    },
    '3.1.1': {
        title: {
            vietnamese: 'Nguồn gốc giá trị thặng dư',
            english: 'Origin of Surplus Value',
            japanese: '剰余価値の起源',
        },
        blog: '3.1',
    },
    '3.1.2': {
        title: {
            vietnamese: 'Bản chất của giá trị thặng dư',
            english: 'Nature of Surplus Value',
            japanese: '剰余価値の本質',
        },
        blog: '3.1',
    },
    '3.1.3': {
        title: {
            vietnamese: 'Các phương pháp sản xuất giá trị thặng dư',
            english: 'Methods of Producing Surplus Value',
            japanese: '剰余価値生産の方法',
        },
        blog: '3.1',
    },

    '3.2.1': {
        title: {
            vietnamese: 'Khái niệm tái sản xuất và tích lũy tư bản',
            english: 'Concept of Reproduction and Capital Accumulation',
            japanese: '再生産と資本蓄積の概念',
        },
        blog: '3.2',
    },
    '3.2.2': {
        title: {
            vietnamese: 'Những nhân tố ảnh hưởng tới quy mô tích lũy',
            english: 'Factors Affecting the Scale of Accumulation',
            japanese: '蓄積規模に影響する要因',
        },
        blog: '3.2',
    },
    '3.2.3': {
        title: {
            vietnamese: 'Hệ quả của tích lũy tư bản',
            english: 'Consequences of Capital Accumulation',
            japanese: '資本蓄積の結果',
        },
        blog: '3.2',
    },
    '3.3.1': {
        title: {
            vietnamese: 'Lợi nhuận',
            english: 'Profit',
            japanese: '利潤',
        },
        blog: '3.3',
    },
    '3.3.2': {
        title: {
            vietnamese: 'Lợi tức',
            english: 'Interest',
            japanese: '利息',
        },
        blog: '3.3',
    },
    '3.3.3': {
        title: {
            vietnamese: 'Địa tô tư bản chủ nghĩa',
            english: 'Capitalist Ground Rent',
            japanese: '資本主義地代',
        },
        blog: '3.3',
    },
} as const

export type BlogId = keyof typeof philosophyBlogs
export type SectionId = keyof typeof philosophySections
