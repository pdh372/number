// Letter values for numerology calculations
const letterValues = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
	H: 8,
	I: 9,
	J: 1,
	K: 2,
	L: 3,
	M: 4,
	N: 5,
	O: 6,
	P: 7,
	Q: 8,
	R: 9,
	S: 1,
	T: 2,
	U: 3,
	V: 4,
	W: 5,
	X: 6,
	Y: 7,
	Z: 8,
};

const baseVowels = ['A', 'E', 'I', 'O', 'U'];

// Vietnamese accent mapping for normalization
const vietnameseAccents = {
	à: 'a',
	á: 'a',
	ả: 'a',
	ã: 'a',
	ạ: 'a',
	ă: 'a',
	ằ: 'a',
	ắ: 'a',
	ẳ: 'a',
	ẵ: 'a',
	ặ: 'a',
	â: 'a',
	ầ: 'a',
	ấ: 'a',
	ẩ: 'a',
	ẫ: 'a',
	ậ: 'a',
	è: 'e',
	é: 'e',
	ẻ: 'e',
	ẽ: 'e',
	ẹ: 'e',
	ê: 'e',
	ề: 'e',
	ế: 'e',
	ể: 'e',
	ễ: 'e',
	ệ: 'e',
	ì: 'i',
	í: 'i',
	ỉ: 'i',
	ĩ: 'i',
	ị: 'i',
	ò: 'o',
	ó: 'o',
	ỏ: 'o',
	õ: 'o',
	ọ: 'o',
	ô: 'o',
	ồ: 'o',
	ố: 'o',
	ổ: 'o',
	ỗ: 'o',
	ộ: 'o',
	ơ: 'o',
	ờ: 'o',
	ớ: 'o',
	ở: 'o',
	ỡ: 'o',
	ợ: 'o',
	ù: 'u',
	ú: 'u',
	ủ: 'u',
	ũ: 'u',
	ụ: 'u',
	ư: 'u',
	ừ: 'u',
	ứ: 'u',
	ử: 'u',
	ữ: 'u',
	ự: 'u',
	ỳ: 'y',
	ý: 'y',
	ỷ: 'y',
	ỹ: 'y',
	ỵ: 'y',
	đ: 'd',
};

// Detailed number information from images
const numberDetails = {
	1: {
		lifePath: {
			meaning:
				'Con đường học tự chủ và tiên phong; dám chọn lối riêng, dẫn dắt bằng gương mẫu.',
			positive:
				"Chủ động, 'tôi chịu trách nhiệm', đặt mục tiêu rõ - hành động nhanh, biết xin hỗ trợ khi cần.",
			negative:
				'Lề thói, chần chừ; hoặc độc đoán, nóng nảy, thích áp đặt.',
		},
		destiny: {
			meaning:
				'Mục đích sống là khởi xướng giá trị mới cho tập thể/cộng đồng.',
			positive: 'Tạo tâm điểm, kích hoạt người khác hành động.',
			negative:
				'Dễ bị lung lay bởi phán xét; hoặc muốn chứng tỏ quá mức.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: được tự do lựa chọn & tự quyết; được công nhận năng lực.',
			positive:
				'Bình an khi được tự chủ; thích không gian riêng để sáng tạo.',
			negative: 'Bực bội khi bị kiểm soát; dễ nổi nóng, phòng thủ.',
		},
		personality: {
			meaning:
				'Cách thể hiện ra ngoài: nhanh nhẹn, quyết đoán, thẳng thắn.',
			positive: 'Rõ ràng, mạch lạc; quyết định có lý do.',
			negative: "Bộc trực quá mức, cắt lời; dễ bị xem 'cứng đầu'.",
		},
		attitude: {
			meaning: 'Ấn tượng ban đầu/khi chat: mạnh mẽ, chủ động.',
			positive: "Tạo cảm giác an tâm 'có người cầm lái'.",
			negative: 'Gây áp lực vô hình, người khác ngại góp ý.',
		},
		birthday: {
			meaning:
				'Tố chất bẩm sinh: bắt đầu việc mới, tự lập, thích thử thách.',
			positive: 'Biết mở đường rồi bàn giao quy trình.',
			negative: "'Ôm hết', kiệt sức; hoặc bỏ ngang khi chán.",
		},
		maturity: {
			meaning:
				'Đỉnh cao đời sống: quyền lực nội tại và vị thế dẫn dắt dựa trên đức tin vào chính mình & giá trị phụng sự.',
			positive: 'Ảnh hưởng tích cực, được mọi người hỏi ý/mentor.',
			negative: "Cố chấp giữ quyền lực; 'thắng–thua' thay vì win–win.",
		},
	},
	2: {
		lifePath: {
			meaning: 'Con đường học hợp tác – cân bằng – kiên nhẫn.',
			positive: 'Dịu dàng, hỗ trợ, tạo sự hòa hợp.',
			negative: 'Quá nhạy cảm, sợ mâu thuẫn, thiếu quyết đoán.',
		},
		destiny: {
			meaning: 'Sứ mệnh trở thành người kết nối, bắc cầu giữa con người.',
			positive: 'Tinh tế, hợp tác, khuyến khích tiềm năng người khác.',
			negative: 'Sống trong bóng người khác, sợ thể hiện bản thân.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: được kết nối, được yêu thương, được an toàn trong quan hệ.',
			positive: 'Bình an khi cảm thấy gắn bó, được tin cậy.',
			negative: 'Lệ thuộc tình cảm, dễ mất mình trong mối quan hệ.',
		},
		personality: {
			meaning: 'Bề ngoài dịu dàng, mềm mại, thân thiện.',
			positive: 'Tạo cảm giác dễ gần, dễ chia sẻ.',
			negative: 'Quá nhút nhát, ngại va chạm, dễ bị lấn lướt.',
		},
		attitude: {
			meaning: 'Cách tiếp cận nhẹ nhàng, kiên nhẫn.',
			positive: 'Giúp tập thể thấy an toàn, yên tâm.',
			negative: 'Tránh né mâu thuẫn, thiếu quyết đoán.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: tinh tế, cảm xúc, trực giác.',
			positive: 'Dễ đồng cảm, tạo không khí hòa hợp.',
			negative: 'Quá nhạy cảm, dễ tự ái.',
		},
		maturity: {
			meaning:
				'Đỉnh cao: người nuôi dưỡng, hòa giải viên; trực giác sâu sắc.',
			positive: 'Trở thành điểm tựa tinh thần, được tin cậy.',
			negative: 'Đánh mất bản thân trong việc làm hài lòng người khác.',
		},
	},
	3: {
		lifePath: {
			meaning: 'Con đường học biểu đạt & lan tỏa niềm vui.',
			positive: 'Hài hước, sáng tạo, giao tiếp hiệu quả.',
			negative: 'Phân tán, nóng nảy, tránh trách nhiệm.',
		},
		destiny: {
			meaning: 'Sứ mệnh trở thành người truyền cảm hứng qua biểu đạt.',
			positive: 'Mang năng lượng tích cực, lan tỏa sự lạc quan.',
			negative: 'Sống bề ngoài, chạy theo niềm vui tạm thời.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: được vui, được tự do biểu đạt.',
			positive: 'Hạnh phúc khi được chia sẻ, sáng tạo.',
			negative: 'Dễ hụt hẫng khi bị kiềm nén.',
		},
		personality: {
			meaning: 'Biểu đạt ra ngoài: vui vẻ, hoạt bát, thu hút.',
			positive: 'Tạo không khí cởi mở, hứng khởi.',
			negative: 'Hay đùa quá trớn, thiếu nghiêm túc.',
		},
		attitude: {
			meaning: 'Ấn tượng ban đầu: thân thiện, vui tính.',
			positive: 'Làm người khác thấy thoải mái.',
			negative: 'Bị coi là hời hợt, thiếu tin cậy.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: sáng tạo, biểu đạt, dí dỏm.',
			positive: 'Kết nối nhanh, làm người khác cười.',
			negative: 'Nói nhiều, làm ít; dễ bỏ cuộc.',
		},
		maturity: {
			meaning: 'Đỉnh cao: người truyền cảm hứng sáng tạo.',
			positive: 'Lời nói tạo sức mạnh chữa lành, kết nối.',
			negative: "Chỉ 'nói cho vui', thiếu tầm ảnh hưởng.",
		},
	},
	4: {
		lifePath: {
			meaning:
				'Con đường học kỷ luật – xây nền tảng – làm việc kiên trì.',
			positive: 'Tận tâm, có kế hoạch, xây dựng từng bước vững chắc.',
			negative: 'Cứng nhắc, sợ thay đổi, quá cầu toàn.',
		},
		destiny: {
			meaning:
				'Mục đích sống: tạo cấu trúc & hệ thống bền vững cho người khác.',
			positive: 'Xây dựng nền tảng vững chắc, tạo ra trật tự.',
			negative: 'Quá khắt khe, thiếu linh hoạt.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: được an toàn, ổn định và có trật tự.',
			positive: 'Bình an khi mọi thứ được tổ chức tốt.',
			negative: 'Lo âu khi thiếu kiểm soát, sợ hỗn loạn.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: thực tế, đáng tin cậy, có tổ chức.',
			positive: 'Tạo cảm giác an toàn, đáng tin cậy.',
			negative: 'Cứng nhắc, thiếu sự linh hoạt.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: thận trọng, có phương pháp.',
			positive: 'Tạo ra kết quả bền vững, chất lượng.',
			negative: 'Chậm chạp, thiếu sự sáng tạo.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: kiên nhẫn, chăm chỉ, có kỷ luật.',
			positive: 'Hoàn thành công việc từ đầu đến cuối.',
			negative: 'Quá cầu toàn, khó thích ứng.',
		},
		maturity: {
			meaning: 'Đỉnh cao: người xây dựng, tạo ra hệ thống bền vững.',
			positive: 'Để lại di sản vững chắc, được tôn trọng.',
			negative: 'Bảo thủ quá mức, cản trở sự phát triển.',
		},
	},
	5: {
		lifePath: {
			meaning: 'Con đường học tự do – linh hoạt – thích nghi – đổi mới.',
			positive: 'Linh hoạt, thích khám phá, tạo ra sự đa dạng.',
			negative: 'Thiếu kiên trì, tránh trách nhiệm, bốc đồng.',
		},
		destiny: {
			meaning: 'Mục đích sống: lan tỏa tinh thần tự do & đổi mới.',
			positive: 'Mang lại sự thay đổi tích cực, mở rộng tầm nhìn.',
			negative: 'Thay đổi vô mục đích, gây bất ổn.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: được tự do, khám phá, trải nghiệm.',
			positive: 'Hạnh phúc khi được du lịch, học hỏi điều mới.',
			negative: 'Bồn chồn khi bị ràng buộc, dễ nhàm chán.',
		},
		personality: {
			meaning:
				'Biểu hiện ra ngoài: năng động, thú vị, không thể đoán trước.',
			positive: 'Tạo sự hứng thú, mang lại năng lượng mới.',
			negative: 'Thiếu ổn định, khó dự đoán.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: linh hoạt, thích thử nghiệm.',
			positive: 'Thích ứng nhanh với thay đổi.',
			negative: 'Thiếu tập trung, dễ bỏ cuộc giữa chừng.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: tự do, phiêu lưu, hiếu kỳ.',
			positive: 'Học hỏi nhanh, thích ứng tốt.',
			negative: 'Không kiên trì, dễ phân tâm.',
		},
		maturity: {
			meaning: 'Đỉnh cao: người mang lại tự do và đổi mới.',
			positive: 'Trở thành catalyst cho sự thay đổi tích cực.',
			negative: 'Thay đổi vô định hướng, gây mất ổn định.',
		},
	},
	6: {
		lifePath: {
			meaning: 'Con đường học trách nhiệm – yêu thương – kiến tạo tổ ấm.',
			positive: 'Chăm sóc, bảo vệ, tạo ra môi trường ấm áp.',
			negative: 'Can thiệp quá mức, hy sinh bản thân.',
		},
		destiny: {
			meaning:
				'Mục đích sống: xây nền tảng tình thương & trách nhiệm cho cộng đồng.',
			positive: 'Chữa lành, nuôi dưỡng, tạo ra sự hòa hợp.',
			negative: 'Kiểm soát quá mức, áp đặt tình yêu.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: được yêu thương và chăm sóc người khác.',
			positive: 'Hạnh phúc khi gia đình hòa thuận, mọi người hạnh phúc.',
			negative: 'Đau khổ khi không được đánh giá cao.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: ấm áp, quan tâm, bảo vệ.',
			positive: 'Tạo cảm giác an toàn, được yêu thương.',
			negative: 'Can thiệp quá mức, tạo áp lực.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: chăm sóc, có trách nhiệm.',
			positive: 'Đặt nhu cầu người khác lên trước.',
			negative: 'Quên mất nhu cầu bản thân.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: yêu thương, chăm sóc, có trách nhiệm.',
			positive: 'Tạo ra môi trường hỗ trợ, nuôi dưỡng.',
			negative: 'Hy sinh quá mức, kiệt sức.',
		},
		maturity: {
			meaning: 'Đỉnh cao: người chữa lành, cố vấn gia đình và cộng đồng.',
			positive: 'Trở thành trụ cột tinh thần, được kính trọng.',
			negative: 'Kiểm soát quá mức, tạo ra phụ thuộc.',
		},
	},
	7: {
		lifePath: {
			meaning: 'Con đường tìm chân lý – sự thật – trí tuệ tâm linh.',
			positive:
				'Suy ngẫm sâu sắc, tìm kiếm ý nghĩa, phát triển trực giác.',
			negative: 'Cô lập, hoài nghi quá mức, trốn tránh thực tế.',
		},
		destiny: {
			meaning:
				'Mục đích: mang tri thức & minh triết để khai sáng cộng đồng.',
			positive: 'Chia sẻ kiến thức, dẫn dắt tâm linh.',
			negative: 'Giữ kiến thức cho riêng mình, kiêu ngạo.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: hiểu biết sự thật, tìm ý nghĩa cuộc sống.',
			positive: 'Hạnh phúc khi khám phá được bí ẩn, hiểu sâu sắc.',
			negative: 'Cô đơn khi không ai hiểu mình.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: bí ẩn, sâu sắc, trầm tĩnh.',
			positive: 'Tạo ấn tượng về sự thông thái, đáng tin cậy.',
			negative: 'Khó tiếp cận, xa cách.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: phân tích, nghiên cứu, tìm hiểu.',
			positive: 'Nhìn sâu vào bản chất vấn đề.',
			negative: 'Phân tích quá mức, chậm hành động.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: tìm tòi, nghiên cứu, trực giác.',
			positive: 'Khám phá những điều ẩn giấu, hiểu sâu.',
			negative: 'Cô lập bản thân, nghi ngờ người khác.',
		},
		maturity: {
			meaning: 'Đỉnh cao: nhà hiền triết, thầy tâm linh, nhà nghiên cứu.',
			positive: 'Trở thành nguồn trí tuệ, được tôn kính.',
			negative: 'Sống trong tháp ngà, xa rời thực tế.',
		},
	},
	8: {
		lifePath: {
			meaning: 'Con đường học quản trị – quyền lực – trách nhiệm xã hội.',
			positive: 'Lãnh đạo hiệu quả, tạo ra thành công bền vững.',
			negative: 'Ham quyền lực, coi thường người khác.',
		},
		destiny: {
			meaning: 'Mục đích: xây dựng thành công & ảnh hưởng thực tế.',
			positive: 'Tạo ra giá trị vật chất, công việc cho cộng đồng.',
			negative: 'Chỉ quan tâm đến lợi nhuận, bỏ qua con người.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: được công nhận, thành công, có ảnh hưởng.',
			positive: 'Hạnh phúc khi đạt được mục tiêu lớn.',
			negative: 'Căng thẳng khi thất bại, sợ mất kiểm soát.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: mạnh mẽ, quyền lực, chuyên nghiệp.',
			positive: 'Tạo ấn tượng về năng lực và uy quyền.',
			negative: 'Gây áp lực, khó gần.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: quyết đoán, tham vọng, thực tế.',
			positive: 'Biến ý tưởng thành hiện thực.',
			negative: 'Quá tập trung vào kết quả, bỏ qua quá trình.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: tham vọng, khả năng tổ chức, lãnh đạo.',
			positive: 'Quản lý tốt, đạt được mục tiêu.',
			negative: 'Áp lực thành công, bỏ qua cân bằng cuộc sống.',
		},
		maturity: {
			meaning:
				'Đỉnh cao: lãnh đạo doanh nghiệp, người có ảnh hưởng xã hội.',
			positive: 'Để lại di sản kinh doanh, tạo công ăn việc làm.',
			negative: 'Quyền lực mù quáng, tham lam.',
		},
	},
	9: {
		lifePath: {
			meaning: 'Con đường học phụng sự – nhân văn – trí tuệ.',
			positive: 'Bao dung, cống hiến, nhìn xa trông rộng.',
			negative: 'Hy sinh quá mức, lý tưởng hóa, dễ thất vọng.',
		},
		destiny: {
			meaning:
				'Mục đích: dùng trí tuệ & lòng nhân ái để nâng cao cộng đồng.',
			positive: 'Làm việc vì lợi ích chung, truyền cảm hứng.',
			negative: 'Áp đặt lý tưởng, phán xét người khác.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: cống hiến cho nhân loại, tạo ra ý nghĩa.',
			positive: 'Hạnh phúc khi giúp đỡ được nhiều người.',
			negative: 'Thất vọng khi thế giới không như mong đợi.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: từ bi, hiểu biết, bao dung.',
			positive: 'Tạo cảm giác được chấp nhận, hiểu.',
			negative: 'Có thể bị coi là xa cách, lý thuyết suông.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: nhân văn, toàn cầu, lý tưởng.',
			positive: 'Nhìn được bức tranh lớn, tìm giải pháp bền vững.',
			negative: 'Thiếu thực tế, khó áp dụng trong cuộc sống.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: nhân đạo, trí tuệ, lòng từ bi.',
			positive: 'Hiểu được nhu cầu của cộng đồng.',
			negative: 'Quá lý tưởng, không thực tế.',
		},
		maturity: {
			meaning: 'Đỉnh cao: nhà giáo dục, nhà từ thiện, lãnh đạo tâm linh.',
			positive: 'Trở thành ánh sáng dẫn đường cho nhiều người.',
			negative: 'Kiệt sức vì cống hiến quá mức.',
		},
	},
	11: {
		lifePath: {
			meaning:
				'Con đường học khai sáng và truyền cảm hứng bằng trực giác – lòng nhân ái.',
			positive:
				'Dùng trực giác dẫn dắt người khác; sống cân bằng giữa tâm linh và đời thường.',
			negative:
				'Dễ lạc lối trong mơ hồ, hoang tưởng; quá nhạy cảm, stress.',
		},
		destiny: {
			meaning: 'Mục đích: thắp sáng và nâng độ ý thức cộng đồng.',
			positive: 'Biết truyền cảm hứng bằng sự khiêm nhường.',
			negative: "Muốn trở thành 'cứu thế'; kiêu ngạo tâm linh.",
		},
		soul: {
			meaning:
				'Mong muốn sâu xa: được kết nối với nguồn sáng & truyền cảm hứng.',
			positive: 'Tìm thấy ý nghĩa khi dẫn dắt người khác thức tỉnh.',
			negative: 'Dễ hoang tưởng, sống trong mơ mộng.',
		},
		personality: {
			meaning: 'Biểu hiện: nhạy cảm, tinh tế, thu hút tâm linh.',
			positive: 'Tỏa sáng tự nhiên, người khác muốn lắng nghe.',
			negative: 'Dễ mệt mỏi, thu mình.',
		},
		attitude: {
			meaning: 'Khí chất: huyền bí, truyền cảm hứng.',
			positive: 'Mang lại cảm giác an lành, tin tưởng.',
			negative: "Khi mất cân bằng, người khác thấy 'ảo tưởng'.",
		},
		birthday: {
			meaning:
				'Tố chất bẩm sinh: nhạy cảm, trực giác, thiên hướng tâm linh.',
			positive: 'Nhìn sâu sắc, nắm bắt ẩn ý.',
			negative: 'Dễ lo âu, trầm cảm.',
		},
		maturity: {
			meaning:
				'Đỉnh cao: người thắp sáng cộng đồng, để lại di sản tâm linh – trí tuệ.',
			positive: 'Được kính trọng như nhà tiên tri, thầy lớn.',
			negative: 'Ảo tưởng vĩ đại, xa rời thực tế.',
		},
	},
	22: {
		lifePath: {
			meaning:
				'Con đường học kiến tạo bền vững – hệ thống hóa tầm nhìn lớn.',
			positive:
				'Xây dựng những công trình vĩ đại, tạo ra hệ thống bền vững.',
			negative: 'Áp lực quá lớn, hoang tưởng về quy mô.',
		},
		destiny: {
			meaning:
				'Mục đích: xây dựng công trình/hệ thống lớn cho nhân loại.',
			positive: 'Tạo ra di sản bền vững cho thế giới.',
			negative: 'Tham vọng quá lớn, không thực tế.',
		},
		soul: {
			meaning:
				'Mong muốn sâu thẳm: tạo ra những thay đổi có tầm ảnh hưởng lớn.',
			positive: 'Hạnh phúc khi nhìn thấy tác động tích cực rộng lớn.',
			negative: 'Thất vọng khi không đạt được mục tiêu vĩ đại.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: có tầm nhìn, thực tế, quyền lực.',
			positive: 'Tạo ấn tượng về khả năng thực hiện điều lớn lao.',
			negative: 'Gây áp lực, khó tiếp cận.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: tầm nhìn lớn, thực tế, có hệ thống.',
			positive: 'Biến tầm nhìn thành hiện thực.',
			negative: 'Quá tham vọng, bỏ qua chi tiết.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: khả năng xây dựng lớn, tầm nhìn xa.',
			positive: 'Có thể tạo ra những thành tựu vĩ đại.',
			negative: 'Áp lực thành công, căng thẳng.',
		},
		maturity: {
			meaning: 'Đỉnh cao: Master Builder, để lại di sản cho nhân loại.',
			positive: 'Tạo ra những công trình có tầm ảnh hưởng quốc tế.',
			negative: 'Kiệt sức vì tham vọng quá lớn.',
		},
	},
	33: {
		lifePath: {
			meaning: 'Con đường học tình yêu phụng sự & trách nhiệm cộng đồng.',
			positive: 'Yêu thương vô điều kiện, chữa lành cộng đồng.',
			negative: 'Hy sinh quá mức, kiệt sức vì tình yêu.',
		},
		destiny: {
			meaning:
				'Mục đích: lan tỏa tình yêu, chữa lành, trở thành thầy/cô giáo tình thần.',
			positive: 'Chữa lành tâm hồn, dạy về tình yêu.',
			negative: 'Áp đặt tình yêu, can thiệp quá mức.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: yêu thương và chữa lành mọi người.',
			positive: 'Hạnh phúc khi mọi người được chữa lành.',
			negative: 'Đau khổ khi không thể giúp được ai.',
		},
		personality: {
			meaning: 'Biểu hiện ra ngoài: từ bi, chữa lành, yêu thương.',
			positive: 'Tạo cảm giác an toàn, được yêu thương vô điều kiện.',
			negative: 'Có thể tạo áp lực về tình yêu.',
		},
		attitude: {
			meaning: 'Cách tiếp cận: tình yêu, từ bi, chữa lành.',
			positive: 'Mang lại sự chữa lành cho mọi người.',
			negative: 'Quên mất bản thân, kiệt sức.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: yêu thương, chữa lành, giáo dục.',
			positive: 'Có khả năng chữa lành mạnh mẽ.',
			negative: 'Quá nhạy cảm, dễ bị tổn thương.',
		},
		maturity: {
			meaning:
				'Đỉnh cao: Master Teacher của tình yêu, chữa lành toàn cầu.',
			positive: 'Trở thành biểu tượng của tình yêu và từ bi.',
			negative: 'Kiệt sức vì cống hiến quá mức cho tình yêu.',
		},
	},
};

export { baseVowels, letterValues, vietnameseAccents, numberDetails };
