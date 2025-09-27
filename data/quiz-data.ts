export interface QuizQuestion {
    question: string
    options: string[]
    correct: number
    explanation: string
}

export interface QuizData {
    vietnamese: QuizQuestion[]
    english: QuizQuestion[]
}

export const quizData: Record<number, QuizData> = {
    1: {
        vietnamese: [
            {
                question:
                    'Đặc điểm nào sau đây KHÔNG PHẢI là đặc trưng bản chất của chủ nghĩa xã hội?',
                options: [
                    'Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại',
                    'Có chế độ xã hội do nhân dân lao động làm chủ',
                    'Có sự thống trị tuyệt đối của một giai cấp duy nhất, không có sự hợp tác',
                    'Giải phóng giai cấp, dân tộc, xã hội và con người',
                ],
                correct: 2,
                explanation:
                    'CNXH không phải là sự thống trị tuyệt đối của một giai cấp mà là sự hợp tác giữa các giai cấp dưới sự lãnh đạo của giai cấp công nhân.',
            },
            {
                question:
                    'Vì sao thời kỳ quá độ lên chủ nghĩa xã hội được gọi là "quá độ"?',
                options: [
                    'Vì đây là giai đoạn mà mục tiêu cuối cùng của chủ nghĩa xã hội đã được hoàn thành',
                    'Vì xã hội trong giai đoạn này chỉ tồn tại một thành phần kinh tế duy nhất là kinh tế nhà nước',
                    'Vì đây là một trạng thái xã hội không ổn định, tồn tại đan xen giữa cái cũ và cái mới',
                    'Vì đây là giai đoạn mà mọi mâu thuẫn giai cấp đã hoàn toàn biến mất',
                ],
                correct: 2,
                explanation:
                    '"Quá độ" nhấn mạnh tính chuyển tiếp: xã hội chưa ổn định, tồn tại đan xen tàn dư cũ và yếu tố mới, diễn ra đấu tranh giữa TBCN và XHCN.',
            },
            {
                question:
                    'Theo bài học, chủ nghĩa xã hội được tiếp cận theo mấy nghĩa chính?',
                options: [
                    '2 nghĩa: lý thuyết và thực tiễn',
                    '3 nghĩa: phong trào, tư tưởng, khoa học',
                    '4 nghĩa: phong trào thực tiễn, trào lưu tư tưởng, khoa học, chế độ xã hội',
                    '5 nghĩa: kinh tế, chính trị, văn hóa, xã hội, tư tưởng',
                ],
                correct: 2,
                explanation:
                    'Bài học nêu rõ 4 cách tiếp cận: phong trào thực tiễn, trào lưu tư tưởng-lý luận, khoa học (CNXH khoa học), và chế độ xã hội hiện thực.',
            },
        ],
        english: [
            {
                question:
                    'Which of the following is NOT an essential characteristic of socialism?',
                options: [
                    'A highly developed economy based on modern productive forces',
                    'A social order in which working people are the masters',
                    'Absolute domination by a single class with no cooperation',
                    'Liberation of classes, the nation, society, and the individual',
                ],
                correct: 2,
                explanation:
                    'Socialism is not about absolute domination by one class but rather cooperation among classes under the leadership of the working class.',
            },
            {
                question:
                    'Why is the period of transition to socialism called a "transition"?',
                options: [
                    'Because the ultimate goals of socialism have already been achieved',
                    'Because society in this phase has only one economic sector: the state economy',
                    'Because it is an unstable social state with coexistence of old and new elements',
                    'Because all class contradictions have completely disappeared',
                ],
                correct: 2,
                explanation:
                    '"Transition" emphasizes the transitional nature: society is not yet stable, old remnants coexist with new elements, and there is struggle between capitalism and socialism.',
            },
            {
                question:
                    'According to the lesson, how many main approaches to socialism are there?',
                options: [
                    '2 approaches: theory and practice',
                    '3 approaches: movement, ideology, science',
                    '4 approaches: practical movement, intellectual current, science, real social system',
                    '5 approaches: economic, political, cultural, social, ideological',
                ],
                correct: 2,
                explanation:
                    'The lesson clearly states 4 approaches: practical movement, intellectual-theoretical current, science (scientific socialism), and real social system.',
            },
        ],
    },
    2: {
        vietnamese: [
            {
                question:
                    'Vì sao trong thời kỳ quá độ lên CNXH tồn tại nền kinh tế đa thành phần?',
                options: [
                    'Do nhà nước chưa có khả năng quản lý kinh tế',
                    'Vì không thể dùng ý chí để xóa bỏ ngay kết cấu nhiều thành phần; đây là bước trung gian tất yếu',
                    'Để khuyến khích cạnh tranh tư bản chủ nghĩa lâu dài',
                    'Vì kinh tế thị trường luôn mâu thuẫn với CNXH',
                ],
                correct: 1,
                explanation:
                    'Thời kỳ quá độ tất yếu tồn tại nhiều thành phần kinh tế (gia trưởng, hàng hóa nhỏ, tư bản, tư bản nhà nước, XHCN) vì không thể xóa bỏ ngay lập tức kết cấu cũ; đây là bước trung gian để xây dựng cơ sở vật chất cho CNXH.',
            },
            {
                question:
                    'Đặc trưng chính trị nào sau đây phản ánh đúng bản chất nhà nước trong thời kỳ quá độ lên CNXH?',
                options: [
                    'Nhà nước trung lập, không đại diện lợi ích giai cấp nào',
                    'Nhà nước mang bản chất giai cấp tư sản, thúc đẩy tích lũy tư bản',
                    'Nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích và ý chí của nhân dân lao động',
                    'Nhà nước tôn giáo, quản trị theo giáo luật',
                ],
                correct: 2,
                explanation:
                    'Trong thời kỳ quá độ, nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động, hướng tới xây dựng dân chủ XHCN và trấn áp các thế lực chống phá.',
            },
            {
                question:
                    'Phát biểu nào đúng về lĩnh vực tư tưởng – văn hóa trong thời kỳ quá độ?',
                options: [
                    'Chỉ còn hệ tư tưởng XHCN, mọi tư tưởng khác bị xóa bỏ ngay',
                    'Tồn tại đan xen tư tưởng cũ và mới; xây dựng văn hóa vô sản mới, kế thừa giá trị dân tộc và tinh hoa nhân loại',
                    'Khuyến khích khôi phục toàn bộ tư tưởng phong kiến cho ổn định',
                    'Không đặt mục tiêu phát triển văn hóa trong giai đoạn này',
                ],
                correct: 1,
                explanation:
                    'Thời kỳ quá độ có tính chất đan xen: tàn dư tư tưởng cũ tồn tại cùng các yếu tố mới XHCN; nhiệm vụ là xây dựng văn hóa mới, đồng thời kế thừa giá trị dân tộc và tinh hoa văn hóa nhân loại.',
            },
        ],
        english: [
            {
                question:
                    'Why does a multi-sector economy exist during the transition to socialism?',
                options: [
                    'Because the state cannot manage the economy',
                    'Because the old multi-structure cannot be abolished by sheer will; it is an inevitable intermediate stage',
                    'To encourage long-term capitalist competition',
                    'Because markets are inherently incompatible with socialism',
                ],
                correct: 1,
                explanation:
                    'In the transitional period, multiple sectors (patriarchal, petty commodity, capitalist, state capitalism, socialist) coexist since the old structure cannot be removed overnight; this is a necessary bridge to build the material basis for socialism.',
            },
            {
                question:
                    'Which political feature correctly reflects the state in the transitional period?',
                options: [
                    'A neutral state representing no class',
                    'A bourgeois state promoting capitalist accumulation',
                    'A new-type state of working-class character, representing the interests and will of working people',
                    'A theocratic state governed by religious law',
                ],
                correct: 2,
                explanation:
                    'The transitional state is a new-type state with working-class character that represents the interests, power, and will of working people, aiming to build socialist democracy and suppress hostile forces.',
            },
            {
                question:
                    'Which statement is correct about ideology–culture in the transition?',
                options: [
                    'Only socialist ideology remains; all others vanish immediately',
                    'Old and new ideas coexist; a new proletarian culture is built while inheriting national values and world cultural achievements',
                    'Feudal ideology should be fully restored for stability',
                    'Cultural development is not a goal in this phase',
                ],
                correct: 1,
                explanation:
                    "The transition is mixed: remnants of old ideologies coexist with emerging socialist elements; the task is to build a new culture while inheriting national values and the best of humankind's culture.",
            },
        ],
    },
    3: {
        vietnamese: [
            {
                question:
                    'Phát biểu nào đúng về "quá độ gián tiếp" theo Mác – Lênin?',
                options: [
                    'Là con đường chỉ có ở các nước tư bản phát triển',
                    'Xuất phát từ những nước chưa trải qua giai đoạn TBCN và kế thừa thành tựu khoa học – công nghệ của TBCN để phát triển lực lượng sản xuất',
                    'Bỏ qua mọi thành tựu của TBCN để giữ tính "thuần khiết" XHCN',
                    'Chỉ diễn ra trên lĩnh vực văn hóa – tư tưởng',
                ],
                correct: 1,
                explanation:
                    'Quá độ gián tiếp dành cho những nước chưa trải qua TBCN; nguyên tắc là kế thừa thành tựu khoa học – công nghệ của TBCN để đẩy nhanh phát triển lực lượng sản xuất.',
            },
            {
                question:
                    'Điều kiện thuận lợi làm cơ sở cho "quá độ trực tiếp" là gì?',
                options: [
                    'Dân số ít và tài nguyên phong phú',
                    'Đã có cơ sở vật chất – kỹ thuật – xã hội do TBCN tạo ra ở trình độ cao',
                    'Không có mâu thuẫn giai cấp',
                    'Không cần tổ chức lại quan hệ sở hữu',
                ],
                correct: 1,
                explanation:
                    'Quá độ trực tiếp diễn ra ở các nước TBCN phát triển vì đã tích lũy được nền tảng vật chất – kỹ thuật – xã hội ở trình độ cao, tạo thuận lợi cho chuyển hóa lên CNXH.',
            },
        ],
        english: [
            {
                question:
                    'Which statement is correct about the "indirect transition" per Marx–Lenin?',
                options: [
                    'It occurs only in advanced capitalist countries',
                    'It starts in countries that have not undergone capitalism and inherits capitalist science–technology to accelerate development of productive forces',
                    'It rejects all capitalist achievements to keep socialism "pure"',
                    'It happens only in the cultural–ideological sphere',
                ],
                correct: 1,
                explanation:
                    'The indirect transition applies to countries without a prior capitalist stage; its principle is to inherit capitalist scientific–technological achievements to rapidly develop productive forces.',
            },
            {
                question:
                    'What favorable condition underpins a "direct transition"?',
                options: [
                    'Small population and rich natural resources',
                    'An advanced material, technical, and social foundation accumulated under capitalism',
                    'Absence of class contradictions',
                    'No need to reorganize property relations',
                ],
                correct: 1,
                explanation:
                    'Direct transition is feasible in developed capitalist countries because they have amassed a high-level material–technical–social base that facilitates the move to socialism.',
            },
        ],
    },
    4: {
        vietnamese: [
            {
                question:
                    'Theo bài học, giai đoạn nào được chia thành 6 kỳ trong quá trình chuyển đổi lên CNXH ở Việt Nam?',
                options: [
                    'Giai đoạn 1954-1975: xây dựng CNXH ở miền Bắc và kháng chiến thống nhất',
                    'Toàn bộ quá trình từ 1954 đến nay với 6 kỳ: 1954-1975, 1975-1986, 1986-1995, 1995-2007, 2008-2020, 2021-nay',
                    'Chỉ giai đoạn Đổi mới từ 1986',
                    'Giai đoạn hội nhập quốc tế từ 1995',
                ],
                correct: 1,
                explanation:
                    'Theo nội dung, quá trình quá độ ở Việt Nam được chia thành 6 giai đoạn: 1954-1975 (xây dựng CNXH miền Bắc), 1975-1986 (sau thống nhất), 1986-1995 (khởi xướng Đổi mới), 1995-2007 (hội nhập), 2008-2020 (hội nhập sâu), 2021-nay (chuyển đổi số-xanh).',
            },
            {
                question:
                    'Mục tiêu cam kết quan trọng của Việt Nam trong giai đoạn 2021-nay là gì?',
                options: [
                    'Hoàn thành công nghiệp hóa vào 2025',
                    'Net Zero 2050 và chuyển đổi số-xanh',
                    'Tăng trưởng GDP 10% mỗi năm',
                    'Loại bỏ hoàn toàn kinh tế tư nhân',
                ],
                correct: 1,
                explanation:
                    'Trong giai đoạn 2021-nay, Việt Nam cam kết mục tiêu Net Zero 2050, triển khai chuyển đổi số và chuyển đổi xanh, tiếp tục 3 đột phá chiến lược.',
            },
        ],
        english: [
            {
                question:
                    "According to the lesson, which phase is divided into 6 periods in Vietnam's transition to socialism?",
                options: [
                    'The 1954-1975 phase: building socialism in the North and resistance for reunification',
                    'The entire process from 1954 to present with 6 periods: 1954-1975, 1975-1986, 1986-1995, 1995-2007, 2008-2020, 2021-present',
                    'Only the Đổi Mới phase from 1986',
                    'The international integration phase from 1995',
                ],
                correct: 1,
                explanation:
                    "According to the content, Vietnam's transition is divided into 6 stages: 1954-1975 (building socialism in the North), 1975-1986 (post-reunification), 1986-1995 (launching Đổi Mới), 1995-2007 (integration), 2008-2020 (deep integration), 2021-present (digital-green transition).",
            },
            {
                question:
                    "What is Vietnam's important commitment goal in the 2021-present period?",
                options: [
                    'Complete industrialization by 2025',
                    'Net Zero 2050 and digital-green transition',
                    '10% GDP growth annually',
                    'Completely eliminate private economy',
                ],
                correct: 1,
                explanation:
                    'In the 2021-present period, Vietnam commits to Net Zero 2050, implementing digital and green transitions, continuing the three strategic breakthroughs.',
            },
        ],
    },
    5: {
        vietnamese: [
            {
                question:
                    'Theo bài học, tỷ lệ hộ nghèo đa chiều ở Việt Nam năm 2023 là bao nhiêu?',
                options: ['5,15%', '2,93%', '3,87%', '4,21%'],
                correct: 1,
                explanation:
                    'Theo Chương trình MTQG Giảm nghèo bền vững 2021-2025, tỷ lệ hộ nghèo đa chiều năm 2023 là 2,93%, giảm so với năm 2022.',
            },
            {
                question:
                    'Đề án 06 về dữ liệu dân cư và định danh điện tử được ban hành theo quyết định nào?',
                options: [
                    'QĐ 90/QĐ-TTg ngày 18/01/2022',
                    'QĐ 06/QĐ-TTg ngày 06/01/2022',
                    'QĐ 1719/QĐ-TTg',
                    'Nghị định 69/2024/NĐ-CP',
                ],
                correct: 1,
                explanation:
                    'Đề án 06 về dữ liệu dân cư, định danh và xác thực điện tử được ban hành theo QĐ 06/QĐ-TTg ngày 06/01/2022.',
            },
        ],
        english: [
            {
                question:
                    "According to the lesson, what was Vietnam's multidimensional poverty rate in 2023?",
                options: ['5.15%', '2.93%', '3.87%', '4.21%'],
                correct: 1,
                explanation:
                    'According to the National Target Program on Sustainable Poverty Reduction 2021-2025, the multidimensional poverty rate in 2023 was 2.93%, down from 2022.',
            },
            {
                question:
                    'Project 06 on population data and electronic identification was issued under which decision?',
                options: [
                    'Decision No. 90/QD-TTg dated 18/01/2022',
                    'Decision No. 06/QD-TTg dated 06/01/2022',
                    'Decision No. 1719/QD-TTg',
                    'Decree No. 69/2024/ND-CP',
                ],
                correct: 1,
                explanation:
                    'Project 06 on population data, electronic identification and authentication was issued under Decision No. 06/QD-TTg dated 06/01/2022.',
            },
        ],
    },

    // Quiz về Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh
    6: {
        vietnamese: [
            {
                question:
                    'Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc được coi là gì?',
                options: [
                    'Một thủ đoạn chính trị tạm thời',
                    'Một sách lược tình thế',
                    'Một chiến lược lâu dài, mang tính sống còn',
                    'Một biện pháp đối phó ngoại xâm',
                ],
                correct: 2,
                explanation:
                    'Theo Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài, nhất quán của cách mạng Việt Nam. Đây là vấn đề mang tính sống còn của dân tộc Việt Nam.',
            },
            {
                question:
                    'Điều kiện duy nhất để tham gia khối đại đoàn kết dân tộc theo Hồ Chí Minh là gì?',
                options: [
                    'Phải là công – nông – trí thức',
                    'Có tài sản và địa vị xã hội',
                    'Yêu nước và sẵn sàng tham gia sự nghiệp chung',
                    'Phải theo một tôn giáo nhất định',
                ],
                correct: 2,
                explanation:
                    'Hồ Chí Minh khẳng định: "Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ". Điều kiện duy nhất là yêu nước và sẵn sàng tham gia sự nghiệp chung của dân tộc.',
            },
            {
                question:
                    'Hồ Chí Minh khẳng định: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Câu nói này nhấn mạnh:',
                options: [
                    'Đoàn kết chỉ cần trong kháng chiến',
                    'Đoàn kết là nhân tố quyết định mọi thắng lợi',
                    'Đoàn kết chỉ cần trong giai đoạn cách mạng dân tộc dân chủ',
                    'Đoàn kết là khẩu hiệu tuyên truyền',
                ],
                correct: 1,
                explanation:
                    'Câu nói này thể hiện tư tưởng của Hồ Chí Minh về đoàn kết như nhân tố quyết định mọi thắng lợi. Đoàn kết không chỉ trong một giai đoạn mà là chiến lược xuyên suốt, là "then chốt của thành công".',
            },
            {
                question:
                    'Hồ Chí Minh đã vận dụng và phát triển cơ sở lý luận nào để hình thành tư tưởng đại đoàn kết dân tộc?',
                options: [
                    'Chủ nghĩa xã hội không tưởng',
                    'Chủ nghĩa Mác – Lênin',
                    'Tư tưởng Khổng – Mạnh',
                    'Học thuyết Tam dân của Tôn Trung Sơn',
                ],
                correct: 1,
                explanation:
                    'Hồ Chí Minh đã vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam, kết hợp với truyền thống đoàn kết của dân tộc để hình thành tư tưởng đại đoàn kết toàn dân tộc.',
            },
            {
                question:
                    'Thắng lợi nào chứng minh sức mạnh đoàn kết dân tộc khi chỉ trong nửa tháng nhân dân cả nước đã giành chính quyền?',
                options: [
                    'Chiến dịch Hồ Chí Minh 1975',
                    'Chiến thắng Điện Biên Phủ 1954',
                    'Cách mạng Tháng Tám 1945',
                    'Phong trào Đồng Khởi 1960',
                ],
                correct: 2,
                explanation:
                    'Cách mạng Tháng Tám 1945 là minh chứng rõ ràng nhất cho sức mạnh của đại đoàn kết toàn dân tộc. Chỉ trong vòng nửa tháng (từ 16-30/8/1945), nhân dân cả nước đã đoàn kết giành chính quyền, lập nên nước Việt Nam Dân chủ Cộng hòa.',
            },
            {
                question:
                    'Mặt trận nào do Hồ Chí Minh sáng lập đã tập hợp toàn dân trong cuộc kháng chiến chống Pháp?',
                options: [
                    'Việt Minh',
                    'Mặt trận Liên Việt',
                    'Mặt trận Dân chủ Đông Dương',
                    'Mặt trận Tổ quốc Việt Nam',
                ],
                correct: 0,
                explanation:
                    'Mặt trận Việt Minh được thành lập năm 1941 dưới sự lãnh đạo của Hồ Chí Minh, đã tập hợp toàn dân trong cuộc kháng chiến chống Pháp (1946-1954), thể hiện sức mạnh của đại đoàn kết toàn dân tộc.',
            },
            {
                question:
                    'Vì sao Hồ Chí Minh coi đoàn kết là "mạch máu của cách mạng"?',
                options: [
                    'Vì chỉ có đoàn kết mới mang lại sự giàu sang cho đất nước',
                    'Vì đoàn kết tạo ra sức mạnh sống còn, thiếu đoàn kết cách mạng sẽ thất bại',
                    'Vì đoàn kết giúp tránh được mâu thuẫn tôn giáo',
                    'Vì đoàn kết chỉ có lợi trong đối ngoại',
                ],
                correct: 1,
                explanation:
                    'Hồ Chí Minh coi đoàn kết là "mạch máu của cách mạng" vì đoàn kết tạo ra sức mạnh sống còn cho cách mạng. Thiếu đoàn kết, cách mạng sẽ thất bại. Đoàn kết là nguồn sức mạnh vô địch, là điều kiện quyết định thành công của mọi sự nghiệp.',
            },
            {
                question:
                    'Trong bối cảnh hiện nay, minh chứng rõ ràng cho sức mạnh đoàn kết toàn dân là gì?',
                options: [
                    'Thành công trong phòng chống dịch Covid-19',
                    'Việc xây dựng nhà cao tầng ở thành phố',
                    'Sự phát triển của mạng xã hội',
                    'Xuất khẩu hàng hóa sang châu Âu',
                ],
                correct: 0,
                explanation:
                    'Thành công của Việt Nam trong phòng chống dịch Covid-19 là minh chứng rõ ràng cho sức mạnh đại đoàn kết toàn dân trong thời kỳ hiện tại. Toàn dân đã đoàn kết, chung sức đồng lòng để vượt qua đại dịch.',
            },
            {
                question:
                    'Trong bối cảnh hội nhập quốc tế, đại đoàn kết dân tộc có ý nghĩa gì?',
                options: [
                    'Giúp Việt Nam cô lập để tránh tác động toàn cầu',
                    'Là điều kiện để bảo vệ chủ quyền, ổn định chính trị và phát triển bền vững',
                    'Giúp đất nước tập trung vào phát triển công nghệ cao',
                    'Chỉ cần thiết trong quan hệ ngoại giao',
                ],
                correct: 1,
                explanation:
                    'Trong bối cảnh hội nhập quốc tế, đại đoàn kết dân tộc là điều kiện quan trọng để bảo vệ chủ quyền quốc gia, duy trì ổn định chính trị và thúc đẩy phát triển bền vững, đồng thời nâng cao vị thế của Việt Nam trên trường quốc tế.',
            },
            {
                question:
                    'Điền vào chỗ trống câu nói của Hồ Chí Minh: "Trong bầu trời không có gì quý bằng ________. Trong thế giới không có gì mạnh bằng lực lượng ________ của nhân dân."',
                options: [
                    'Tổ quốc – Đoàn kết',
                    'Nhân dân – Đoàn kết',
                    'Độc lập – Liên minh',
                    'Tự do – Trí thức',
                ],
                correct: 1,
                explanation:
                    'Câu nói đầy đủ của Hồ Chí Minh: "Trong bầu trời không có gì quý bằng nhân dân. Trong thế giới không có gì mạnh bằng lực lượng đoàn kết của nhân dân." Câu nói này thể hiện tư tưởng "dân là gốc", đồng thời khẳng định sức mạnh vô địch của đoàn kết.',
            },
        ],
        english: [
            {
                question:
                    "In Ho Chi Minh's thought, national unity is considered as what?",
                options: [
                    'A temporary political trick',
                    'A situational strategy',
                    'A long-term, vital strategy',
                    'A measure to counter foreign invasion',
                ],
                correct: 2,
                explanation:
                    'According to Ho Chi Minh, national great unity is not a strategy or political trick but a long-term, consistent strategy of the Vietnamese revolution. This is a vital issue for the Vietnamese nation.',
            },
            {
                question:
                    'What is the only condition to join the national unity bloc according to Ho Chi Minh?',
                options: [
                    'Must be worker-peasant-intellectual',
                    'Have wealth and social status',
                    'Love the country and be ready to participate in the common cause',
                    'Must follow a certain religion',
                ],
                correct: 2,
                explanation:
                    'Ho Chi Minh affirmed: "Anyone with talent, virtue, strength, and devotion to serve the Fatherland and people, we unite with them." The only condition is patriotism and readiness to participate in the nation\'s common cause.',
            },
            {
                question:
                    'Ho Chi Minh affirmed: "Unity, unity, great unity. Success, success, great success". This statement emphasizes:',
                options: [
                    'Unity is only needed during resistance',
                    'Unity is the decisive factor for all victories',
                    'Unity is only needed during national democratic revolution',
                    'Unity is just a propaganda slogan',
                ],
                correct: 1,
                explanation:
                    'This statement reflects Ho Chi Minh\'s thought about unity as the decisive factor for all victories. Unity is not just for one period but a consistent strategy throughout, being "the key to success".',
            },
            {
                question:
                    'What theoretical foundation did Ho Chi Minh apply and develop to form the thought of national great unity?',
                options: [
                    'Utopian socialism',
                    'Marxism-Leninism',
                    'Confucian-Mencian thought',
                    "Sun Yat-sen's Three Principles doctrine",
                ],
                correct: 1,
                explanation:
                    "Ho Chi Minh creatively applied Marxism-Leninism to Vietnam's specific conditions, combined with the nation's tradition of unity to form the thought of national great unity.",
            },
            {
                question:
                    'Which victory proved the power of national unity when people nationwide seized power in just half a month?',
                options: [
                    'Ho Chi Minh Campaign 1975',
                    'Dien Bien Phu Victory 1954',
                    'August Revolution 1945',
                    'Dong Khoi Movement 1960',
                ],
                correct: 2,
                explanation:
                    'The August Revolution 1945 is the clearest proof of the power of national great unity. In just half a month (August 16-30, 1945), people nationwide united to seize power and establish the Democratic Republic of Vietnam.',
            },
        ],
    },
}
