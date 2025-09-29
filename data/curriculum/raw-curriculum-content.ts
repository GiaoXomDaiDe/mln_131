/**
 * File chứa nội dung giáo trình thô từ PDF
 * Được sử dụng để training chatbot AI và trả lời câu hỏi
 */

export interface CurriculumSection {
    id: string
    title: string
    content: string
    keywords: string[]
    chapter: string
    section: string
}

export interface CurriculumChapter {
    id: string
    title: string
    description: string
    sections: CurriculumSection[]
}

// ==================================================
// 📚 NỘI DUNG GIÁO TRÌNH CHỦ NGHĨA XÃ HỘI KHOA HỌC
// ==================================================
// Vui lòng thêm nội dung từ PDF vào đây theo cấu trúc bên dưới

export const RAW_CURRICULUM_CONTENT: CurriculumChapter[] = [
    {
        id: 'chapter_4',
        title: 'CHƯƠNG 4: DÂN CHỦ VÀ DÂN CHỦ XÃ HỘI CHỦ NGHĨA',
        description:
            'Nội dung về dân chủ và dân chủ xã hội chủ nghĩa trong quá trình xây dựng CNXH',
        sections: [
            {
                id: '4.1.1',
                title: 'KHÁI NIỆM VỀ CHỦ NGHĨA XÃ HỘI VÀ QUÁ ĐỘ',
                content: `
                    *CHỦ NGHĨA XÃ HỘI LÀ GÌ?
Là một hệ tư tưởng và phong trào chính trị nhằm xây dựng một xã hội mà ở đó mọi người đều bình đẳng về kinh tế và xã hội. Trong đó, tài sản tư nhân được hạn chế hoặc loại bỏ, và các phương tiện sản xuất được sở hữu chung bởi cộng đồng. 
Chủ nghĩa xa hội được tiếp cận theo 4 nghĩa sau:
Là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động chống các giai cấp thống trị.
Là trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng nhân dân lao động khỏi áp bức, bóc lột, bất công
Là một khoa học - Chủ nghĩa xã hội khoa học, khoa học về sứ mệnh lịch sử của giai cấp công nhân
Là một chế độ xã hội hiện thực tốt đẹp, giai đoạn đầu của hình thành kinh tế - xã hội.
*ĐẶC TRƯNG BẢN CHẤT CỦA CNXH:
Giải phóng giai cấp, dân tộc, xã hội, con người, tạo điều kiện để con người phát triển toàn diện.
Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.
Có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.
Có chế độ xã hội do nhân dân lao động làm chủ
Có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hoa văn hóa nhân loại.
Bảo đảm bình đẳng, đoàn kết giữa các dân tộc và có quan hệ hữu nghị, hợp tác với nhân dân các nước trên thế giới.
*THỜI KÌ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI LÀ GÌ?
Là thời kì cải biến cách mạng sâu sắc, toàn diện trên các lĩnh vực của đời sống xã hội. Đây là thời kì đấu tranh quyết liệt giữa những nhân tố của xã hội mới và tàn dư của xã hội cũ để tạo ra những tiền đề vật chất và tinh thân cần thiết để CNXH ra đời và phát triển.
*VÌ SAO GỌI LÀ “QUÁ ĐỘ”?
Và nó được gọi là “quá độ” để nhấn mạnh một trạng thái xã hội không ổn định mà trong đó, quá trình chuyển biến diễn ra liên tục với các lí do sau:
Tính chất hỗn hợp: Do xã hội trong thời kì quá độ không phải là một XHCN hoàn chỉnh mà tồn tại đan xen nhiều tàn dư của xã hội cũ và yếu tố mới của XHCN đang hình thành.
Mâu thuẫn và đấu tranh: Đây là giai đoạn diễn ra cuộc đấu tranh gay gắt, phức tạp giữa cái cũ và mới, giữa TBCN và XHCN
Nhiệm vụ chưa hoàn thành: Mục tiêu cuối cùng của CNXH chưa thể đạt được ngay mà cần một khoảng thời gian đủ dài để cải tạo xã hội cũ, xây dựng cơ sở hạ tầng kinh tế - xã hội mới, và phát triển lực lượng sản xuất ở mức độ cao.
Sự khác biệt về trình độ: Các quốc gia đi lên CNXH từ các trình độ phát triển khác nhau

                `,
                keywords: [
                    'chủ nghĩa xã hội',
                    'quá độ',
                    'khái niệm',
                    'định nghĩa',
                ],
                chapter: '4',
                section: '4.1.1',
            },
            {
                id: '4.1.2',
                title: 'ĐẶC ĐIỂM THỜI KỲ QUÁ ĐỘ / VIỆT NAM KHÁC NHƯ THẾ NÀO',
                content: `
                    *ĐẶC ĐIỂM THỜI KÌ QUÁ ĐỘ LÊN XHCN?
Trên lĩnh vực kinh tế: 
Thời kì quá độ tồn tại một nền kinh tế đa thành phần trong một hệ thống kinh tế quốc dân thống nhất: kinh tế gia trưởng, kinh tế hàng hóa nhỏ, kinh tế tư bản, kinh tế tư bản nhà nước, kinh tế XHCN. Đây là bước quá độ trung gian tất yếu trong quá trình xây dựng CNXH vì không thể dùng ý chí để xóa bỏ ngay kết cấu nhiều thành phần của nền kinh tế, nhất là những nước còn chưa trải qua TBCN.
Trên lĩnh vực chính trị: 
Sự thống trị của giai cấp vô sản: Quyền lực nhà nước thuộc về giai cấp công nhân và nhân dân lao động, nhằm xây dựng nền dân chủ XHCN (xã hội không giai cấp) và trấn áp các thế lực thù địch.
Trên lĩnh vực xã hội:
Tồn tại nhiều giai cấp, tầng lớp vừa hợp tác, vừa đấu tranh với nhau
Trên lĩnh vực tư tưởng - văn hóa:
Xã hội vẫn tồn tại đan xen giữa các tư tưởng cũ và mới: Bên cạnh hệ tư tưởng Mác - Lenin giữ vai trò chủ đạo, thì các tư tưởng tiểu tư sản, tư tưởng phong kiến và các tư tưởng phản động khác vẫn còn tồn tại.
Xây dựng văn hóa vô sản mới, tiếp thu giá trị dân tộc và tinh hoa văn hóa nhân loại nhằm đáp ứng nhu cầu văn hóa - tinh thần ngày càng tăng của nhân dân.
*SỰ KHÁC BIỆT CỦA VIỆT NAM?
Đặc điểm cơ bản của quá độ lên CNXH ở nước ta là bỏ qua chế độ TBCN
Xuất phát điểm thấp: Việt Nam là một nước nông nghiệp lạc hậu, chịu hậu quả nặng nề từ chiến tranh. Mặt khác, cuộc cách mạng khoa học và công nghệ hiện đại đang diễn ra mạnh mẽ, cuốn hút tất các nước ở mức độ khác nhau -> Tạo thời cơ phát triển đất nước và đặt ra những thách thức gay gắt
Dù chế độ XHCN ở Liên Xô và Đông Âu sụp đổ, nhưng thời đại ngày nay vẫn là thời đại quá độ từ CNTB lên XHCN. Các nước cùng nhau tồn tại, cạnh tranh gay gắt vì lợi ích quốc gia. Cuộc đấu tranh của các nước tuy khó khăn nhưng song theo quy luật tiến hóa lịch sử, loại người sẽ tiến tới CNXH. Qúa độ lên CNXH phản ánh quy luật phát triển khách quan của cách mạng Việt Nam -> Sự lựa chọn dứt khoát của Đảng nhằm đáp ứng nguyện vọng dân tộc
Con đường đi lên XHCN đặc thù: Đảng Cộng sản Việt Nam đã xác định xây dựng nền kinh tế thị trường định hướng XHCN -> Đây là một bước phát triển lý luận và thực tiễn, thừa nhận vai trò của kinh tế thị trường để phát triển lực lượng sản xuất, nhưng vẫn đảm bảo định hướng xã hội chủ nghĩa thông qua sự quản lý của nhà nước và mục tiêu công bằng xã hội.

                `,
                keywords: [
                    'thời kỳ quá độ',
                    'đặc điểm',
                    'việt nam',
                    'khác biệt',
                ],
                chapter: '4',
                section: '4.1.2',
            },
            {
                id: '4.1.3',
                title: 'CÁC GIAI ĐOẠN QUÁ ĐỘ Ở VIỆT NAM/THẾ GIỚI',
                content: `
                    *HAI HÌNH THỨC QUÁ ĐỘ CHÍNH THEO MÁC - LÊNIN
Qúa độ trực tiếp:
Từ các TBCN phát triển tiến hành trực tiếp lên CNXH
Điều kiện thuận lợi: đã có cơ sở vật chất, kĩ thuật và xã hội phát triển của TBCN
Qúa độ gián tiếp:
Từ những nước chưa trải qua giai đoạn phát triển TBCN để lên CNXH
Không bỏ qua thành tựu khoa học, công nghệ mà TBCN đạt được, mà kế thừa để phát triển nhanh lực lượng sản xuất
*GIAI ĐOẠN QUÁ ĐỘ LÊN XHCN TRÊN THẾ GIỚI
Giành chính quyền: Giai cấp vô sản, dưới sự lãnh đạo của Đảng Cộng sản, tiến hành cách mạng để lật đổ chính quyền của giai cấp tư sản và thiết lập nền chuyên chính vô sản. Đây là giai đoạn chuyển đổi chính trị căn bản nhất.
Cải tạo và xây dựng:
Cải tạo kinh tế: Xóa bỏ sở hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất và thiết lập chế độ công hữu (sở hữu toàn dân và sở hữu tập thể).
Xây dựng cơ sở vật chất: Thực hiện công nghiệp hóa, hiện đại hóa để xây dựng cơ sở vật chất - kỹ thuật cho XHCN.
Cải tạo xã hội: Từng bước xóa bỏ các tàn dư của xã hội cũ, xây dựng các quan hệ xã hội mới.
Hoàn thành quá độ: Khi các mục tiêu trên được hoàn thành, xã hội sẽ chuyển sang giai đoạn phát triển cao hơn của CNXH, chuẩn bị cho việc tiến tới chủ nghĩa cộng sản.
*GIAI ĐOẠN QUÁ ĐỘ LÊN XHCN Ở VIỆT NAM
Quá trình quá độ ở Việt Nam mang tính chất đặc thù do bỏ qua chế độ TBCN. Nó có thể được chia thành hai giai đoạn lớn:
Giai đoạn trước Đổi mới (1954-1986):
Bối cảnh: Miền Bắc xây dựng CNXH trong điều kiện chiến tranh và áp dụng mô hình kinh tế kế hoạch hóa tập trung của Liên Xô.
Nhiệm vụ: Hoàn thành cách mạng dân tộc dân chủ nhân dân ở miền Nam, thống nhất đất nước và bước đầu xây dựng cơ sở vật chất kỹ thuật. Tuy nhiên, mô hình này đã bộc lộ nhiều hạn chế, dẫn đến khủng hoảng kinh tế.
Giai đoạn Đổi mới (từ 1986 đến nay):
Bước ngoặt: Đảng Cộng sản Việt Nam khởi xướng công cuộc Đổi mới, chuyển đổi từ kinh tế tập trung sang kinh tế thị trường định hướng XHCN.
Mục tiêu: Phát triển lực lượng sản xuất, đa dạng hóa các thành phần kinh tế, đồng thời giữ vững định hướng XHCN thông qua vai trò lãnh đạo của Đảng và quản lý của Nhà nước.
Nhiệm vụ trọng tâm: Tiếp tục công nghiệp hóa, hiện đại hóa, phát triển kinh tế tri thức và chủ động hội nhập quốc tế để xây dựng cơ sở vật chất cho CNXH.

                `,
                keywords: ['giai đoạn', 'quá độ', 'việt nam', 'thế giới'],
                chapter: '4',
                section: '4.1.3',
            },
            {
                id: '4.1.4',
                title: 'THÀNH TỰU VÀ THÁCH THỨC CỦA VIỆT NAM',
                content: `
                    Giai đoạn 1954 - 1975: Miền Bắc xây dựng CNXH, cả nước kháng chiến thống nhất: 
Thành tựu: Đảng xác định rõ nhiệm vụ “xây dựng CNXH ở miền Bắc, đấu tranh giải phóng miền Nam” (Đại hội III, 1960) – định vị chính thức giai đoạn bắt đầu quá độ ở miền Bắc
Thách thức: Chiến tranh ác liệt, nguồn lực bị phân tán; cơ chế quản lý tập trung bao cấp còn nặng nề (đặt nền cho những khó khăn hậu chiến).

Giai đoạn 1975–1986: Sau thống nhất, tiền Đổi mới
Thành tựu: Thống nhất đất nước, từng bước khôi phục sản xuất, cải tổ bộ máy quản lý kinh tế–xã hội trên phạm vi cả nước.
Thách thức: Kinh tế kế hoạch hoá tập trung–bao cấp bộc lộ hạn chế; khan hiếm hàng hoá, lạm phát rất cao; Trung ương 6 (1979) chỉ ra các sai lầm và yêu cầu đổi mới tư duy quản lý

Giai đoạn 1986–1995: Khởi xướng Đổi mới, định hình kinh tế thị trường định hướng XHCN 
Thành tựu: Đại hội VI (1986) khởi xướng Đổi mới: chấp nhận kinh tế nhiều thành phần, vận hành theo cơ chế thị trường định hướng XHCN – tạo bước ngoặt thoát khủng hoảng, phục hồi tăng trưởng.
Thách thức: Những năm đầu Đổi mới còn rất khó khăn, phải xử lý hệ quả lạm phát, thiếu vốn, năng suất thấp.

Giai đoạn 1995–2007: Hội nhập khu vực → toàn cầu 
Thành tựu: 
+ Gia nhập ASEAN (28/7/1995) – mở rộng “vành đai” hợp tác khu vực.
+ Trở thành thành viên WTO (11/1/2007) – bước nhảy về thể chế, 
thị trường; FDI bùng nổ (đăng ký 64 tỷ USD năm 2008 – mức kỷ lục 
thời điểm đó).
Thách thức: Áp lực cải cách thể chế, năng lực cạnh tranh doanh nghiệp nội địa, chuẩn mực WTO/FTA
Giai đoạn 2008–2020: Hội nhập sâu, hiện đại hoá nền tảng
Thành tựu: 
+ Phủ điện rộng khắp: đến cuối 2022, 100% xã có điện, 99,7% hộ dân sử dụng điện (nông thôn 99,53%) – nền tảng công bằng dịch vụ công, phát triển nông thôn.
+ Mạng lưới FTA do Bộ Công Thương chủ trì mở rộng nhanh (ASEAN, ASEAN+… đến CPTPP, EVFTA…), đa dạng thị trường và chuỗi cung ứng.
Thách thức: Năng suất lao động và chất lượng nguồn nhân lực còn là “điểm nghẽn” dài hạn, đòi hỏi tiếp tục cải cách.

Giai đoạn  2021–nay: Tăng tốc chuyển đổi số–xanh, củng cố các cân đối lớn
Thành tựu: 
+ Tăng trưởng & thương mại: Năm 2023, GDP tăng 5,05%; năm 2024 tổng kim ngạch XNK đạt 786,29 tỷ USD (phục hồi mạnh).
+ Cán cân thương mại: Năm 2023 xuất siêu ước 28 tỷ USD – kỷ lục 
thời điểm đó
+ An sinh – y tế: Đến 2023, 93,35% dân số tham gia BHYT; 
cuối 2024 khoảng 94,29%.
+ Năng suất lao động: 2023 đạt 199,3 triệu đồng/lao động 
(giá hiện hành).
+ Cam kết xanh: Tuyên bố Net Zero 2050 và ban hành các chiến lược, quy hoạch chuyển dịch năng lượng
Thách thức
+ Già hoá dân số nhanh: Tỷ lệ 60+ đạt ~13,9% (2023) – áp lực BHXH, BHYT, năng suất.
+ Rủi ro khí hậu – nước biển dâng: Theo kịch bản của cơ quan nhà nước, mực nước biển dâng 1m có thể làm ngập khoảng 39% diện tích ĐBSCL (kịch bản ước tính).
+ Năng suất & năng lực cạnh tranh: Năng suất còn thấp so với nhóm nước công nghiệp mới; yêu cầu nâng cấp thể chế, nhân lực, hạ tầng theo “3 đột phá chiến lược” của Văn kiện Đại hội XIII.

                `,
                keywords: ['thành tựu', 'thách thức', 'việt nam', 'phát triển'],
                chapter: '4',
                section: '4.1.4',
            },
            {
                id: '4.1.5',
                title: 'LIÊN HỆ THỰC TIỄN TẠI VIỆT NAM',
                content: `
                    Case 1: Giảm nghèo đa chiều
Bối cảnh/chính sách:
Phê duyệt Chương trình MTQG Giảm nghèo bền vững 2021–2025 (QĐ 90/QĐ-TTg, 18/01/2022).
Kết quả chính thức: 
Năm 2023: tỷ lệ hộ nghèo đa chiều 2,93%; tại các huyện nghèo ~33%; dân tộc thiểu số ~17,82% (đều giảm so với 2022).
Bổ trợ mục tiêu vùng yếu thế:
Chương trình MTQG vùng DTTS & miền núi 2021–2030 (QĐ 1719/QĐ-TTg).
Thách thức/Bài học:
Khoảng cách vùng nghèo còn cao → cần chính sách mục tiêu theo địa bàn/nhóm, lồng ghép chương trình và theo dõi đo lường đa chiều sát thực tế. (Dẫn chiếu thêm: MTTQ/ Văn phòng QG về giảm nghèo xác nhận mức 2,93%)

Case 2: Chuyển đổi số dịch vụ công (Đề án 06, VNeID)
Bối cảnh/chính sách:
Đề án 06/QĐ-TTg (06/01/2022) về dữ liệu dân cư, định danh & xác thực điện tử; Nghị định 69/2024/NĐ-CP về định danh điện tử. 
Kết quả chính thức: 
6T/2024: hồ sơ trực tuyến tăng mạnh; tỷ lệ số hoá kết quả: Bộ/ngành 46,36%, địa phương 58,12%; tỷ lệ hồ sơ trực tuyến: Bộ/ngành 46,16%, địa phương 51,55%. 
Cổng Dịch vụ công quốc gia: 16,4 triệu tài khoản, 43/53 dịch vụ thiết yếu của Đề án 06 đã cung cấp (2024).
Triển khai VNeID sâu hơn: đăng nhập DVCQG bằng VNeID; thí điểm làm thủ tục bay bằng VNeID & sinh trắc học từ 15/9/2025.
Thách thức/Bài học:
Cần tiếp tục liên thông dữ liệu – bảo vệ dữ liệu cá nhân – trải nghiệm “không giấy”, thống nhất đăng nhập một tài khoản VNeID cho dịch vụ công.
Bộ chỉ số phục vụ người dân, DN trên DVCQG cho thấy mức độ chênh lệch giữa các địa phương → cần chuẩn hóa & chia sẻ nền tảng

Case 3: Năng lượng tái tạo & tăng trưởng xanh
Bối cảnh/chính sách:
Quy hoạch điện VIII (QĐ 500/QĐ-TTg, 15/05/2023) và điều chỉnh năm 2025: ưu tiên NLTT, bảo đảm an ninh năng lượng
Kết quả chính thức: 
Cuối 2023: tổng công suất nguồn điện đã COD ~80.555 MW (EVN)
Dự án NLTT chuyển tiếp: đến 31/12/2024 đã có 29 dự án, 1.577,65 MW COD; phát lên lưới ~4,66 tỷ kWh. 
7T/2023: NLTT (điện gió, mặt trời…) chiếm ~13,8% sản lượng điện sản xuất toàn hệ thống (MOIT).
Thách thức/Bài học:
Quá tải lưới/điều độ – cơ chế giá cho dự án chuyển tiếp → cần đồng bộ hóa truyền tải, cơ chế thị trường điện & tín hiệu đầu tư ổn định theo Quy hoạch điện VIII (và bản điều chỉnh). 

                `,
                keywords: ['liên hệ', 'thực tiễn', 'việt nam', 'ứng dụng'],
                chapter: '4',
                section: '4.1.5',
            },
        ],
    },

    // 👇 BẠN CÓ THỂ THÊM CÁC CHƯƠNG KHÁC NẾU CẦN
    // {
    //     id: "chapter_1",
    //     title: "CHƯƠNG 1: ...",
    //     description: "...",
    //     sections: [...]
    // }
]

// ==================================================
// 🔍 UTILITY FUNCTIONS - Không cần chỉnh sửa
// ==================================================

/**
 * Tìm kiếm nội dung theo từ khóa
 */
export function searchCurriculumContent(query: string): CurriculumSection[] {
    const searchTerm = query.toLowerCase()
    const results: CurriculumSection[] = []

    RAW_CURRICULUM_CONTENT.forEach((chapter) => {
        chapter.sections.forEach((section) => {
            const contentMatch = section.content
                .toLowerCase()
                .includes(searchTerm)
            const titleMatch = section.title.toLowerCase().includes(searchTerm)
            const keywordMatch = section.keywords.some((keyword) =>
                keyword.toLowerCase().includes(searchTerm)
            )

            if (contentMatch || titleMatch || keywordMatch) {
                results.push(section)
            }
        })
    })

    return results
}

/**
 * Lấy tất cả từ khóa để training AI
 */
export function getAllKeywords(): string[] {
    const allKeywords: string[] = []

    RAW_CURRICULUM_CONTENT.forEach((chapter) => {
        chapter.sections.forEach((section) => {
            allKeywords.push(...section.keywords)
        })
    })

    return [...new Set(allKeywords)] // Loại bỏ trùng lặp
}

/**
 * Lấy nội dung theo section ID
 */
export function getContentById(sectionId: string): CurriculumSection | null {
    for (const chapter of RAW_CURRICULUM_CONTENT) {
        const section = chapter.sections.find((s) => s.id === sectionId)
        if (section) return section
    }
    return null
}

/**
 * Lấy toàn bộ nội dung để training AI
 */
export function getAllCurriculumText(): string {
    let fullText = ''

    RAW_CURRICULUM_CONTENT.forEach((chapter) => {
        fullText += `\n\n${chapter.title}\n${chapter.description}\n\n`

        chapter.sections.forEach((section) => {
            fullText += `${section.title}\n${section.content}\n\n`
        })
    })

    return fullText
}
