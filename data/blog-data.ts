import type { SectionId } from './philosophy-chapters'

export const blogData = {
    1: {
        id: 1,
        section: '4.1.1' as SectionId,
        title: {
            vietnamese: 'Khái niệm về chủ nghĩa xã hội và quá độ',
            english: 'Concept of Socialism and Transition',
        },
        content: {
            vietnamese: `
# Khái niệm về chủ nghĩa xã hội và thời kỳ quá độ

## Chủ nghĩa xã hội là gì?
Là một hệ tư tưởng và phong trào chính trị nhằm xây dựng một xã hội mà ở đó mọi người đều bình đẳng về kinh tế và xã hội. Trong đó, tài sản tư nhân được hạn chế hoặc loại bỏ, và các phương tiện sản xuất được sở hữu chung bởi cộng đồng.

### Bốn cách tiếp cận về chủ nghĩa xã hội
- **Là phong trào thực tiễn:** Phong trào đấu tranh của nhân dân lao động chống các giai cấp thống trị.  
- **Là trào lưu tư tưởng – lý luận:** Phản ánh lý tưởng giải phóng nhân dân lao động khỏi áp bức, bóc lột, bất công.  
- **Là một khoa học:** *Chủ nghĩa xã hội khoa học* – khoa học về sứ mệnh lịch sử của giai cấp công nhân.  
- **Là một chế độ xã hội hiện thực tốt đẹp:** Giai đoạn đầu của hình thành kinh tế – xã hội mới.

---


`,

            english: `
# Concepts of Socialism and the Transitional Period

## What is Socialism?
A system of ideas and a political movement aimed at building a society in which people are equal in economic and social terms. Private property is limited or abolished, and the means of production are commonly owned by the community.

### Four approaches to socialism
- **A practical movement:** The struggle of working people against ruling classes.  
- **An intellectual–theoretical current:** Expressing the ideal of liberating working people from oppression, exploitation, and injustice.  
- **A science:** *Scientific socialism*—the science of the historic mission of the working class.  
- **A real social system:** A positive, real-world social order—the initial stage in forming a new socio-economic system.

---




`,
        },
        excerpt: {
            vietnamese:
                'Khái niệm và bản chất CNXH, kèm lý giải thời kỳ “quá độ” — giai đoạn chuyển biến không ổn định, đan xen cũ–mới trên mọi lĩnh vực để tạo tiền đề cho xã hội mới.',
            english:
                "Concepts and essence of socialism, with explanations of the 'transitional' period—a phase of instability, mixing old and new across all fields to lay the groundwork for a new society.",
        },
        author: 'Admin',
        date: '2025-09-15',
        readTime: {
            vietnamese: '15 phút',
            english: '15 minutes',
        },
        image: '/assets/blog-images/socialism.jpg',
        originalLanguage: 'vietnamese' as const,
        quiz: {
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
    },
    2: {
        id: 2,
        section: '4.1.2' as SectionId,
        title: {
            vietnamese: 'Đặc điểm thời kỳ quá độ / VN khác như thế nào?',
            english:
                'Characteristics of the Transitional Period / How is Vietnam Different?',
        },
        content: {
            vietnamese: `
# ĐẶC ĐIỂM THỜI KÌ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI (XHCN)

## 1) Trên lĩnh vực kinh tế
- Tồn tại **nền kinh tế đa thành phần** trong một hệ thống kinh tế quốc dân thống nhất:
  - Kinh tế gia trưởng
  - Kinh tế hàng hóa nhỏ
  - Kinh tế tư bản
  - Kinh tế tư bản nhà nước
  - Kinh tế XHCN
- Đây là **bước quá độ trung gian tất yếu** trong quá trình xây dựng CNXH vì **không thể dùng ý chí** để xóa bỏ ngay kết cấu nhiều thành phần của nền kinh tế, đặc biệt ở những nước **chưa trải qua TBCN**.

## 2) Trên lĩnh vực chính trị
- **Sự thống trị của giai cấp vô sản**: Quyền lực nhà nước thuộc về giai cấp công nhân và nhân dân lao động.
- Mục tiêu: **xây dựng nền dân chủ XHCN** (hướng tới xã hội không giai cấp) và **trấn áp các thế lực thù địch**.

## 3) Trên lĩnh vực xã hội
- **Tồn tại nhiều giai cấp, tầng lớp** với quan hệ **vừa hợp tác, vừa đấu tranh** với nhau.

## 4) Trên lĩnh vực tư tưởng – văn hóa
- **Đan xen tư tưởng cũ và mới**:
  - Hệ tư tưởng **Mác – Lênin** giữ vai trò **chủ đạo**.
  - Các tư tưởng **tiểu tư sản**, **phong kiến**, và **phản động** vẫn còn tồn tại.
- **Xây dựng văn hóa vô sản mới**, **tiếp thu giá trị dân tộc** và **tinh hoa văn hóa nhân loại** nhằm đáp ứng **nhu cầu văn hóa – tinh thần** ngày càng tăng của nhân dân.

---

# SỰ KHÁC BIỆT CỦA VIỆT NAM TRONG THỜI KÌ QUÁ ĐỘ LÊN XHCN

## 1) Bỏ qua chế độ tư bản chủ nghĩa (TBCN)
- **Đặc điểm cơ bản**: Quá độ lên CNXH ở Việt Nam **bỏ qua TBCN**.

## 2) Xuất phát điểm thấp & bối cảnh khoa học – công nghệ
- Việt Nam là **nước nông nghiệp lạc hậu**, chịu **hậu quả nặng nề của chiến tranh**.
- **Cách mạng khoa học và công nghệ** hiện đại diễn ra mạnh mẽ, cuốn hút tất cả các nước ở mức độ khác nhau
  - → **Vừa là thời cơ**, vừa đặt ra **thách thức gay gắt** cho phát triển.

## 3) Nhận định về thời đại & tất yếu lịch sử
- Dù **chế độ XHCN ở Liên Xô và Đông Âu sụp đổ**, nhưng **thời đại ngày nay vẫn là thời đại quá độ từ CNTB lên CNXH**.
- Các quốc gia **cùng tồn tại, cạnh tranh gay gắt** vì lợi ích quốc gia.
- **Cuộc đấu tranh đi lên CNXH** tuy khó khăn nhưng **phù hợp quy luật tiến hóa lịch sử**; **loài người** được cho là **sẽ tiến tới CNXH**.
- **Quá độ lên CNXH** phản ánh **quy luật phát triển khách quan** của **cách mạng Việt Nam** → **Sự lựa chọn dứt khoát của Đảng**, đáp ứng **nguyện vọng dân tộc**.

## 4) Con đường đặc thù: Kinh tế thị trường định hướng XHCN
- **Đảng Cộng sản Việt Nam** xác định **xây dựng nền kinh tế thị trường định hướng XHCN**.
- Đây là **bước phát triển lý luận và thực tiễn**:
  - **Thừa nhận vai trò của kinh tế thị trường** để **phát triển lực lượng sản xuất**.
  - **Bảo đảm định hướng XHCN** thông qua **quản lý của Nhà nước** và **mục tiêu công bằng xã hội**.
`,
            english: `
# CHARACTERISTICS OF THE TRANSITIONAL PERIOD TO SOCIALISM

## 1) In the economic sphere
- A **multi-sector economy** exists within a unified national economic system:
  - Patriarchal (self-sufficient/household) economy
  - Small-commodity economy
  - Capitalist economy
  - State-capitalist economy
  - Socialist economy
- This is an **inevitable intermediate stage** in building socialism because it is **impossible to abolish** the multi-sector structure of the economy **by sheer will**, especially in countries **that have not undergone capitalism**.

## 2) In the political sphere
- **Rule of the proletariat**: State power belongs to the working class and the working people.
- Objective: **build socialist democracy** (moving toward a classless society) and **suppress hostile forces**.

## 3) In the social sphere
- **Multiple classes and strata coexist**, with relationships of **both cooperation and struggle**.

## 4) In the ideological–cultural sphere
- **Interweaving of old and new ideologies**:
  - **Marxism–Leninism** plays the **leading role**.
  - **Petty-bourgeois**, **feudal**, and other **reactionary** ideologies still persist.
- **Build a new proletarian culture**, **inherit national values**, and **absorb the quintessence of world culture** to meet the people’s **growing cultural and spiritual needs**.

---

# VIETNAM’S DISTINCTIVE FEATURES IN THE TRANSITION TO SOCIALISM

## 1) Bypassing the capitalist stage
- **Basic characteristic**: Vietnam’s transition to socialism **bypasses capitalism**.

## 2) Low starting point & science–technology context
- Vietnam was an **underdeveloped agrarian country**, bearing **heavy war legacies**.
- The **modern scientific and technological revolution** is unfolding vigorously, drawing in all countries to varying degrees  
  → creating **both opportunities** and **acute challenges** for development.

## 3) View of the era & historical necessity
- Although **socialism in the Soviet Union and Eastern Europe collapsed**, the **present era remains a transition from capitalism to socialism**.
- Countries **coexist and compete intensely** for national interests.
- The **struggle toward socialism** is difficult yet **consistent with the laws of historical evolution**; **humanity is expected to advance to socialism**.
- The **transition to socialism** reflects the **objective developmental law** of the **Vietnamese revolution** → the **resolute choice of the Party** that meets the **aspirations of the nation**.

## 4) A distinctive path: The socialist-oriented market economy
- The **Communist Party of Vietnam** has identified the goal of **building a socialist-oriented market economy**.
- This is a **development in theory and practice**:
  - **Recognizes the role of the market economy** in **developing productive forces**.
  - **Ensures socialist orientation** through **state management** and the **goal of social justice**.
`,
        },
        excerpt: {
            vietnamese:
                'Thời kỳ quá độ lên XHCN là giai đoạn tất yếu với kinh tế đa thành phần, chuyên chính vô sản và đan xen tư tưởng; ở Việt Nam—bỏ qua TBCN—tiến theo “kinh tế thị trường định hướng XHCN”, xuất phát điểm thấp, tận dụng cách mạng KH–CN, kiên định mục tiêu công bằng dưới sự lãnh đạo của Đảng.',
            english:
                "The transitional period to socialism is an inevitable stage with a multi-sector economy, proletarian dictatorship, and intertwined ideologies; in Vietnam—bypassing capitalism—advancing towards a 'socialist-oriented market economy', with a low starting point, leveraging the scientific and technological revolution, and steadfastly pursuing the goal of equity under the leadership of the Party.",
        },
        author: 'Admin',
        date: '2025-09-16',
        readTime: {
            vietnamese: '17 phút',
            english: '17 minutes',
        },
        image: '/assets/blog-images/transitional.jpg',
        originalLanguage: 'vietnamese' as const,
        quiz: {
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
                {
                    question:
                        'Điểm khác biệt cơ bản của Việt Nam trong quá trình quá độ lên CNXH là gì?',
                    options: [
                        'Đi lên CNXH qua đủ mọi giai đoạn tư bản chủ nghĩa trước đó',
                        'Bỏ qua chế độ TBCN, lựa chọn kinh tế thị trường định hướng XHCN để phát triển lực lượng sản xuất gắn với mục tiêu công bằng xã hội',
                        'Loại bỏ hoàn toàn cơ chế thị trường ngay từ đầu',
                        'Đặt mục tiêu đóng cửa, tự cấp tự túc dài hạn',
                    ],
                    correct: 1,
                    explanation:
                        'Việt Nam bỏ qua chế độ TBCN, lựa chọn mô hình kinh tế thị trường định hướng XHCN: thừa nhận vai trò thị trường để phát triển lực lượng sản xuất nhưng bảo đảm định hướng XHCN thông qua quản lý của nhà nước và mục tiêu công bằng.',
                },
                {
                    question:
                        'Vì sao giai đoạn này được gọi là “quá độ” lên CNXH?',
                    options: [
                        'Vì mục tiêu CNXH đã hoàn thành',
                        'Vì xã hội ổn định tuyệt đối, không còn mâu thuẫn',
                        'Vì là trạng thái chuyển tiếp không ổn định: đan xen cũ – mới, mâu thuẫn gay gắt, còn nhiều nhiệm vụ phải hoàn thành',
                        'Vì chỉ còn một thành phần kinh tế duy nhất',
                    ],
                    correct: 2,
                    explanation:
                        '“Quá độ” nhấn mạnh tính chuyển tiếp: xã hội chưa ổn định, tồn tại đan xen tàn dư cũ và yếu tố mới, diễn ra đấu tranh giữa TBCN và XHCN; các mục tiêu CNXH cần thời gian và điều kiện vật chất – kỹ thuật để hoàn thành.',
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
                        'The transition is mixed: remnants of old ideologies coexist with emerging socialist elements; the task is to build a new culture while inheriting national values and the best of humankind’s culture.',
                },
                {
                    question:
                        'What is Vietnam’s key particularity in the transition to socialism?',
                    options: [
                        'Advancing through all capitalist stages first',
                        'Bypassing the capitalist regime and adopting a socialist-oriented market economy to develop productive forces with social justice goals',
                        'Eliminating market mechanisms from the outset',
                        'Pursuing long-term autarky and self-sufficiency',
                    ],
                    correct: 1,
                    explanation:
                        'Vietnam bypasses the capitalist regime and adopts a socialist-oriented market economy: recognizing the role of markets to develop productive forces while ensuring socialist orientation via state management and equity objectives.',
                },
                {
                    question: 'Why is it called a “transition” to socialism?',
                    options: [
                        'Because socialist goals are already achieved',
                        'Because society is perfectly stable with no contradictions',
                        'Because it is an unstable transitory state: old–new coexist, sharp struggles persist, and many tasks remain unfinished',
                        'Because only one economic sector remains',
                    ],
                    correct: 2,
                    explanation:
                        '“Transition” stresses a transitory stage: society is not yet stable; old remnants coexist with new socialist elements; there is struggle between capitalism and socialism, and key socialist goals require time and material–technical conditions to complete.',
                },
            ],
        },
    },
    3: {
        id: 3,
        section: '4.1.3' as SectionId,
        title: {
            vietnamese: 'Các giai đoạn quá độ ở Việt Nam/Thế giới',
            english: 'Transitional Stages in Vietnam/World',
        },
        content: {
            vietnamese: `
# QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI — HÌNH THỨC & GIAI ĐOẠN

## I. HAI HÌNH THỨC QUÁ ĐỘ CHÍNH THEO MÁC – LÊNIN

### 1) Quá độ trực tiếp
- **Nguồn gốc**: Từ các nước **tư bản chủ nghĩa (TBCN) phát triển** tiến hành **trực tiếp** lên CNXH.
- **Điều kiện thuận lợi**: Đã có **cơ sở vật chất – kỹ thuật – xã hội** phát triển do TBCN tạo ra.

### 2) Quá độ gián tiếp
- **Nguồn gốc**: Từ những nước **chưa trải qua giai đoạn phát triển TBCN** để lên CNXH.
- **Nguyên tắc kế thừa**: **Không bỏ qua** các **thành tựu khoa học – công nghệ** của TBCN, mà **kế thừa** để **phát triển nhanh lực lượng sản xuất**.

---

## II. GIAI ĐOẠN QUÁ ĐỘ LÊN XHCN TRÊN THẾ GIỚI

### 1) Giành chính quyền
- **Lực lượng lãnh đạo**: Giai cấp vô sản **dưới sự lãnh đạo của Đảng Cộng sản**.
- **Nhiệm vụ**: **Lật đổ** chính quyền của giai cấp tư sản, **thiết lập chuyên chính vô sản**.
- **Ý nghĩa**: **Chuyển đổi chính trị** căn bản nhất.

### 2) Cải tạo và xây dựng
- **Cải tạo kinh tế**: Xóa bỏ **sở hữu tư nhân tư bản chủ nghĩa** về tư liệu sản xuất; **thiết lập công hữu** (sở hữu toàn dân và sở hữu tập thể).
- **Xây dựng cơ sở vật chất – kỹ thuật**: Thực hiện **công nghiệp hóa, hiện đại hóa**.
- **Cải tạo xã hội**: Từng bước **xóa bỏ tàn dư xã hội cũ**, **xây dựng quan hệ xã hội mới**.

### 3) Hoàn thành quá độ
- Khi các mục tiêu trên **được hoàn thành**, xã hội **chuyển sang giai đoạn phát triển cao hơn** của CNXH, **chuẩn bị** tiến tới **chủ nghĩa cộng sản**.

---

## III. GIAI ĐOẠN QUÁ ĐỘ LÊN XHCN Ở VIỆT NAM

> Quá trình quá độ ở Việt Nam **mang tính đặc thù** do **bỏ qua chế độ TBCN**. Có thể chia thành **hai giai đoạn lớn**:

### 1) Giai đoạn trước Đổi mới (1954–1986)
- **Bối cảnh**: Miền Bắc **xây dựng CNXH trong điều kiện chiến tranh**; áp dụng **mô hình kinh tế kế hoạch hóa tập trung** theo kiểu Liên Xô.
- **Nhiệm vụ**: Hoàn thành **cách mạng dân tộc dân chủ nhân dân** ở miền Nam, **thống nhất đất nước**, **bước đầu xây dựng cơ sở vật chất – kỹ thuật**.
- **Hạn chế**: Mô hình **bộc lộ nhiều yếu kém**, dẫn tới **khủng hoảng kinh tế**.

### 2) Giai đoạn Đổi mới (từ 1986 đến nay)
- **Bước ngoặt**: **Chuyển đổi** từ **kinh tế tập trung** sang **kinh tế thị trường định hướng XHCN**.
- **Mục tiêu**:
  - **Phát triển lực lượng sản xuất**, **đa dạng hóa** các **thành phần kinh tế**.
  - **Giữ vững định hướng XHCN** thông qua **vai trò lãnh đạo của Đảng** và **quản lý của Nhà nước**.
- **Nhiệm vụ trọng tâm**: **Công nghiệp hóa, hiện đại hóa**, **phát triển kinh tế tri thức**, **chủ động hội nhập quốc tế** để **xây dựng cơ sở vật chất** cho CNXH.
            `,
            english: `
            # TRANSITION TO SOCIALISM — FORMS & STAGES

## I. TWO PRINCIPAL FORMS ACCORDING TO MARX–LENIN

### 1) Direct transition
- **Origin**: From **developed capitalist** countries proceeding **directly** to socialism.
- **Favorable conditions**: A **material, technical, and social** foundation already developed under capitalism.

### 2) Indirect transition
- **Origin**: From countries **that have not undergone** the capitalist stage toward socialism.
- **Principle of inheritance**: **Do not discard** the **scientific and technological achievements** of capitalism; **inherit** them to **rapidly develop the productive forces**.

---

## II. STAGES OF THE TRANSITION TO SOCIALISM IN THE WORLD

### 1) Seizing political power
- **Leading force**: The proletariat **under the leadership of the Communist Party**.
- **Task**: **Overthrow** the bourgeois state and **establish the dictatorship of the proletariat**.
- **Significance**: The **most fundamental political transformation**.

### 2) Transformation and construction
- **Economic transformation**: Abolish **capitalist private ownership** of the means of production; **establish public ownership** (ownership by the whole people and by collectives).
- **Building the material–technical base**: Implement **industrialization and modernization**.
- **Social transformation**: Gradually **eliminate remnants of the old society** and **build new social relations**.

### 3) Completing the transition
- Once the above objectives are **achieved**, society **moves to a higher stage of socialism**, **preparing** to advance to **communism**.

---

## III. STAGES OF THE TRANSITION TO SOCIALISM IN VIETNAM

> Vietnam’s transition is **distinctive** because it **bypasses the capitalist stage**. It can be divided into **two major phases**:

### 1) Pre–Đổi Mới phase (1954–1986)
- **Context**: The North **built socialism under wartime conditions**; applied a **centrally planned economy** modeled on the Soviet Union.
- **Tasks**: Complete the **people’s national democratic revolution** in the South, **reunify the country**, and **begin building the material–technical base**.
- **Limitations**: The model **revealed many weaknesses**, leading to an **economic crisis**.

### 2) Đổi Mới phase (1986–present)
- **Turning point**: **Shift** from a **centrally planned economy** to a **socialist-oriented market economy**.
- **Objectives**:
  - **Develop the productive forces** and **diversify** economic sectors.
  - **Maintain the socialist orientation** through the **Party’s leadership** and **State management**.
- **Core tasks**: **Industrialization and modernization**, **developing the knowledge economy**, and **proactive international integration** to **build the material foundation** for socialism.

      `,
        },
        excerpt: {
            vietnamese:
                'Thời kỳ quá độ lên CNXH gồm hai hình thức (trực tiếp ở nước TBCN phát triển, gián tiếp ở nước bỏ qua TBCN) với các bước giành chính quyền – cải tạo kinh tế, xã hội và xây dựng cơ sở vật chất để hoàn thành quá độ; ở Việt Nam, quá trình đặc thù bỏ qua TBCN và từ Đổi mới 1986 chuyển sang kinh tế thị trường định hướng XHCN nhằm phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.',
            english:
                'The transitional period to socialism includes two forms (direct in developed capitalist countries, indirect in countries bypassing capitalism) with stages of seizing power – economic and social transformation, and building the material base to complete the transition; in Vietnam, the distinctive process bypasses capitalism and since Đổi Mới 1986',
        },
        author: 'Admin',
        date: '2025-09-16',
        readTime: {
            vietnamese: '12 phút',
            english: '12 minutes',
        },
        image: '/assets/blog-images/transitional-stages.jpg',
        originalLanguage: 'vietnamese' as const,
        quiz: {
            vietnamese: [
                {
                    question:
                        'Phát biểu nào đúng về “quá độ gián tiếp” theo Mác – Lênin?',
                    options: [
                        'Là con đường chỉ có ở các nước tư bản phát triển',
                        'Xuất phát từ những nước chưa trải qua giai đoạn TBCN và kế thừa thành tựu khoa học – công nghệ của TBCN để phát triển lực lượng sản xuất',
                        'Bỏ qua mọi thành tựu của TBCN để giữ tính “thuần khiết” XHCN',
                        'Chỉ diễn ra trên lĩnh vực văn hóa – tư tưởng',
                    ],
                    correct: 1,
                    explanation:
                        'Quá độ gián tiếp dành cho những nước chưa trải qua TBCN; nguyên tắc là kế thừa thành tựu khoa học – công nghệ của TBCN để đẩy nhanh phát triển lực lượng sản xuất.',
                },
                {
                    question:
                        'Điều kiện thuận lợi làm cơ sở cho “quá độ trực tiếp” là gì?',
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
                {
                    question:
                        'Nhiệm vụ trung tâm của giai đoạn “giành chính quyền” trong quá độ lên CNXH là:',
                    options: [
                        'Xây dựng kinh tế tri thức',
                        'Xóa bỏ tiền tệ và thị trường ngay lập tức',
                        'Lật đổ chính quyền tư sản và thiết lập chuyên chính vô sản dưới sự lãnh đạo của Đảng Cộng sản',
                        'Chỉ tập trung vào cải tạo văn hóa',
                    ],
                    correct: 2,
                    explanation:
                        'Giai đoạn đầu là chuyển đổi chính trị căn bản: giai cấp vô sản, do Đảng Cộng sản lãnh đạo, lật đổ nhà nước tư sản và thiết lập chuyên chính vô sản.',
                },
                {
                    question:
                        'Đặc thù nổi bật của Việt Nam trong quá trình quá độ lên CNXH là:',
                    options: [
                        'Hoàn tất đầy đủ mọi giai đoạn phát triển TBCN rồi mới lên CNXH',
                        'Đóng cửa nền kinh tế để tự cấp tự túc',
                        'Bỏ qua chế độ TBCN và lựa chọn kinh tế thị trường định hướng XHCN để phát triển lực lượng sản xuất gắn với mục tiêu công bằng xã hội',
                        'Xóa bỏ ngay cơ chế thị trường',
                    ],
                    correct: 2,
                    explanation:
                        'Việt Nam bỏ qua TBCN, chuyển sang mô hình kinh tế thị trường định hướng XHCN: thừa nhận vai trò thị trường để phát triển lực lượng sản xuất nhưng bảo đảm định hướng XHCN qua lãnh đạo của Đảng và quản lý của Nhà nước.',
                },
                {
                    question:
                        'Trong giai đoạn Đổi mới (từ 1986 đến nay), nhiệm vụ trọng tâm được nêu trong nội dung là:',
                    options: [
                        'Phi công nghiệp hóa để ưu tiên nông nghiệp tự cung',
                        'Công nghiệp hóa, hiện đại hóa, phát triển kinh tế tri thức và chủ động hội nhập quốc tế để xây dựng cơ sở vật chất cho CNXH',
                        'Chỉ cải cách hành chính, không động tới cơ cấu kinh tế',
                        'Bãi bỏ mọi hình thức sở hữu ngoài công hữu',
                    ],
                    correct: 1,
                    explanation:
                        'Đổi mới nhấn mạnh công nghiệp hóa – hiện đại hóa, phát triển kinh tế tri thức và hội nhập quốc tế nhằm xây dựng cơ sở vật chất – kỹ thuật cho CNXH, đồng thời đa dạng hóa thành phần kinh tế.',
                },
            ],
            english: [
                {
                    question:
                        'Which statement is correct about the “indirect transition” per Marx–Lenin?',
                    options: [
                        'It occurs only in advanced capitalist countries',
                        'It starts in countries that have not undergone capitalism and inherits capitalist science–technology to accelerate development of productive forces',
                        'It rejects all capitalist achievements to keep socialism “pure”',
                        'It happens only in the cultural–ideological sphere',
                    ],
                    correct: 1,
                    explanation:
                        'The indirect transition applies to countries without a prior capitalist stage; its principle is to inherit capitalist scientific–technological achievements to rapidly develop productive forces.',
                },
                {
                    question:
                        'What favorable condition underpins a “direct transition”?',
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
                {
                    question:
                        'The central task of the “seizing power” stage is to:',
                    options: [
                        'Build a knowledge economy',
                        'Abolish money and markets immediately',
                        'Overthrow the bourgeois state and establish the dictatorship of the proletariat under Communist Party leadership',
                        'Focus only on cultural reform',
                    ],
                    correct: 2,
                    explanation:
                        'The first stage is a fundamental political break: the proletariat, led by the Communist Party, overthrows the bourgeois state and establishes the dictatorship of the proletariat.',
                },
                {
                    question:
                        'Vietnam’s standout particularity in the transition to socialism is:',
                    options: [
                        'Completing all capitalist stages before moving to socialism',
                        'Sealing the economy for long-term autarky',
                        'Bypassing the capitalist stage and adopting a socialist-oriented market economy to develop productive forces with social justice goals',
                        'Eliminating market mechanisms at once',
                    ],
                    correct: 2,
                    explanation:
                        'Vietnam bypasses capitalism and adopts a socialist-oriented market economy: recognizing the market’s role to develop productive forces while ensuring socialist orientation via Party leadership and state management.',
                },
                {
                    question:
                        'In the Đổi Mới phase (1986–present), the key tasks named in the content are:',
                    options: [
                        'De-industrialization in favor of subsistence agriculture',
                        'Industrialization and modernization, developing the knowledge economy, and proactive international integration to build the material basis for socialism',
                        'Administrative reform only, without altering economic structure',
                        'Abolishing all non-public forms of ownership',
                    ],
                    correct: 1,
                    explanation:
                        'Đổi Mới prioritizes industrialization–modernization, knowledge economy development, and international integration to build the material–technical foundation for socialism while diversifying economic sectors.',
                },
            ],
        },
    },
    4: {
        id: 4,
        section: '4.1.4' as SectionId,
        title: {
            vietnamese:
                'Thành tựu và thách thức của VN kể từ thời kỳ quá độ XHCN',
            english:
                'Achievements and Challenges of Vietnam since the Transitional Period to Socialism',
        },
        content: {
            vietnamese: `
# TIẾN TRÌNH QUÁ ĐỘ LÊN CNXH Ở VIỆT NAM — BẢN TÓM LƯỢC THEO DẠNG PROGRESS

---

## Tổng quan tiến trình (Progress Overview)

| Giai đoạn | Trọng tâm | Trạng thái | Ghi chú |
|---|---|---|---|
| **1954–1975** | Miền Bắc xây dựng CNXH, cả nước kháng chiến thống nhất | Hoàn thành | Định vị chính thức bắt đầu quá độ ở miền Bắc (ĐH III, 1960). |
| **1975–1986** | Sau thống nhất, tiền Đổi mới | Hoàn thành | Khủng hoảng kinh tế cuối kỳ, đặt nền cho Đổi mới. |
| **1986–1995** | Khởi xướng Đổi mới, định hình KTTT định hướng XHCN | Hoàn thành | Bước ngoặt thể chế, thoát khủng hoảng ban đầu. |
| **1995–2007** | Hội nhập khu vực → toàn cầu | Hoàn thành | ASEAN (1995), WTO (2007), FDI bùng nổ (2008). |
| **2008–2020** | Hội nhập sâu, hiện đại hóa nền tảng | Cơ bản hoàn thành | Hạ tầng – FTA mở rộng; năng suất còn là điểm nghẽn. |
| **2021–nay** | Chuyển đổi số – xanh; củng cố cân đối lớn | Đang tiếp diễn | Tiếp tục 3 đột phá chiến lược, cam kết Net Zero 2050. |

---

## Lộ trình chi tiết

### 1) 1954–1975 · Miền Bắc xây dựng CNXH, cả nước kháng chiến thống nhất — Tiến độ: 100%
**Dấu mốc**  
Đại hội III (1960) xác định: “xây dựng CNXH ở miền Bắc, đấu tranh giải phóng miền Nam”.

**Thành tựu**
- Định vị bắt đầu thời kỳ quá độ ở miền Bắc.

**Thách thức**
- Chiến tranh ác liệt, nguồn lực phân tán.
- Cơ chế tập trung bao cấp nặng nề dẫn đến khó khăn hậu chiến.

---

### 2) 1975–1986 · Sau thống nhất, tiền Đổi mới — Tiến độ: 100%
**Thành tựu**
- Thống nhất đất nước, khôi phục sản xuất bước đầu.
- Cải tổ bộ máy quản lý kinh tế – xã hội trên phạm vi cả nước.

**Thách thức**
- Mô hình kế hoạch hóa tập trung – bao cấp bộc lộ hạn chế.
- Khan hiếm hàng hóa, lạm phát cao.
- Hội nghị Trung ương 6 (1979) chỉ ra sai lầm, yêu cầu đổi mới tư duy quản lý.

---

### 3) 1986–1995 · Khởi xướng Đổi mới, định hình KTTT định hướng XHCN — Tiến độ: 100%
**Dấu mốc**  
Đại hội VI (1986) khởi xướng Đổi mới.

**Thành tựu**
- Thừa nhận kinh tế nhiều thành phần, vận hành theo cơ chế thị trường định hướng XHCN.
- Bước ngoặt thoát khủng hoảng, phục hồi tăng trưởng.

**Thách thức**
- Giai đoạn đầu Đổi mới phải xử lý lạm phát, thiếu vốn, năng suất thấp.

---

### 4) 1995–2007 · Hội nhập khu vực → toàn cầu — Tiến độ: 100%
**Dấu mốc**
- Gia nhập ASEAN (28/7/1995).
- Trở thành thành viên WTO (11/1/2007).

**Thành tựu**
- Bước nhảy về thể chế và thị trường; FDI bùng nổ (đăng ký 64 tỷ USD năm 2008 – mức kỷ lục thời điểm đó).

**Thách thức**
- Áp lực cải cách thể chế, nâng cao năng lực cạnh tranh doanh nghiệp nội địa, tuân thủ chuẩn mực WTO/FTA.

---

### 5) 2008–2020 · Hội nhập sâu, hiện đại hóa nền tảng — Tiến độ: 100% (chỉ số tham chiếu đến 2022)
**Thành tựu**
- Phủ điện rộng khắp: đến cuối 2022, 100% xã có điện, 99,7% hộ dân sử dụng điện (nông thôn 99,53%).
- Mạng lưới FTA mở rộng nhanh (ASEAN, ASEAN+ đến CPTPP, EVFTA), đa dạng hóa thị trường và chuỗi cung ứng.

**Thách thức**
- Năng suất lao động và chất lượng nguồn nhân lực là điểm nghẽn dài hạn, cần cải cách liên tục.

---

### 6) 2021–nay · Tăng tốc chuyển đổi số – xanh, củng cố các cân đối lớn — Tiến độ: khoảng 60%
**Chỉ số (tham chiếu nội dung cung cấp)**
- Tăng trưởng và thương mại: GDP 2023 đạt 5,05%; tổng xuất nhập khẩu 2024 đạt 786,29 tỷ USD.
- Cán cân thương mại: xuất siêu 2023 khoảng 28 tỷ USD.
- An sinh – y tế: tỷ lệ tham gia BHYT 2023 đạt 93,35%; cuối 2024 khoảng 94,29%.
- Năng suất lao động 2023: 199,3 triệu đồng/lao động (giá hiện hành).
- Cam kết xanh: Net Zero 2050; triển khai chiến lược, quy hoạch chuyển dịch năng lượng.

**Thách thức trọng yếu**
- Già hóa dân số nhanh: tỷ lệ 60+ khoảng 13,9% (2023) gây áp lực lên bảo hiểm xã hội, y tế và năng suất.
- Rủi ro khí hậu và nước biển dâng: kịch bản mực nước biển tăng 1m có thể làm ngập khoảng 39% diện tích Đồng bằng sông Cửu Long (ước tính kịch bản).
- Năng suất và năng lực cạnh tranh còn thấp so với nhóm nước công nghiệp mới; cần nâng cấp thể chế, nhân lực, hạ tầng theo ba đột phá chiến lược (Văn kiện Đại hội XIII).

**Trọng tâm tiếp theo (định hướng thực thi)**
- Nâng năng suất TFP và chuyển dịch cơ cấu dựa trên công nghệ và đổi mới sáng tạo.  
- Hoàn thiện thị trường các yếu tố (đất đai, vốn, lao động, khoa học và công nghệ).  
- Đầu tư hạ tầng số và năng lượng sạch, thúc đẩy tài chính xanh.  
- Nâng cao kỹ năng lực lượng lao động, thích ứng với già hóa dân số.  
- Tăng cường khả năng chống chịu khí hậu (Đồng bằng sông Cửu Long, ven biển).

            `,
            english: `
            # VIETNAM’S TRANSITION TO SOCIALISM — PROGRESS-STYLE SUMMARY

---

## Progress Overview

| Period | Focus | Status | Notes |
|---|---|---|---|
| **1954–1975** | The North builds socialism; nationwide resistance for reunification | Completed | Officially marked the start of the transition in the North (3rd Party Congress, 1960). |
| **1975–1986** | Post-reunification, pre-Đổi Mới | Completed | End-period economic crisis laid the groundwork for reform. |
| **1986–1995** | Launch of Đổi Mới; shaping a socialist-oriented market economy | Completed | Institutional turning point; initial exit from crisis. |
| **1995–2007** | Regional → global integration | Completed | ASEAN (1995), WTO (2007), FDI surge (2008). |
| **2008–2020** | Deep integration, modernization of foundations | Largely completed | Infrastructure & FTAs expanded; productivity remains a bottleneck. |
| **2021–present** | Digital–green transition; strengthening macro balances | In progress | Advancing three strategic breakthroughs; Net Zero 2050 commitment. |

---

## Detailed Roadmap

### 1) 1954–1975 · The North builds socialism; nationwide resistance for reunification — Progress: 100%
**Milestone**  
3rd Party Congress (1960): “Build socialism in the North; struggle to liberate the South.”

**Achievements**
- Formally identified the start of the socialist transition in the North.

**Challenges**
- Intense war, dispersed resources.
- Heavy centralized subsidized management, leading to postwar difficulties.

---

### 2) 1975–1986 · Post-reunification, pre-Đổi Mới — Progress: 100%
**Achievements**
- National reunification; initial recovery of production.
- Reorganization of the nationwide economic and social management apparatus.

**Challenges**
- Limits of the centralized planned–subsidy model became evident.
- Goods shortages, high inflation.
- 6th Central Committee Plenum (1979) identified errors and called for renewed management thinking.

---

### 3) 1986–1995 · Launch of Đổi Mới; shaping a socialist-oriented market economy — Progress: 100%
**Milestone**  
6th Party Congress (1986) launched Đổi Mới.

**Achievements**
- Recognized a multi-sector economy operating under a socialist-oriented market mechanism.
- Turning point out of crisis; growth recovered.

**Challenges**
- Early reform years had to address inflation, capital shortages, and low productivity.

---

### 4) 1995–2007 · Regional → global integration — Progress: 100%
**Milestones**
- Joined ASEAN (July 28, 1995).
- Became a WTO member (January 11, 2007).

**Achievements**
- Leap in institutions and markets; FDI surged (registered USD 64 billion in 2008 — a record at the time).

**Challenges**
- Pressure to reform institutions, raise domestic firms’ competitiveness, and comply with WTO/FTA standards.

---

### 5) 2008–2020 · Deep integration, modernization of foundations — Progress: 100% (benchmarks through 2022)
**Achievements**
- Universal electrification: by end-2022, 100% of communes electrified; 99.7% of households using electricity (rural 99.53%).
- FTA network expanded rapidly (ASEAN, ASEAN+ to CPTPP, EVFTA), diversifying markets and supply chains.

**Challenges**
- Labor productivity and human-capital quality remain long-term bottlenecks, requiring continuous reforms.

---

### 6) 2021–present · Accelerating the digital–green transition; strengthening major balances — Progress: ~60%
**Indicators (from provided content)**
- Growth & trade: GDP 2023 at 5.05%; total exports–imports 2024 at USD 786.29 billion.
- Trade balance: 2023 trade surplus around USD 28 billion.
- Social protection & health: health insurance coverage 93.35% (2023); ~94.29% by end-2024.
- Labor productivity 2023: VND 199.3 million per worker (current prices).
- Green commitment: Net Zero 2050; strategies and plans for the energy transition under implementation.

**Key challenges**
- Rapid population aging: age 60+ ~13.9% (2023) → pressure on social and health insurance, and on productivity.
- Climate risks and sea-level rise: a +1m scenario could inundate ~39% of the Mekong Delta (scenario estimate).
- Productivity and competitiveness remain below newly industrialized economies; need to upgrade institutions, human capital, and infrastructure per the three strategic breakthroughs (13th Party Congress documents).

**Next priorities (implementation orientation)**
- Raise TFP and drive structural transformation through technology and innovation.  
- Complete factor markets (land, capital, labor, science & technology).  
- Invest in digital infrastructure and clean energy; promote green finance.  
- Upgrade workforce skills; adapt to population aging.  
- Strengthen climate resilience (Mekong Delta and coastal areas).  

      `,
        },
        excerpt: {
            vietnamese:
                'Tiến trình quá độ lên CNXH của Việt Nam đi từ xây dựng ở miền Bắc và thống nhất (1954–1986), qua Đổi mới định hình kinh tế thị trường định hướng XHCN và hội nhập sâu rộng (1986–2020), đến chuyển đổi số–xanh hiện nay, đạt bước tiến về thể chế, tăng trưởng và hạ tầng nhưng vẫn đối mặt thách thức về năng suất, già hóa dân số và rủi ro khí hậu.',
            english:
                'Vietnam’s transition to socialism progressed from building in the North and reunification (1954–1986), through',
        },
        author: 'Admin',
        date: '2025-09-17',
        readTime: {
            vietnamese: '20 phút',
            english: '20 minutes',
        },
        image: '/assets/blog-images/challenges.jpg',
        originalLanguage: 'vietnamese' as const,
        quiz: {
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
                {
                    question:
                        'Theo bài học, thành tựu về điện khí hóa ở Việt Nam đến cuối 2022 như thế nào?',
                    options: [
                        '90% xã có điện, 85% hộ dân sử dụng điện',
                        '100% xã có điện, 99,7% hộ dân sử dụng điện (nông thôn 99,53%)',
                        '95% xã có điện, 90% hộ dân sử dụng điện',
                        'Chưa đạt mục tiêu điện khí hóa',
                    ],
                    correct: 1,
                    explanation:
                        'Đến cuối 2022, Việt Nam đã đạt 100% xã có điện và 99,7% hộ dân sử dụng điện, trong đó nông thôn đạt 99,53%.',
                },
                {
                    question:
                        'Thách thức chính của Việt Nam trong giai đoạn 2021-nay về dân số là gì?',
                    options: [
                        'Tăng trưởng dân số quá nhanh',
                        'Già hóa dân số nhanh với 60+ chiếm ~13,9% (2023)',
                        'Giảm dân số đột ngột',
                        'Dân số quá ít so với nhu cầu phát triển',
                    ],
                    correct: 1,
                    explanation:
                        'Thách thức chính là già hóa dân số nhanh với người từ 60 tuổi chiếm ~13,9% (2023), tạo áp lực lên BHXH, BHYT và năng suất lao động.',
                },
                {
                    question:
                        'Theo kịch bản rủi ro khí hậu được nêu, nếu mực nước biển dâng +1m sẽ ảnh hưởng như thế nào đến Việt Nam?',
                    options: [
                        'Ngập khoảng 20% đồng bằng sông Cửu Long',
                        'Ngập khoảng 39% đồng bằng sông Cửu Long',
                        'Chỉ ảnh hưởng đến các thành phố ven biển',
                        'Không có tác động đáng kể',
                    ],
                    correct: 1,
                    explanation:
                        'Theo kịch bản mực nước biển +1m, có thể ngập khoảng 39% đồng bằng sông Cửu Long, đây là thách thức lớn về khí hậu.',
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
                {
                    question:
                        "According to the lesson, what was Vietnam's electrification achievement by end-2022?",
                    options: [
                        '90% of communes have electricity, 85% of households use electricity',
                        '100% of communes have electricity, 99.7% of households use electricity (rural 99.53%)',
                        '95% of communes have electricity, 90% of households use electricity',
                        'Electrification targets not yet met',
                    ],
                    correct: 1,
                    explanation:
                        'By end-2022, Vietnam achieved 100% of communes having electricity and 99.7% of households using electricity, with rural areas at 99.53%.',
                },
                {
                    question:
                        "What is Vietnam's main demographic challenge in the 2021-present period?",
                    options: [
                        'Population growth too rapid',
                        'Rapid population aging with 60+ accounting for ~13.9% (2023)',
                        'Sudden population decline',
                        'Population too small for development needs',
                    ],
                    correct: 1,
                    explanation:
                        'The main challenge is rapid population aging with people 60+ accounting for ~13.9% (2023), creating pressure on social insurance, health insurance, and labor productivity.',
                },
                {
                    question:
                        'According to the climate risk scenario mentioned, how would a +1m sea level rise affect Vietnam?',
                    options: [
                        'Inundate about 20% of the Mekong Delta',
                        'Inundate about 39% of the Mekong Delta',
                        'Only affect coastal cities',
                        'No significant impact',
                    ],
                    correct: 1,
                    explanation:
                        'Under a +1m sea level rise scenario, approximately 39% of the Mekong Delta could be inundated, representing a major climate challenge.',
                },
            ],
        },
    },
    5: {
        id: 5,
        section: '4.1.5' as SectionId,
        title: {
            vietnamese:
                'Liên hệ thực tiễn tại VN: Giảm nghèo đa chiều, Chuyển đổi số dịch vụ công, Năng lượng tái tạo & tăng trưởng xanh',
            english:
                'Practical Application in Vietnam: Multidimensional Poverty Reduction, Digital Transformation of Public Services, Renewable Energy & Green Growth',
        },
        content: {
            vietnamese: `
# Báo cáo chuyên đề — 3 Case ưu tiên

## Case 1 — Giảm nghèo đa chiều

### Bối cảnh / Chính sách
- **Chương trình MTQG Giảm nghèo bền vững 2021–2025** — *QĐ 90/QĐ-TTg, 18/01/2022*.
- Bổ trợ vùng yếu thế: **Chương trình MTQG vùng DTTS & miền núi 2021–2030** — *QĐ 1719/QĐ-TTg*.

### Kết quả chính thức
- **2023**:
  - Tỷ lệ **hộ nghèo đa chiều**: **2,93%** *(giảm so với 2022)*.
  - **Huyện nghèo**: ~**33%**.
  - **Dân tộc thiểu số**: ~**17,82%**.
- *(Dẫn chiếu: MTTQ / Văn phòng QG về giảm nghèo xác nhận mức 2,93%.)*

### Thách thức / Bài học
- **Khoảng cách vùng nghèo còn cao** → cần:
  - Chính sách **mục tiêu theo địa bàn/nhóm**,
  - **Lồng ghép** chương trình,
  - Theo dõi **đo lường đa chiều** sát thực tế.

---

## Case 2 — Chuyển đổi số dịch vụ công (Đề án 06, VNeID)

### Bối cảnh / Chính sách
- **Đề án 06/QĐ-TTg (06/01/2022)**: dữ liệu dân cư, định danh & xác thực điện tử.
- **Nghị định 69/2024/NĐ-CP**: định danh điện tử.

### Kết quả chính thức
- **6T/2024**:
  - Tỷ lệ **số hóa kết quả**: **Bộ/ngành 46,36%**, **địa phương 58,12%**.
  - Tỷ lệ **hồ sơ trực tuyến**: **Bộ/ngành 46,16%**, **địa phương 51,55%**.
- **Cổng DVCQG (2024)**:
  - **16,4 triệu tài khoản**,
  - **43/53** dịch vụ thiết yếu của Đề án 06 đã cung cấp.
- **VNeID**:
  - Đăng nhập DVCQG bằng **VNeID**,
  - **Thí điểm làm thủ tục bay** bằng **VNeID & sinh trắc học** từ **15/09/2025**.

### Thách thức / Bài học
- Tiếp tục **liên thông dữ liệu**, **bảo vệ dữ liệu cá nhân**, trải nghiệm **“không giấy”**.
- **Thống nhất đăng nhập một tài khoản VNeID** cho dịch vụ công.
- **Bộ chỉ số phục vụ** người dân/DN trên DVCQG cho thấy **chênh lệch địa phương** → cần **chuẩn hóa & chia sẻ nền tảng**.

---

## Case 3 — Năng lượng tái tạo & tăng trưởng xanh

### Bối cảnh / Chính sách
- **Quy hoạch điện VIII** — *QĐ 500/QĐ-TTg, 15/05/2023* và **điều chỉnh năm 2025**:
  - **Ưu tiên NLTT**, bảo đảm **an ninh năng lượng**.

### Kết quả chính thức
- **Cuối 2023**: tổng **công suất nguồn điện đã COD** ~ **80.555 MW** *(EVN)*.
- **Dự án NLTT chuyển tiếp** *(đến 31/12/2024)*:
  - **29 dự án**, **1.577,65 MW COD**,
  - Phát lên lưới ~ **4,66 tỷ kWh**.
- **7T/2023**: **NLTT** (gió, mặt trời, …) chiếm ~ **13,8%** sản lượng điện sản xuất toàn hệ thống *(MOIT)*.

### Thách thức / Bài học
- **Quá tải lưới/điều độ**; **cơ chế giá** cho dự án chuyển tiếp → cần:
  - **Đồng bộ hóa truyền tải**,
  - **Thị trường điện** & **tín hiệu đầu tư** ổn định theo Quy hoạch điện VIII (và bản điều chỉnh).

---

## Phụ lục chỉ số nhanh (tổng hợp)
| Chủ đề | Chỉ số | Mốc thời gian |
|---|---|---|
| Nghèo đa chiều | 2,93% hộ nghèo; huyện nghèo ~33%; DTTS ~17,82% | 2023 |
| Số hóa kết quả (Bộ/ngành) | 46,36% | 6T/2024 |
| Số hóa kết quả (Địa phương) | 58,12% | 6T/2024 |
| Hồ sơ trực tuyến (Bộ/ngành) | 46,16% | 6T/2024 |
| Hồ sơ trực tuyến (Địa phương) | 51,55% | 6T/2024 |
| Tài khoản DVCQG | 16,4 triệu | 2024 |
| Dịch vụ thiết yếu Đề án 06 đã cung cấp | 43/53 | 2024 |
| Thí điểm thủ tục bay bằng VNeID & sinh trắc | Bắt đầu 15/09/2025 | 2025 |
| Công suất nguồn điện COD | ~80.555 MW | Cuối 2023 |
| NLTT chuyển tiếp COD | 1.577,65 MW; ~4,66 tỷ kWh | Đến 31/12/2024 |
| Tỷ trọng NLTT trong sản lượng điện | ~13,8% | 7T/2023 |
            `,
            english: `
           # Thematic Report — 3 Priority Cases

## Case 1 — Multidimensional Poverty Reduction

### Context / Policy
- **National Target Program (NTP) on Sustainable Poverty Reduction 2021–2025** — *Decision No. 90/QD-TTg, 18/01/2022*.
- Support for disadvantaged regions: **NTP for Ethnic Minorities & Mountainous Areas 2021–2030** — *Decision No. 1719/QD-TTg*.

### Official Results
- **2023**:
  - **Multidimensional poverty rate**: **2.93%** *(down from 2022)*.
  - **Poor districts**: ~**33%**.
  - **Ethnic minorities**: ~**17.82%**.
- *(Reference: VFF / National Office for Poverty Reduction confirms the 2.93% figure.)*

### Challenges / Lessons
- **Large regional disparities** remain → need:
  - **Targeted, location/group-specific policies**,
  - **Program convergence**,
  - **Realistic multidimensional measurement & monitoring**.

---

## Case 2 — Digital Transformation of Public Services (Project 06, VNeID)

### Context / Policy
- **Decision No. 06/QD-TTg (06/01/2022)**: national population data, e-identification & e-authentication.
- **Decree No. 69/2024/ND-CP**: electronic identification.

### Official Results
- **H1/2024**:
  - **Result digitization rate**: **Ministries/agencies 46.36%**, **localities 58.12%**.
  - **Online application rate**: **Ministries/agencies 46.16%**, **localities 51.55%**.
- **National Public Service Portal (2024)**:
  - **16.4 million accounts**,
  - **43/53** essential services under Project 06 provided.
- **VNeID**:
  - Sign in to the National Public Service Portal with **VNeID**,
  - **Pilot air-travel procedures** via **VNeID & biometrics** from **15/09/2025**.

### Challenges / Lessons
- Continue **data interoperability**, **personal data protection**, and **“paperless” experiences**.
- **Single VNeID login** for public services.
- **Citizen/enterprise service index** on the national portal shows **inter-provincial gaps** → require **platform standardization & sharing**.

---

## Case 3 — Renewable Energy & Green Growth

### Context / Policy
- **Power Development Plan VIII (PDP8)** — *Decision No. 500/QD-TTg, 15/05/2023* and **2025 adjustment**:
  - Prioritize **renewables**, ensure **energy security**.

### Official Results
- **End-2023**: total **installed (COD) capacity** ~ **80,555 MW** *(EVN)*.
- **Transitional renewable projects** *(by 31/12/2024)*:
  - **29 projects**, **1,577.65 MW COD**,
  - ~**4.66 billion kWh** delivered to the grid.
- **Jan–Jul 2023**: **Renewables** (wind, solar, …) accounted for ~**13.8%** of total electricity output *(MOIT)*.

### Challenges / Lessons
- **Grid congestion/dispatching**; **pricing mechanism** for transitional projects → need:
  - **Synchronous transmission upgrades**,
  - **Power market mechanisms** & **stable investment signals** aligned with PDP8 (and its adjustment).

---

## Quick Indicators (summary)
| Topic | Indicator | Timeframe |
|---|---|---|
| Multidimensional poverty | 2.93% of households; poor districts ~33%; ethnic minorities ~17.82% | 2023 |
| Result digitization (ministries/agencies) | 46.36% | H1 2024 |
| Result digitization (localities) | 58.12% | H1 2024 |
| Online applications (ministries/agencies) | 46.16% | H1 2024 |
| Online applications (localities) | 51.55% | H1 2024 |
| National Public Service Portal accounts | 16.4 million | 2024 |
| Essential services under Project 06 provided | 43/53 | 2024 |
| Pilot air-travel with VNeID & biometrics | Start: 15/09/2025 | 2025 |
| Installed power capacity (COD) | ~80,555 MW | End-2023 |
| Transitional renewables (COD) | 1,577.65 MW; ~4.66 billion kWh | By 31/12/2024 |
| Renewables’ share of total electricity | ~13.8% | Jan–Jul 2023 |
      `,
        },
        excerpt: {
            vietnamese:
                'Thời kỳ quá độ lên CNXH gồm hai hình thức (trực tiếp ở nước TBCN phát triển, gián tiếp ở nước bỏ qua TBCN) với các bước giành chính quyền – cải tạo kinh tế, xã hội và xây dựng cơ sở vật chất để hoàn thành quá độ; ở Việt Nam, quá trình đặc thù bỏ qua TBCN và từ Đổi mới 1986 chuyển sang kinh tế thị trường định hướng XHCN nhằm phát triển lực lượng sản xuất, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế.',
            english:
                'The transitional period to socialism includes two forms (direct in developed capitalist countries, indirect in countries bypassing capitalism) with stages of seizing power – economic and social transformation, and building the material base to complete the transition; in Vietnam, the distinctive process bypasses capitalism and since Đổi Mới 198',
        },
        author: 'Admin',
        date: '2025-09-17',
        readTime: {
            vietnamese: '20 phút',
            english: '20 minutes',
        },
        image: '/assets/blog-images/practical.jpg',
        originalLanguage: 'vietnamese' as const,
        quiz: {
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
                {
                    question:
                        'Tính đến 6 tháng đầu năm 2024, tỷ lệ số hóa kết quả ở địa phương đạt bao nhiêu?',
                    options: ['46,36%', '58,12%', '51,55%', '46,16%'],
                    correct: 1,
                    explanation:
                        'Tính đến 6 tháng đầu năm 2024, tỷ lệ số hóa kết quả ở địa phương đạt 58,12%, cao hơn so với Bộ/ngành (46,36%).',
                },
                {
                    question:
                        'VNeID bắt đầu thí điểm làm thủ tục bay bằng sinh trắc học từ ngày nào?',
                    options: [
                        '15/08/2025',
                        '15/09/2025',
                        '01/09/2025',
                        '30/09/2025',
                    ],
                    correct: 1,
                    explanation:
                        'VNeID bắt đầu thí điểm làm thủ tục bay bằng VNeID và sinh trắc học từ ngày 15/09/2025.',
                },
                {
                    question:
                        'Theo số liệu 7 tháng đầu năm 2023, năng lượng tái tạo chiếm tỷ trọng bao nhiêu trong sản lượng điện toàn hệ thống?',
                    options: ['10,5%', '13,8%', '15,2%', '12,1%'],
                    correct: 1,
                    explanation:
                        'Theo MOIT, trong 7 tháng đầu năm 2023, năng lượng tái tạo (gió, mặt trời...) chiếm khoảng 13,8% sản lượng điện sản xuất toàn hệ thống.',
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
                {
                    question:
                        'As of the first half of 2024, what was the result digitization rate at the local level?',
                    options: ['46.36%', '58.12%', '51.55%', '46.16%'],
                    correct: 1,
                    explanation:
                        'As of the first half of 2024, the result digitization rate at localities reached 58.12%, higher than at ministries/agencies (46.36%).',
                },
                {
                    question:
                        'When did VNeID start piloting biometric air travel procedures?',
                    options: [
                        'August 15, 2025',
                        'September 15, 2025',
                        'September 1, 2025',
                        'September 30, 2025',
                    ],
                    correct: 1,
                    explanation:
                        'VNeID started piloting air travel procedures using VNeID and biometrics from September 15, 2025.',
                },
                {
                    question:
                        'According to data from the first 7 months of 2023, what percentage of total electricity output did renewable energy account for?',
                    options: ['10.5%', '13.8%', '15.2%', '12.1%'],
                    correct: 1,
                    explanation:
                        'According to MOIT, in the first 7 months of 2023, renewable energy (wind, solar, etc.) accounted for approximately 13.8% of total electricity production.',
                },
            ],
        },
    },
} as const

export type BlogData = typeof blogData
export type BlogId = keyof BlogData
export type Language = 'vietnamese' | 'english'
