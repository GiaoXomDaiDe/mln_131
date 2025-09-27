/**
 * TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
 *
 * File này chứa kiến thức cơ bản về tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc
 * Được sử dụng để train AI chatbot với ngữ cảnh phù hợp.
 *
 * HƯỚNG DẪN THÊM DATA THÔ:
 * 1. Thêm nội dung vào phần KNOWLEDGE_BASE dưới đây
 * 2. Cập nhật KEYWORDS với từ khóa mới
 * 3. Thêm câu hỏi mẫu vào SAMPLE_QUESTIONS
 * 4. Cập nhật LEARNING_OBJECTIVES nếu cần
 */

// ========================================
// KIẾN THỨC CƠ BẢN VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
// ========================================
const KNOWLEDGE_BASE = {
    // Khái niệm cơ bản
    concepts: {
        daiDoanKet: `
            Đại đoàn kết toàn dân tộc là tư tưởng cốt lõi trong hệ thống tư tưởng Hồ Chí Minh, 
            thể hiện sự thống nhất của toàn dân tộc Việt Nam trong sự nghiệp giải phóng dân tộc, 
            xây dựng và bảo vệ Tổ quốc.
            
            Đại đoàn kết là sức mạnh vô địch của dân tộc, là nhân tố quyết định thắng lợi 
            của cách mạng Việt Nam.
        `,

        banChat: `
            Bản chất của đại đoàn kết toàn dân tộc theo Hồ Chí Minh:
            - Là sự thống nhất về mục tiêu: độc lập, tự do, hạnh phúc
            - Là sự thống nhất về ý chí và hành động
            - Là sự đoàn kết trên cơ sở lợi ích chung của dân tộc
            - Vượt lên trên sự khác biệt về giai cấp, tôn giáo, vùng miền
        `,

        nguonGoc: `
            Nguồn gốc tư tưởng đại đoàn kết:
            - Xuất phát từ truyền thống đoàn kết của dân tộc Việt Nam
            - Kế thừa tinh hoa văn hóa dân tộc: "Đoàn kết, đoàn kết, đại đoàn kết"
            - Vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện Việt Nam
            - Học hỏi kinh nghiệm quốc tế về đấu tranh giải phóng dân tộc
        `,
    },

    // Nội dung cụ thể
    content: {
        vaiTroChienLuoc: `
            a. Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng:
            
            Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài, nhất quán của cách mạng Việt Nam. Người nói rõ: "Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn".
            
            Đây là vấn đề mang tính sống còn của dân tộc Việt Nam nên chiến lược này được duy trì cả trong cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.
            
            Từ thực tiễn xây dựng khối đại đoàn kết toàn dân tộc, Hồ Chí Minh đã khái quát thành nhiều luận điểm:
            - "Đoàn kết là sức mạnh của chúng ta!"
            - "Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi"
            - "Đoàn kết là sức mạnh, đoàn kết là thắng lợi"
            - "Đoàn kết là sức mạnh, là then chốt của thành công"
            
            Kết luận: "Đoàn kết, đoàn kết, đại đoàn kết - Thành công, thành công, đại thành công".
            
            b. Đại đoàn kết toàn dân tộc là một mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam:
            
            Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là mục tiêu lâu dài của cách mạng. Trong lời kết thúc buổi ra mắt Đảng Lao động Việt Nam ngày 3-3-1951, Hồ Chí Minh tuyên bố: "Mục đích của Đảng Lao động Việt Nam có thể gom trong tám chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC".
            
            Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng. Đại đoàn kết là yêu cầu khách quan của sự nghiệp cách mạng, là đòi hỏi khách quan của quần chúng nhân dân trong cuộc đấu tranh vì lợi ích chính đáng của mình.
        `,

        lucLuongDaiDoanKet: `
            a. Chủ thể của khối đại đoàn kết toàn dân tộc:
            
            Chủ thể của khối đại đoàn kết toàn dân tộc, theo Hồ Chí Minh bao gồm toàn thể nhân dân, tất cả những người Việt Nam yêu nước ở các giai cấp, các tầng lớp trong xã hội, các ngành, các giới, các lứa tuổi, các dân tộc, đồng bào các tôn giáo, các đảng phái.
            
            "Nhân dân" trong tư tưởng Hồ Chí Minh vừa được hiểu với nghĩa là con người Việt Nam cụ thể, vừa là một tập hợp đông đảo quần chúng nhân dân và cả dân tộc; đều là chủ thể của khối đại đoàn kết toàn dân tộc.
            
            "Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ".
            
            b. Nền tảng của khối đại đoàn kết toàn dân tộc:
            
            Hồ Chí Minh chỉ rõ: "Đại đoàn kết tức là trước hết phải đoàn kết đại đa số nhân dân, mà đại đa số nhân dân là công nhân, nông dân và các tầng lớp nhân dân lao động khác. Đó là nền, gốc của đại đoàn kết. Nó cũng như cái nền của nhà, gốc của cây. Nhưng đã có nền vững, gốc tốt, còn phải đoàn kết các tầng lớp nhân dân khác".
            
            Lực lượng làm nền tảng: công nhân, nông dân và trí thức. Nền tảng này càng được củng cố vững chắc thì khối đại đoàn kết toàn dân tộc càng có thể mở rộng.
            
            Trong khối đại đoàn kết toàn dân tộc, phải đặc biệt chú trọng yếu tố "hạt nhân" là sự đoàn kết và thống nhất trong Đảng vì đó là điều kiện cho sự đoàn kết ngoài xã hội.
        `,

        nguyenTac: `
            Nguyên tắc thực hiện đại đoàn kết toàn dân tộc:
            
            1. Nguyên tắc dân tộc: Đoàn kết tất cả người Việt Nam yêu nước
            2. Nguyên tắc dân chủ: Tôn trọng quyền làm chủ của nhân dân
            3. Nguyên tắc nhân văn: Con người là trung tâm, mục tiêu của sự phát triển
            4. Nguyên tắc công bằng: Chia sẻ lợi ích, gánh vác trách nhiệm chung
            5. Nguyên tắc khoan dung: Đoàn kết trong sự khác biệt
        `,

        dieuKienXayDung: `
            Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc:
            
            1. Phải lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng:
               - Chỉ có lợi ích mới quy tụ được lợi ích
               - Tìm ra điểm tương đồng, lợi ích chung thì mới đoàn kết được lực lượng
               - Đoàn kết phải lấy lợi ích cơ bản của dân tộc và của nhân dân làm mục tiêu phấn đấu
               - Đây là nguyên tắc bất di bất dịch, là ngọn cờ của đoàn kết
               
            2. Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc:
               - Truyền thống được hun đúc trong suốt quá trình dựng nước và giữ nước
               - Đã trở thành giá trị bền vững, thấm sâu vào tư tưởng, tình cảm, tâm hồn con người Việt Nam
               - Là cội nguồn sức mạnh vô địch để dân tộc chiến đấu và chiến thắng
               
            3. Phải có lòng khoan dung, độ lượng với con người:
               - "Năm ngón tay cũng có ngón vắn, ngón dài. Nhưng vắn dài đều hợp nhau lại nơi bàn tay"
               - Phải khoan hồng, đại độ; nhận rằng có người lạc đường, lầm lỡ, nhưng có thể cảm hóa
               - Đối với những đồng bào lỡ lầm, ta phải lấy tình thân ái mà cảm hóa
               
            4. Phải có niềm tin vào nhân dân:
               - Yêu dân, tin dân, dựa vào dân, tôn trọng quyền làm chủ của nhân dân
               - Tiếp nối truyền thống "Nước lấy dân làm gốc", "Chở thuyền và lật thuyền cũng là dân"
               - Dân là chỗ dựa chắc chắn, là nguồn sức mạnh vô địch của khối đại đoàn kết
        `,

        phuongPhap: `
            Phương pháp xây dựng đại đoàn kết:
            
            - Giáo dục tư tưởng yêu nước, yêu dân tộc
            - Phát huy truyền thống văn hóa dân tộc
            - Thực hiện chính sách dân tộc đúng đắn
            - Bảo đảm công bằng xã hội, cải thiện đời sống
            - Xây dựng khối đoàn kết công nông trí
            - Đoàn kết quốc tế, nhất là với các dân tộc bị áp bức
        `,

        doiTuong: `
            Đối tượng của đại đoàn kết toàn dân tộc:
            
            1. Toàn thể nhân dân Việt Nam:
               - Giai cấp công nhân
               - Giai cấp nông dân
               - Tầng lớp trí thức
               - Các tầng lớp nhân dân khác
            
            2. Đồng bào các dân tộc thiểu số
            3. Đồng bào có tôn giáo
            4. Kiều bào Việt Nam ở nước ngoài
            5. Những người Việt Nam yêu nước, tiến bộ
        `,

        matTranDanToc: `
            Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc – Mặt trận dân tộc thống nhất:
            
            a. Mặt trận dân tộc thống nhất:
            Khối đại đoàn kết toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh khi được tập hợp, tổ chức lại thành một khối vững chắc, đó là Mặt trận dân tộc thống nhất.
            
            Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước, tập hợp mọi người dân nước Việt, cả trong nước và kiều bào sinh sống ở nước ngoài.
            
            Các hình thức lịch sử:
            - Hội Phản đế Đồng minh (1930)
            - Mặt trận Dân chủ Đông Dương (1936)
            - Mặt trận Nhân dân phản đế Đông Dương (1939)
            - Mặt trận Việt Minh (1941)
            - Mặt trận Liên Việt (1951)
            - Mặt trận Dân tộc Giải phóng miền Nam Việt Nam (1960)
            - Mặt trận Tổ quốc Việt Nam (1955, 1976...)
            
            b. Nguyên tắc xây dựng và hoạt động:
            
            (1) Phải được xây dựng trên nền tảng liên minh công nhân – nông dân – trí thức và đặt dưới sự lãnh đạo của Đảng:
            - "Lực lượng chủ yếu trong khối đoàn kết dân tộc là công nông, cho nên liên minh công nông là nền tảng của Mặt trận dân tộc thống nhất"
            - Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo
            
            (2) Phải hoạt động theo nguyên tắc hiệp thương dân chủ:
            - Nơi nào có hiệp thương dân chủ thật sự, ở đó mới có đoàn kết chân thành, rộng rãi, bền vững
            - Thống nhất các quan điểm khác nhau trên cơ sở những điểm đồng
            
            (3) Phải đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ:
            - Phương châm "cầu đồng tồn dị"
            - "Đoàn kết thực sự nghĩa là mục đích phải nhất trí và lập trường cũng phải nhất trí"
            - "Vừa đoàn kết, vừa đấu tranh, học những cái tốt của nhau, phê bình những cái sai của nhau"
        `,

        chieuSauLyLuan: `
            5.2. Phân tích chuyên sâu: Đại đoàn kết dân tộc – chiến lược lâu dài hay chỉ là sách lược nhất thời?
            
            1. Mở đầu – Đặt vấn đề:
            
            Trong lịch sử thế giới, không hiếm những phong trào cách mạng nổ ra với lời hiệu triệu đoàn kết. Tuy nhiên, sự đoàn kết đó thường chỉ mang tính tạm thời, khi đạt được mục tiêu trước mắt thì liên minh rạn nứt, thậm chí tan rã.
            
            Ở Việt Nam, Hồ Chí Minh từ rất sớm đã khẳng định: "Đoàn kết là then chốt của thành công". Với Người, đại đoàn kết không phải là thủ đoạn hay "sách lược" ngắn hạn để đối phó tình thế, mà là chiến lược sống còn, quyết định mọi thắng lợi của cách mạng.
            
            Câu hỏi đặt ra: Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh là sách lược tình thế, hay là đường lối chiến lược lâu dài, xuyên suốt?
            
            2. Cơ sở hình thành tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc:
            
            2.1. Truyền thống dân tộc:
            Hàng nghìn năm dựng nước và giữ nước đã hình thành chân lý: "Bầu ơi thương lấy bí cùng", "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao".
            Các triều đại Lý – Trần – Lê đã biết dựa vào dân, quy tụ toàn dân để chiến thắng quân xâm lược.
            Hồ Chí Minh nhiều lần nhấn mạnh: "Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta. Từ xưa đến nay, mỗi khi Tổ quốc bị xâm lăng thì tinh thần ấy lại sôi nổi, nó kết thành một làn sóng vô cùng mạnh mẽ..."
            
            2.2. Chủ nghĩa Mác – Lênin:
            Người tiếp thu quan điểm liên minh công – nông – trí thức là nền tảng của cách mạng.
            Nhưng Người mở rộng hơn: "Đoàn kết là sức mạnh vô địch của chúng ta, không phân biệt giàu nghèo, tôn giáo, dân tộc, tất cả đều là con Lạc cháu Hồng."
            Đó chính là sự sáng tạo, biến lý luận thành đường lối phù hợp với thực tiễn Việt Nam.
            
            2.3. Trải nghiệm cách mạng thế giới và trong nước:
            Sau thời gian hoạt động ở Pháp, Liên Xô, Trung Quốc, Hồ Chí Minh nhận thấy nhiều phong trào thất bại vì chia rẽ.
            Thực tiễn Việt Nam càng chứng minh rõ: chỉ có tập hợp được toàn dân thì cách mạng mới giành thắng lợi.
            
            3. Nội dung cơ bản tư tưởng Hồ Chí Minh về đại đoàn kết:
            
            3.1. Đoàn kết là vấn đề sống còn:
            Hồ Chí Minh coi đoàn kết là "mạch máu" của cách mạng: "Đoàn kết là sức mạnh, là then chốt của thành công. Nếu chia rẽ thì yếu ớt, đoàn kết thì mạnh mẽ."
            Người nhiều lần nhắc: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
            
            3.2. Đại đoàn kết toàn dân tộc:
            Không chỉ công – nông – trí thức, mà bao gồm mọi tầng lớp xã hội, các dân tộc, tôn giáo, kiều bào ở nước ngoài.
            Người khẳng định: "Bất kỳ ai thật thà tán thành hòa bình, thống nhất, độc lập, dân chủ thì dù trước đây họ chống chúng ta, bây giờ chúng ta cũng thật thà đoàn kết với họ."
            Điều kiện duy nhất: lòng yêu nước và sự sẵn sàng đóng góp vào sự nghiệp chung.
            
            3.3. Hình thức tổ chức:
            Đại đoàn kết được cụ thể hóa qua các hình thức mặt trận: Việt Minh, Liên Việt, Mặt trận Tổ quốc Việt Nam.
            Đây là nơi quy tụ, phát huy sức mạnh tổng hợp của toàn dân tộc.
            
            4. Vì sao đại đoàn kết là đường lối chiến lược, không phải sách lược nhất thời:
            
            4.1. Xuất phát từ yêu cầu khách quan của cách mạng Việt Nam:
            Một đất nước nhỏ, thường xuyên bị ngoại xâm → chỉ khi huy động sức mạnh toàn dân mới đủ lực chống kẻ thù lớn mạnh hơn nhiều lần.
            Hồ Chí Minh viết: "Trong bầu trời không có gì quý bằng nhân dân. Trong thế giới không có gì mạnh bằng lực lượng đoàn kết của nhân dân."
            
            4.2. Được kiểm nghiệm trong thực tiễn lịch sử:
            - Cách mạng Tháng Tám 1945: nhờ đoàn kết toàn dân dưới cờ Việt Minh, chỉ trong nửa tháng đã giành chính quyền trên cả nước.
            - Kháng chiến chống Pháp (1945–1954): tinh thần đoàn kết toàn dân đã làm nên chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu".
            - Kháng chiến chống Mỹ cứu nước (1954–1975): nhờ đoàn kết Bắc – Nam, hậu phương – tiền tuyến, dân tộc đã làm nên Đại thắng mùa Xuân 1975.
            
            4.3. Có giá trị bền vững trong hòa bình và xây dựng đất nước:
            - Sau 1975, đất nước bước vào xây dựng xã hội chủ nghĩa, đoàn kết trở thành động lực khắc phục hậu quả chiến tranh.
            - Trong thời kỳ đổi mới và hội nhập, đại đoàn kết là chìa khóa để phát triển kinh tế – xã hội, bảo vệ chủ quyền, giữ ổn định chính trị.
            
            → Như vậy, đoàn kết không bao giờ là tạm thời; nó xuyên suốt từ kháng chiến đến xây dựng, từ chiến tranh đến hòa bình, từ quá khứ đến hiện tại.
            
            5. Ý nghĩa chiến lược, quyết định thắng lợi của cách mạng Việt Nam:
            
            5.1. Lý luận: 
            Tư tưởng đại đoàn kết là sự vận dụng sáng tạo chủ nghĩa Mác – Lênin, phù hợp với hoàn cảnh Việt Nam.
            
            5.2. Thực tiễn: 
            Mọi thắng lợi cách mạng đều gắn với sức mạnh đoàn kết. Hồ Chí Minh từng nói: "Đoàn kết là một chính sách, một chiến lược lâu dài, chứ không phải là một thủ đoạn nhất thời."
            
            5.3. Hiện nay:
            Trong công nghiệp hóa, hiện đại hóa và hội nhập toàn cầu → đoàn kết giúp đất nước vượt qua thách thức: biến đổi khí hậu, dịch bệnh, cạnh tranh kinh tế, tranh chấp chủ quyền.
            Khối "đại đoàn kết toàn dân tộc" cùng với "đoàn kết quốc tế" chính là điều kiện để Việt Nam phát triển bền vững, nâng cao vị thế quốc tế.
            
            6. Bổ sung dẫn chứng từ bối cảnh xã hội, kinh tế – chính trị hiện nay:
            
            6.1. Xã hội:
            Trong đại dịch Covid-19, sức mạnh đoàn kết toàn dân thể hiện rõ qua phong trào ủng hộ quỹ vaccine, lực lượng y tế – quân đội – công an xung kích, nhân dân hỗ trợ lẫn nhau. Đây là minh chứng cho tư tưởng Hồ Chí Minh về "mỗi người vì mọi người".
            Chính sách đoàn kết dân tộc, đoàn kết tôn giáo giúp Việt Nam ổn định xã hội, khác hẳn với nhiều quốc gia đa tộc bị xung đột.
            
            6.2. Kinh tế:
            Muốn công nghiệp hóa, hiện đại hóa thành công, phải huy động sức mạnh của toàn dân: công nhân, nông dân, trí thức, doanh nhân, kiều bào.
            Chính sự đồng thuận xã hội giúp Việt Nam duy trì tốc độ tăng trưởng và vượt qua nhiều khủng hoảng toàn cầu.
            
            6.3. Chính trị – đối ngoại:
            Trước sức ép ở Biển Đông và cạnh tranh chiến lược giữa các nước lớn, sự đoàn kết trong nước là nền tảng để bảo vệ độc lập, chủ quyền.
            Trên trường quốc tế, nhờ tinh thần đoàn kết trong nước và chính sách đối ngoại hòa bình, Việt Nam đã trở thành thành viên tích cực của Liên Hợp Quốc, được cộng đồng quốc tế đánh giá cao.
            
            → Trong bối cảnh toàn cầu hóa hôm nay, lời dạy của Hồ Chí Minh vẫn còn nguyên giá trị: "Đoàn kết là sức mạnh, đoàn kết là then chốt của thành công."
            
            7. Kết luận:
            
            Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh không phải là sách lược ngắn hạn, mà là chiến lược lâu dài, mang tính sống còn.
            Chiến lược ấy đã giúp dân tộc giành độc lập, thống nhất và tiếp tục đưa đất nước đi lên trong công cuộc xây dựng và phát triển.
            Trong thời kỳ hội nhập quốc tế, đại đoàn kết càng khẳng định vai trò quyết định: vừa là sức mạnh nội sinh, vừa là "lá chắn" bảo vệ dân tộc, vừa là "động cơ" để Việt Nam phát triển bền vững.
        `,

        phuongThucXayDung: `
            Phương thức xây dựng khối đại đoàn kết dân tộc:
            
            1. Làm tốt công tác vận động quần chúng (Dân vận):
            - Hồ Chí Minh coi đoàn kết, đại đoàn kết như một mục tiêu, một nhiệm vụ hàng đầu của Đảng
            - Vận động quần chúng để thu hút quần chúng là lẽ đoàn kết mọi người
            - Giáo dục, tuyên truyền, hướng dẫn, đưa quần chúng vào con đường cách mạng
            - Nghiêm chỉnh nêu gương đạo đức, lối sống
            - Phương pháp phải phù hợp với tâm tư, nguyện vọng và lợi ích của quần chúng
            
            2. Thành lập đoàn thể, tổ chức quần chúng phù hợp với từng đối tượng:
            - Tổ chức thành các đoàn thể phù hợp để tập hợp quần chúng nhân dân
            - Phù hợp từng giai cấp, dân tộc, tôn giáo, lứa tuổi, giới tính, nghề nghiệp
            - Có nhiệm vụ giáo dục, động viên và phát huy mọi khả năng của người lao động
            
            3. Các đoàn thể, tổ chức quần chúng được tập hợp và đoàn kết trong Mặt trận dân tộc thống nhất:
            - "Những đoàn thể ấy là tổ chức của dân, phần đầu của dân, bênh vực quyền của dân"
            - Các đoàn thể, tổ chức quần chúng và Mặt trận dân tộc thống nhất là sợi dây gắn kết Đảng với nhân dân
            - Thực hiện chiến lược: "Đoàn kết, đoàn kết, đại đoàn kết, Thành công, thành công, đại thành công!"
        `,
    },

    // Thực tiễn lịch sử
    history: {
        khangChienChongPhap: `
            Trong kháng chiến chống Pháp (1946-1954):
            - Xây dựng Mặt trận Việt Minh đoàn kết toàn dân
            - Khẩu hiệu "Toàn dân kháng chiến"
            - Chính sách "Kháng chiến kiến quốc"
            - Đoàn kết các dân tộc anh em trong nước
        `,

        khangChienChongMy: `
            Trong kháng chiến chống Mỹ (1954-1975):
            - Xây dựng Mặt trận Dân tộc giải phóng miền Nam
            - Đoàn kết Bắc-Nam chống kẻ thù chung
            - Chính sách hòa giải dân tộc
            - Đoàn kết quốc tế rộng rãi
        `,

        doiMoi: `
            Thời kỳ đổi mới (từ 1986):
            - Xây dựng Mặt trận Tổ quốc Việt Nam
            - Đại đoàn kết trong xây dựng và phát triển
            - Chính sách đại đoàn kết dân tộc, hòa giải, khoan dung
            - Phát huy sức mạnh của toàn dân tộc trong công nghiệp hóa, hiện đại hóa
        `,
    },

    // Ý nghĩa và giá trị
    significance: {
        yNghiaLichSu: `
            Ý nghĩa lịch sử:
            - Tạo nên sức mạnh vô địch trong đấu tranh giải phóng dân tộc
            - Đảm bảo thống nhất đất nước, thống nhất dân tộc
            - Tạo tiền đề cho thắng lợi của cách mạng Việt Nam
            - Là chiến lược sống còn, không phải sách lược nhất thời
            - Xuyên suốt từ kháng chiến đến xây dựng, từ chiến tranh đến hòa bình
        `,

        giaTriHienTai: `
            Giá trị trong thời kỳ hiện tại:
            - Nguồn lực quan trọng cho phát triển kinh tế-xã hội
            - Bảo đảm ổn định chính trị, trật tự xã hội
            - Nâng cao vị thế của Việt Nam trên trường quốc tế
            - Ứng phó hiệu quả với các thách thức, khó khăn
            - Sức mạnh nội sinh trong công nghiệp hóa, hiện đại hóa
            - "Lá chắn" bảo vệ dân tộc và "động cơ" phát triển bền vững
            - Minh chứng qua đại dịch Covid-19 và các thách thức toàn cầu
        `,

        chieuSauPhanTich: `
            Phân tích chuyên sâu về tính chiến lược:
            - Đoàn kết là "mạch máu" của cách mạng, không phải thủ đoạn chính trị
            - Xuất phát từ yêu cầu khách quan: đất nước nhỏ cần sức mạnh toàn dân
            - Được kiểm nghiệm qua các thời kỳ lịch sử: Tháng Tám 1945, Điện Biên Phủ, Đại thắng mùa Xuân 1975
            - Có giá trị bền vững trong cả hòa bình lẫn chiến tranh
            - Thích ứng với mọi bối cảnh: từ kháng chiến đến đổi mới, hội nhập
        `,
    },
}

// ========================================
// TỪ KHÓA LIÊN QUAN
// ========================================
const KEYWORDS = [
    // Từ khóa chính
    'đại đoàn kết',
    'đại đoàn kết toàn dân tộc',
    'đoàn kết dân tộc',
    'sức mạnh dân tộc',
    'thống nhất dân tộc',
    'khối đại đoàn kết',

    // Từ khóa về Hồ Chí Minh
    'hồ chí minh',
    'bác hồ',
    'chủ tịch hồ chí minh',
    'tư tưởng hồ chí minh',

    // Từ khóa lịch sử
    'việt minh',
    'mặt trận dân tộc thống nhất',
    'mặt trận tổ quốc',
    'kháng chiến',
    'giải phóng dân tộc',

    // Từ khóa về đối tượng
    'toàn dân',
    'nhân dân',
    'công nông trí',
    'dân tộc thiểu số',
    'tôn giáo',
    'kiều bào',

    // Từ khóa về phương pháp
    'giáo dục yêu nước',
    'truyền thống dân tộc',
    'chính sách dân tộc',
    'công bằng xã hội',
    'hòa giải dân tộc',
    'khoan dung',
    'hiệp thương dân chủ',
    'cầu đồng tồn dị',
    'liên minh công nông trí',
    'vận động quần chúng',
    'dân vận',

    // Từ khóa về vai trò và ý nghĩa
    'vai trò chiến lược',
    'nhiệm vụ hàng đầu',
    'sức mạnh vô địch',
    'then chốt thành công',
    'lực lượng quyết định',
    'nền tảng vững chắc',
    'hạt nhân đoàn kết',

    // Từ khóa về điều kiện và nguyên tắc
    'lợi ích chung',
    'lợi ích khác biệt',
    'khoan dung độ lượng',
    'tin dân yêu dân',
    'nước lấy dân làm gốc',
    'chở thuyền lật thuyền',

    // Từ khóa về tổ chức
    'đoàn thể quần chúng',
    'tổ chức quần chúng',
    'đại đoàn kết lâu dài',
    'đoàn kết chân thành',
    'thân ái giúp đỡ',

    // Từ khóa hiện đại
    'đổi mới',
    'công nghiệp hóa',
    'hiện đại hóa',
    'hội nhập quốc tế',
    'xây dựng và bảo vệ tổ quốc',

    // Từ khóa mới từ phân tích chuyên sâu
    'chiến lược lâu dài',
    'sách lược nhất thời',
    'đường lối chiến lược',
    'sự nghiệp sống còn',
    'mạch máu cách mạng',
    'yêu cầu khách quan',
    'kiểm nghiệm lịch sử',
    'bầu ơi thương lấy bí cùng',
    'một cây làm chẳng nên non',
    'ba cây chụm lại nên hòn núi cao',
    'con lạc cháu hồng',
    'cách mạng tháng tám',
    'điện biên phủ',
    'đại thắng mùa xuân',
    'biến đổi khí hậu',
    'đại dịch covid-19',
    'lá chắn bảo vệ',
    'động cơ phát triển',
    'sức mạnh nội sinh',
    'phong trào ủng hộ',
    'đồng thuận xã hội',
    'biển đông',
    'cạnh tranh chiến lược',
    'liên hợp quốc',
    'toàn cầu hóa',
]

// ========================================
// CÂU HỎI MẪU
// ========================================
const SAMPLE_QUESTIONS = [
    'Đại đoàn kết toàn dân tộc là gì?',
    'Nguồn gốc tư tưởng đại đoàn kết của Hồ Chí Minh?',
    'Nguyên tắc xây dựng đại đoàn kết toàn dân tộc?',
    'Phương pháp thực hiện đại đoàn kết trong thời kỳ kháng chiến?',
    'Ý nghĩa của đại đoàn kết trong thời kỳ đổi mới?',
    'Vai trò của Mặt trận Tổ quốc trong đại đoàn kết?',
    'Chính sách dân tộc của Hồ Chí Minh?',
    'Đại đoàn kết với đồng bào có tôn giáo?',
    'Kinh nghiệm xây dựng đại đoàn kết ở Việt Nam?',
    'Thách thức trong xây dựng đại đoàn kết hiện nay?',

    // Câu hỏi về vai trò chiến lược
    'Vai trò chiến lược của đại đoàn kết toàn dân tộc trong cách mạng Việt Nam?',
    'Tại sao đại đoàn kết là nhiệm vụ hàng đầu của cách mạng?',
    'Ý nghĩa câu nói "Đoàn kết, đoàn kết, đại đoàn kết - Thành công, thành công, đại thành công"?',

    // Câu hỏi về lực lượng và chủ thể
    'Chủ thể của khối đại đoàn kết toàn dân tộc theo Hồ Chí Minh?',
    'Nền tảng của khối đại đoàn kết toàn dân tộc là gì?',
    'Vai trò của liên minh công-nông-trí trong đại đoàn kết?',
    'Tại sao Đảng là hạt nhân của khối đại đoàn kết?',

    // Câu hỏi về điều kiện xây dựng
    'Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc?',
    'Vai trò của lợi ích chung trong đại đoàn kết?',
    'Ý nghĩa của lòng khoan dung, độ lượng trong đoàn kết?',
    'Tại sao phải có niềm tin vào nhân dân?',

    // Câu hỏi về tổ chức và phương thức
    'Mặt trận dân tộc thống nhất là gì?',
    'Nguyên tắc hiệp thương dân chủ trong Mặt trận?',
    'Phương châm "cầu đồng tồn dị" nghĩa là gì?',
    'Vai trò của công tác vận động quần chúng?',
    'Ý nghĩa của các đoàn thể quần chúng trong đại đoàn kết?',

    // Câu hỏi về phân tích chuyên sâu
    'Đại đoàn kết dân tộc là chiến lược lâu dài hay sách lược nhất thời?',
    'Cơ sở nào hình thành tư tưởng đại đoàn kết của Hồ Chí Minh?',
    'Vì sao đại đoàn kết là vấn đề sống còn của dân tộc Việt Nam?',
    'Đoàn kết được kiểm nghiệm như thế nào trong các thời kỳ lịch sử?',
    'Truyền thống dân tộc góp phần gì vào tư tưởng đại đoàn kết?',
    'Chủ nghĩa Mác-Lênin được Hồ Chí Minh vận dụng ra sao?',
    'Ý nghĩa câu "Bầu ơi thương lấy bí cùng" trong đoàn kết?',
    'Đoàn kết có vai trò gì trong Cách mạng Tháng Tám 1945?',
    'Tinh thần đoàn kết thể hiện ra sao tại Điện Biên Phủ?',
    'Đại thắng mùa Xuân 1975 và sức mạnh đoàn kết?',
    'Đoàn kết trong thời kỳ đổi mới có đặc điểm gì?',
    'Đại dịch Covid-19 minh chứng gì về đoàn kết toàn dân?',
    'Đoàn kết giúp Việt Nam ứng phó thách thức nào hiện nay?',
    'Vai trò của đoàn kết trong công nghiệp hóa, hiện đại hóa?',
    'Đại đoàn kết là "lá chắn" và "động cơ" như thế nào?',
]

// ========================================
// MỤC TIÊU HỌC TẬP
// ========================================
const LEARNING_OBJECTIVES = [
    'Hiểu được khái niệm và bản chất đại đoàn kết toàn dân tộc',
    'Nắm được nguồn gốc và sự hình thành tư tưởng đại đoàn kết',
    'Phân tích các nguyên tắc, phương pháp xây dựng đại đoàn kết',
    'Đánh giá vai trò, ý nghĩa của đại đoàn kết trong lịch sử',
    'Vận dụng tư tưởng đại đoàn kết vào thực tiễn hiện tại',
    'So sánh kinh nghiệm đại đoàn kết qua các thời kỳ lịch sử',
]

// ========================================
// FUNCTION XUẤT DỮ LIỆU
// ========================================

/**
 * Lấy toàn bộ kiến thức về đại đoàn kết toàn dân tộc
 */
export function getAllHoChiMinhUnityKnowledge(): string {
    const sections = [
        '=== KHÁI NIỆM VÀ BẢN CHẤT ===',
        KNOWLEDGE_BASE.concepts.daiDoanKet,
        KNOWLEDGE_BASE.concepts.banChat,
        KNOWLEDGE_BASE.concepts.nguonGoc,

        '=== NGUYÊN TẮC VÀ PHƯƠNG PHÁP ===',
        KNOWLEDGE_BASE.content.nguyenTac,
        KNOWLEDGE_BASE.content.phuongPhap,
        KNOWLEDGE_BASE.content.doiTuong,

        '=== THỰC TIỄN LỊCH SỬ ===',
        KNOWLEDGE_BASE.history.khangChienChongPhap,
        KNOWLEDGE_BASE.history.khangChienChongMy,
        KNOWLEDGE_BASE.history.doiMoi,

        '=== Ý NGHĨA VÀ GIÁ TRỊ ===',
        KNOWLEDGE_BASE.significance.yNghiaLichSu,
        KNOWLEDGE_BASE.significance.giaTriHienTai,
    ]

    return sections.join('\n\n')
}

/**
 * Lấy tất cả từ khóa liên quan
 */
export function getAllUnityKeywords(): string[] {
    return [...KEYWORDS]
}

/**
 * Lấy câu hỏi mẫu
 */
export function getSampleQuestions(): string[] {
    return [...SAMPLE_QUESTIONS]
}

/**
 * Lấy mục tiêu học tập
 */
export function getLearningObjectives(): string[] {
    return [...LEARNING_OBJECTIVES]
}

/**
 * Tìm kiếm nội dung theo từ khóa
 */
export function searchKnowledgeByKeyword(keyword: string): string[] {
    const results: string[] = []
    const lowerKeyword = keyword.toLowerCase()

    // Tìm trong concepts
    Object.entries(KNOWLEDGE_BASE.concepts).forEach(([key, value]) => {
        if (value.toLowerCase().includes(lowerKeyword)) {
            results.push(`[Khái niệm - ${key}]: ${value}`)
        }
    })

    // Tìm trong content
    Object.entries(KNOWLEDGE_BASE.content).forEach(([key, value]) => {
        if (value.toLowerCase().includes(lowerKeyword)) {
            results.push(`[Nội dung - ${key}]: ${value}`)
        }
    })

    // Tìm trong history
    Object.entries(KNOWLEDGE_BASE.history).forEach(([key, value]) => {
        if (value.toLowerCase().includes(lowerKeyword)) {
            results.push(`[Lịch sử - ${key}]: ${value}`)
        }
    })

    // Tìm trong significance
    Object.entries(KNOWLEDGE_BASE.significance).forEach(([key, value]) => {
        if (value.toLowerCase().includes(lowerKeyword)) {
            results.push(`[Ý nghĩa - ${key}]: ${value}`)
        }
    })

    return results
}

export default {
    getAllHoChiMinhUnityKnowledge,
    getAllUnityKeywords,
    getSampleQuestions,
    getLearningObjectives,
    searchKnowledgeByKeyword,
}
