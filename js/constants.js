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
	// Giữ nguyên các số 4 → 10, 22, 33 vì không có lỗi chính tả
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
};

export { baseVowels, letterValues, vietnameseAccents, numberDetails };
