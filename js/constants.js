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

// Number descriptions for all numerology numbers
const descriptions = {
	lifePathDescriptions: {
		1: 'Con đường học tự chủ và tiên phong; dám chọn lối riêng, dẫn dắt bằng gương mẫu.',
		2: 'Con đường học hợp tác – cân bằng – kiên nhẫn.',
		3: 'Con đường học biểu đạt & lan tỏa niềm vui.',
		4: 'Con đường học kỷ luật – xây nền tảng – làm việc kiên trì.',
		5: 'Con đường học tự do – linh hoạt – thích nghi – đổi mới.',
		6: 'Con đường học trách nhiệm – yêu thương – kiến tạo tổ ấm.',
		7: 'Con đường tìm chân lý – sự thật – trí tuệ tâm linh.',
		8: 'Con đường học quản trị – quyền lực – trách nhiệm xã hội.',
		9: 'Con đường học phụng sự – nhân văn – trí tuệ.',
		11: 'Con đường học khai sáng và truyền cảm hứng bằng trực giác – lòng nhân ái.',
		22: 'Con đường học kiến tạo bền vững – hệ thống hóa tầm nhìn lớn.',
		33: 'Con đường học tình yêu phụng sự & trách nhiệm cộng đồng.',
	},
	destinyDescriptions: {
		1: 'Mục đích sống là khởi xướng giá trị mới cho tập thể/cộng đồng.',
		2: 'Sứ mệnh trở thành người kết nối, bắc cầu giữa con người.',
		3: 'Sứ mệnh trở thành người truyền cảm hứng qua biểu đạt.',
		4: 'Mục đích sống: tạo cấu trúc & hệ thống bền vững cho người khác.',
		5: 'Mục đích sống: lan tỏa tinh thần tự do & đổi mới.',
		6: 'Mục đích sống: xây nền tảng tình thương & trách nhiệm cho cộng đồng.',
		7: 'Mục đích: mang tri thức & minh triết để khai sáng cộng đồng.',
		8: 'Mục đích: xây dựng thành công & ảnh hưởng thực tế.',
		9: 'Mục đích: dùng trí tuệ & lòng nhân ái để nâng cao cộng đồng.',
		11: 'Mục đích: thắp sáng và nâng độ ý thức cộng đồng.',
		22: 'Mục đích: xây dựng công trình/hệ thống lớn cho nhân loại.',
		33: 'Mục đích: lan tỏa tình yêu, chữa lành, trở thành thầy/cô giáo tình thần.',
	},
	soulUrgeDescriptions: {
		1: 'Trong sâu thẳm, bạn khát khao được lãnh đạo và độc lập. Bạn muốn được công nhận như một người tiên phong và có ảnh hưởng. Hãy theo đuổi những mục tiêu mà bạn thực sự đam mê.',
		2: 'Trong sâu thẳm, bạn khát khao hòa bình và sự kết nối. Bạn muốn được yêu thương và tạo ra sự hài hòa xung quanh mình. Hãy tìm kiếm những mối quan hệ sâu sắc và ý nghĩa.',
		3: 'Trong sâu thẳm, bạn khát khao được thể hiện bản thân sáng tạo. Bạn muốn mang lại niềm vui và cảm hứng cho người khác. Hãy theo đuổi những hoạt động nghệ thuật và sáng tạo.',
		4: 'Trong sâu thẳm, bạn khát khao sự ổn định và an toàn. Bạn muốn xây dựng một nền tảng vững chắc cho cuộc sống. Hãy tập trung vào việc tạo ra trật tự và cấu trúc.',
		5: 'Trong sâu thẳm, bạn khát khao tự do và phiêu lưu. Bạn muốn khám phá thế giới và trải nghiệm những điều mới mẻ. Hãy cho phép bản thân được du lịch và khám phá.',
		6: 'Trong sâu thẳm, bạn khát khao được chăm sóc và nuôi dưỡng người khác. Bạn muốn tạo ra một môi trường ấm áp và yêu thương. Hãy dành thời gian cho gia đình và những người thân yêu.',
		7: 'Trong sâu thẳm, bạn khát khao hiểu biết và sự thật. Bạn muốn khám phá những bí ẩn của cuộc sống và vũ trụ. Hãy dành thời gian cho việc học hỏi và tìm hiểu tâm linh.',
		8: 'Trong sâu thẳm, bạn khát khao thành công và công nhận. Bạn muốn đạt được địa vị và ảnh hưởng trong xã hội. Hãy theo đuổi những mục tiêu kinh doanh và tài chính của mình.',
		9: 'Trong sâu thẳm, bạn khát khao cống hiến cho nhân loại. Bạn muốn tạo ra sự khác biệt tích cực trên thế giới. Hãy tham gia vào những hoạt động từ thiện và xã hội.',
		11: 'Trong sâu thẳm, bạn khát khao kết nối với điều thiêng liêng. Bạn muốn truyền cảm hứng tâm linh cho người khác. Hãy phát triển khả năng trực giác và tâm linh của mình.',
		22: 'Trong sâu thẳm, bạn khát khao tạo ra những thành tựu vĩ đại. Bạn muốn để lại dấu ấn lớn lao cho thế giới. Hãy theo đuổi những dự án có tầm ảnh hưởng rộng lớn.',
		33: 'Trong sâu thẳm, bạn khát khao yêu thương và chữa lành. Bạn muốn mang tình yêu vô điều kiện đến với mọi người. Hãy phát triển lòng từ bi và khả năng chữa lành của mình.',
	},
	personalityDescriptions: {
		1: 'Người khác nhìn bạn như một người lãnh đạo tự tin và quyết đoán. Bạn toát lên vẻ độc lập và mạnh mẽ, khiến người khác tin tưởng và muốn theo bạn. Bạn có khí chất của một người tiên phong.',
		2: 'Người khác nhìn bạn như một người hòa đồng và dễ gần. Bạn toát lên vẻ nhẹ nhàng và thân thiện, khiến mọi người cảm thấy thoải mái khi ở bên bạn. Bạn có khí chất của một người hòa giải.',
		3: 'Người khác nhìn bạn như một người vui vẻ và sáng tạo. Bạn toát lên vẻ năng động và hấp dẫn, khiến mọi người muốn ở gần bạn để cảm nhận năng lượng tích cực. Bạn có khí chất của một nghệ sĩ.',
		4: 'Người khác nhìn bạn như một người đáng tin cậy và thực tế. Bạn toát lên vẻ ổn định và có tổ chức, khiến mọi người tin tưởng vào khả năng của bạn. Bạn có khí chất của một người xây dựng.',
		5: 'Người khác nhìn bạn như một người tự do và thú vị. Bạn toát lên vẻ năng động và không thể đoán trước, khiến mọi người tò mò về những gì bạn sẽ làm tiếp theo. Bạn có khí chất của một nhà thám hiểm.',
		6: 'Người khác nhìn bạn như một người ấm áp và quan tâm. Bạn toát lên vẻ chăm sóc và bảo vệ, khiến mọi người cảm thấy an toàn và được yêu thương khi ở bên bạn. Bạn có khí chất của một người mẹ.',
		7: 'Người khác nhìn bạn như một người bí ẩn và thông thái. Bạn toát lên vẻ sâu sắc và trầm tĩnh, khiến mọi người tôn trọng và muốn tìm hiểu về bạn. Bạn có khí chất của một nhà hiền triết.',
		8: 'Người khác nhìn bạn như một người thành công và quyền lực. Bạn toát lên vẻ chuyên nghiệp và có uy quyền, khiến mọi người kính trọng và tin tưởng vào khả năng lãnh đạo của bạn. Bạn có khí chất của một CEO.',
		9: 'Người khác nhìn bạn như một người bao dung và hiểu biết. Bạn toát lên vẻ trí tuệ và lòng từ bi, khiến mọi người cảm thấy được hiểu và chấp nhận. Bạn có khí chất của một người thầy.',
		11: 'Người khác nhìn bạn như một người đặc biệt và truyền cảm hứng. Bạn toát lên vẻ tâm linh và chiều sâu, khiến mọi người cảm thấy được nâng đỡ về mặt tinh thần khi ở gần bạn.',
		22: 'Người khác nhìn bạn như một người có tầm nhìn và khả năng thực hiện lớn lao. Bạn toát lên vẻ của một người có thể tạo ra những thay đổi có ý nghĩa cho thế giới.',
		33: 'Người khác nhìn bạn như một người chữa lành và yêu thương. Bạn toát lên vẻ từ bi và sự chấp nhận vô điều kiện, khiến mọi người cảm thấy được chữa lành khi ở gần bạn.',
	},
	birthdayDescriptions: {
		1: 'Ngày sinh 1 mang năng lượng lãnh đạo. Bạn có tinh thần độc lập, sáng tạo và thích khởi xướng. Bạn là người tiên phong và có khả năng dẫn dắt người khác.',
		2: 'Ngày sinh 2 mang năng lượng hợp tác. Bạn có khả năng làm việc nhóm xuất sắc, nhạy cảm với cảm xúc người khác và thích hòa giải.',
		3: 'Ngày sinh 3 mang năng lượng sáng tạo. Bạn có tài năng nghệ thuật, giao tiếp tốt và luôn tràn đầy năng lượng tích cực.',
		4: 'Ngày sinh 4 mang năng lượng ổn định. Bạn thực tế, chăm chỉ, có tính kỷ luật cao và thích xây dựng nền tảng vững chắc.',
		5: 'Ngày sinh 5 mang năng lượng tự do. Bạn thích khám phá, phiêu lưu, thay đổi và không muốn bị ràng buộc.',
		6: 'Ngày sinh 6 mang năng lượng chăm sóc. Bạn có bản năng bảo vệ, yêu thương gia đình và quan tâm đến cộng đồng.',
		7: 'Ngày sinh 7 mang năng lượng tâm linh. Bạn thích tìm hiểu, nghiên cứu và khám phá những bí ẩn của cuộc sống.',
		8: 'Ngày sinh 8 mang năng lượng thành công. Bạn có tham vọng lớn, khả năng quản lý tốt và hướng tới thành tựu vật chất.',
		9: 'Ngày sinh 9 mang năng lượng nhân đạo. Bạn có tầm nhìn rộng, lòng từ bi và muốn cống hiến cho xã hội.',
		10: 'Ngày sinh 10 mang năng lượng lãnh đạo sáng tạo. Bạn kết hợp sự độc lập với khả năng sáng tạo độc đáo.',
		11: 'Ngày sinh 11 mang năng lượng trực giác mạnh. Bạn có khả năng truyền cảm hứng và kết nối với điều thiêng liêng.',
		12: 'Ngày sinh 12 mang năng lượng sáng tạo hợp tác. Bạn có thể kết hợp tài năng cá nhân với khả năng làm việc nhóm.',
		13: 'Ngày sinh 13 mang năng lượng sáng tạo thực tế. Bạn có khả năng biến ý tưởng thành hiện thực thông qua công việc chăm chỉ.',
		14: 'Ngày sinh 14 mang năng lượng tự do có kỷ luật. Bạn cần sự đa dạng nhưng vẫn có thể tổ chức và quản lý tốt.',
		15: 'Ngày sinh 15 mang năng lượng chăm sóc linh hoạt. Bạn quan tâm đến gia đình nhưng cũng cần không gian cá nhân.',
		16: 'Ngày sinh 16 mang năng lượng tâm linh trực giác. Bạn có khả năng nhìn thấu bản chất và tìm hiểu ý nghĩa sâu xa.',
		17: 'Ngày sinh 17 mang năng lượng thành công tâm linh. Bạn có thể đạt được thành tựu vật chất mà vẫn giữ được giá trị tinh thần.',
		18: 'Ngày sinh 18 mang năng lượng nhân đạo thực tế. Bạn muốn giúp đỡ người khác thông qua các hành động cụ thể.',
		19: 'Ngày sinh 19 mang năng lượng lãnh đạo độc lập. Bạn có khả năng dẫn dắt mà vẫn giữ được cá tính riêng.',
		20: 'Ngày sinh 20 mang năng lượng hợp tác nhạy cảm. Bạn có khả năng cảm nhận và hòa hợp với năng lượng xung quanh.',
		21: 'Ngày sinh 21 mang năng lượng sáng tạo hợp tác. Bạn có thể tạo ra những điều đẹp đẽ khi làm việc với người khác.',
		22: 'Ngày sinh 22 mang năng lượng Master Builder. Bạn có khả năng tạo ra những thành tựu lớn lao có tầm ảnh hưởng rộng rãi.',
		23: 'Ngày sinh 23 mang năng lượng giao tiếp linh hoạt. Bạn có khả năng truyền đạt ý tưởng một cách sinh động và thuyết phục.',
		24: 'Ngày sinh 24 mang năng lượng xây dựng gia đình. Bạn có khả năng tạo ra môi trường ấm áp và ổn định cho những người thân yêu.',
		25: 'Ngày sinh 25 mang năng lượng tìm tòi trực giác. Bạn có khả năng khám phá và hiểu biết thông qua trực giác mạnh mẽ.',
		26: 'Ngày sinh 26 mang năng lượng kinh doanh nhân văn. Bạn có thể thành công trong kinh doanh mà vẫn quan tâm đến con người.',
		27: 'Ngày sinh 27 mang năng lượng giáo dục nhân đạo. Bạn có khả năng dạy dỗ và hướng dẫn người khác một cách từ bi.',
		28: 'Ngày sinh 28 mang năng lượng lãnh đạo cân bằng. Bạn có thể lãnh đạo hiệu quả mà vẫn quan tâm đến nhu cầu của mọi người.',
		29: 'Ngày sinh 29 mang năng lượng trực giác nhân đạo. Bạn có khả năng cảm nhận và giúp đỡ người khác thông qua trực giác sâu sắc.',
		30: 'Ngày sinh 30 mang năng lượng sáng tạo vui vẻ. Bạn có khả năng mang lại niềm vui và sự sáng tạo cho cuộc sống.',
		31: 'Ngày sinh 31 mang năng lượng sáng tạo thực tế. Bạn có khả năng biến những ý tưởng sáng tạo thành hiện thực.',
	},
	attitudeDescriptions: {
		1: 'Thái độ số 1: Bạn tiếp cận cuộc sống với tinh thần lãnh đạo và độc lập. Bạn thích làm chủ tình hình và không ngại đối mặt với thử thách.',
		2: 'Thái độ số 2: Bạn tiếp cận cuộc sống với tinh thần hợp tác và nhạy cảm. Bạn thích làm việc cùng người khác và tạo ra sự hòa hợp.',
		3: 'Thái độ số 3: Bạn tiếp cận cuộc sống với tinh thần sáng tạo và lạc quan. Bạn luôn tìm cách làm cho mọi thứ trở nên thú vị và sinh động.',
		4: 'Thái độ số 4: Bạn tiếp cận cuộc sống với tinh thần thực tế và có tổ chức. Bạn thích lập kế hoạch chi tiết và làm việc một cách có hệ thống.',
		5: 'Thái độ số 5: Bạn tiếp cận cuộc sống với tinh thần tự do và phiêu lưu. Bạn thích khám phá những điều mới mẻ và không muốn bị ràng buộc.',
		6: 'Thái độ số 6: Bạn tiếp cận cuộc sống với tinh thần chăm sóc và trách nhiệm. Bạn luôn quan tâm đến gia đình và cộng đồng xung quanh.',
		7: 'Thái độ số 7: Bạn tiếp cận cuộc sống với tinh thần tìm tòi và tâm linh. Bạn thích suy ngẫm sâu sắc về ý nghĩa của mọi sự việc.',
		8: 'Thái độ số 8: Bạn tiếp cận cuộc sống với tinh thần thành công và quyết đoán. Bạn hướng tới các mục tiêu lớn và không ngại chấp nhận rủi ro.',
		9: 'Thái độ số 9: Bạn tiếp cận cuộc sống với tinh thần nhân đạo và bao dung. Bạn quan tâm đến lợi ích chung và muốn cống hiến cho xã hội.',
	},
	maturityDescriptions: {
		1: 'Số Trưởng Thành 1: Trong nửa đời sau, bạn sẽ phát triển khả năng lãnh đạo mạnh mẽ hơn. Bạn trở nên độc lập, tự tin và có khả năng khởi xướng những dự án mới. Đây là thời kỳ bạn thực sự trở thành người tiên phong.',
		2: 'Số Trưởng Thành 2: Trong nửa đời sau, bạn sẽ phát triển khả năng hợp tác và cân bằng. Bạn trở nên nhạy cảm hơn với nhu cầu của người khác và có khả năng xây dựng những mối quan hệ sâu sắc, ý nghĩa.',
		3: 'Số Trưởng Thành 3: Trong nửa đời sau, bạn sẽ phát triển khả năng sáng tạo và giao tiếp. Bạn có thể trở thành người truyền cảm hứng, nghệ sĩ hoặc diễn giả tài ba, mang lại niềm vui cho nhiều người.',
		4: 'Số Trưởng Thành 4: Trong nửa đời sau, bạn sẽ phát triển khả năng xây dựng và tổ chức. Bạn trở thành người đáng tin cậy, có thể tạo ra những nền tảng vững chắc cho bản thân và người khác.',
		5: 'Số Trưởng Thành 5: Trong nửa đời sau, bạn sẽ phát triển khả năng thích ứng và khám phá. Bạn có thể trở thành người du lịch, nhà thám hiểm hoặc người đem lại những thay đổi tích cực cho xã hội.',
		6: 'Số Trưởng Thành 6: Trong nửa đời sau, bạn sẽ phát triển khả năng chăm sóc và nuôi dưỡng. Bạn trở thành người cố vấn, thầy giáo hoặc người chăm sóc, mang lại sự ấm áp cho cộng đồng.',
		7: 'Số Trưởng Thành 7: Trong nửa đời sau, bạn sẽ phát triển khả năng tâm linh và trí tuệ. Bạn có thể trở thành nhà nghiên cứu, triết gia hoặc người dẫn dắt tâm linh, tìm kiếm những sự thật sâu xa.',
		8: 'Số Trưởng Thành 8: Trong nửa đời sau, bạn sẽ phát triển khả năng quản lý và kinh doanh. Bạn có thể đạt được thành công lớn về mặt vật chất và trở thành người có ảnh hưởng trong xã hội.',
		9: 'Số Trưởng Thành 9: Trong nửa đời sau, bạn sẽ phát triển khả năng phục vụ nhân loại. Bạn trở thành người có tầm nhìn toàn cầu, có thể cống hiến cho những mục tiêu cao cả và tạo ra tác động tích cực rộng lớn.',
		11: 'Số Trưởng Thành 11: Trong nửa đời sau, bạn sẽ phát triển khả năng truyền cảm hứng tâm linh. Bạn trở thành người thầy, người chữa lành hoặc người đem ánh sáng tâm linh đến cho nhiều người.',
		22: 'Số Trưởng Thành 22: Trong nửa đời sau, bạn sẽ phát triển khả năng xây dựng những dự án vĩ đại. Bạn có thể tạo ra những thay đổi có tầm ảnh hưởng quốc tế và để lại di sản lớn lao cho thế giới.',
		33: 'Số Trưởng Thành 33: Trong nửa đời sau, bạn sẽ phát triển khả năng yêu thương và chữa lành vô điều kiện. Bạn trở thành người thầy của tình yêu, có thể chữa lành tâm hồn của nhiều người thông qua lòng từ bi.',
	},
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
				'Lề thước, chần chừ; hoặc độc đoán, nóng nảy, thích áp đặt.',
		},
		destiny: {
			meaning:
				'Mục đích sống là khởi xướng gia trị mới cho tập thể/cộng đồng.',
			positive: 'Tạo tâm điểm, kích hoạt người khác hành động.',
			negative:
				'Dễ bị lung lay bởi phản xét; hoặc muốn chứng tỏ quá mức.',
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
			positive: 'Bình an khi cảm thấy gần bó, được tin cậy.',
			negative: 'Lệ thuộc tình cảm, dễ mất minh trong mối quan hệ.',
		},
		personality: {
			meaning: 'Bề ngoài dịu dàng, mềm mại, thận thiện.',
			positive: 'Tạo cảm giác dễ gần, dễ chia sẻ.',
			negative: 'Quá nhút nhát, ngại va chạm, dễ bị lấn lướt.',
		},
		attitude: {
			meaning: 'Cách tiếp cận nhẹ nhàng, kiên nhẫn.',
			positive: 'Giúp tạp thể thấy an toàn, yên tâm.',
			negative: 'Tránh né mâu thuẫn, thiếu quyết đoán.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: tinh tế, cảm xúc, trực giác.',
			positive: 'Dễ đồng cảm, tạo không khí hòa hợp.',
			negative: 'Quá nhạy cảm, dễ tự ái.',
		},
		maturity: {
			meaning:
				'Định cao: người nuôi dưỡng, hòa giải viên; trực giác sâu sắc.',
			positive: 'Trở thành điểm tựa tinh thần, được tin cậy.',
			negative: 'Đánh mất bản thân trong việc làm hài lòng người khác.',
		},
	},
	3: {
		lifePath: {
			meaning: 'Con đường học biểu đạt & lan tỏa niềm vui.',
			positive: 'Hài hước, sáng tạo, giao tiếp hiệu quả.',
			negative: 'Phân tán, nóng nổi, tránh trách nhiệm.',
		},
		destiny: {
			meaning: 'Sứ mệnh trở thành người truyền cảm hứng qua biểu đạt.',
			positive: 'Mang năng lượng tích cực, lan tỏa sự lạc quan.',
			negative: 'Sống bề ngoại, chạy theo niềm vui tạm thời.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: được vui, được tự do biểu đạt.',
			positive: 'Hạnh phúc khi được chia sẻ, sáng tạo.',
			negative: 'Dễ hụt hẫng khi bị kiếm nén.',
		},
		personality: {
			meaning: 'Biều đạt ra ngoài: vui vẻ, hoạt bát, thu hút.',
			positive: 'Tạo không khí cởi mở, hứng khởi.',
			negative: 'Hay đưa quá trớn, thiếu nghiêm túc.',
		},
		attitude: {
			meaning: 'Án tướng ban đầu: thân thiện, vui tính.',
			positive: 'Làm người khác thấy thoải mái.',
			negative: 'Bị coi là hời hợt, thiếu tín cây.',
		},
		birthday: {
			meaning: 'Tố chất bẩm sinh: sáng tạo, biếu đạt, di dộm.',
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
			meaning: 'Con đường học kỷ luật – xây nền tảng – làm việc kiên trì.',
			positive: 'Tận tâm, có kế hoạch, xây dựng từng bước vững chắc.',
			negative: 'Cứng nhắc, sợ thay đổi, quá cầu toàn.',
		},
		destiny: {
			meaning: 'Mục đích sống: tạo cấu trúc & hệ thống bền vững cho người khác.',
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
			meaning: 'Biểu hiện ra ngoài: năng động, thú vị, không thể đoán trước.',
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
			meaning: 'Mục đích sống: xây nền tảng tình thương & trách nhiệm cho cộng đồng.',
			positive: 'Chữa lành, nuôi dưỡng, tạo ra sự hòa hợp.',
			negative: 'Kiểm soát quá mức, áp đặt tình yêu.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: được yêu thương và chăm sóc người khác.',
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
			positive: 'Suy ngẫm sâu sắc, tìm kiếm ý nghĩa, phát triển trực giác.',
			negative: 'Cô lập, hoài nghi quá mức, trốn tránh thực tế.',
		},
		destiny: {
			meaning: 'Mục đích: mang tri thức & minh triết để khai sáng cộng đồng.',
			positive: 'Chia sẻ kiến thức, dẫn dắt tâm linh.',
			negative: 'Giữ kiến thức cho riêng mình, kiêu ngạo.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: hiểu biết sự thật, tìm ý nghĩa cuộc sống.',
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
			meaning: 'Mong muốn sâu thẳm: được công nhận, thành công, có ảnh hưởng.',
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
			meaning: 'Đỉnh cao: lãnh đạo doanh nghiệp, người có ảnh hưởng xã hội.',
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
			meaning: 'Mục đích: dùng trí tuệ & lòng nhân ái để nâng cao cộng đồng.',
			positive: 'Làm việc vì lợi ích chung, truyền cảm hứng.',
			negative: 'Áp đặt lý tưởng, phán xét người khác.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: cống hiến cho nhân loại, tạo ra ý nghĩa.',
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
				'Tố chất bẩm sinh: nhạy cảm, trực giác, thiện hướng tâm linh.',
			positive: 'Nhìn sâu sắc, nắm bắt ấn ý.',
			negative: 'Dễ lo âu, trầm cảm.',
		},
		maturity: {
			meaning:
				'Định cao: người thắp sáng cộng đồng, để lại di sản tâm linh – trí tuệ.',
			positive: 'Được kính trọng như nhà tiên tri, thầy lớn.',
			negative: 'Ảo tưởng vĩ cuồng, xa rời thực tế.',
		},
	},
	22: {
		lifePath: {
			meaning: 'Con đường học kiến tạo bền vững – hệ thống hóa tầm nhìn lớn.',
			positive: 'Xây dựng những công trình vĩ đại, tạo ra hệ thống bền vững.',
			negative: 'Áp lực quá lớn, hoang tưởng về quy mô.',
		},
		destiny: {
			meaning: 'Mục đích: xây dựng công trình/hệ thống lớn cho nhân loại.',
			positive: 'Tạo ra di sản bền vững cho thế giới.',
			negative: 'Tham vọng quá lớn, không thực tế.',
		},
		soul: {
			meaning: 'Mong muốn sâu thẳm: tạo ra những thay đổi có tầm ảnh hưởng lớn.',
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
			meaning: 'Mục đích: lan tỏa tình yêu, chữa lành, trở thành thầy/cô giáo tình thần.',
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
			meaning: 'Đỉnh cao: Master Teacher của tình yêu, chữa lành toàn cầu.',
			positive: 'Trở thành biểu tượng của tình yêu và từ bi.',
			negative: 'Kiệt sức vì cống hiến quá mức cho tình yêu.',
		},
	},
};

export {
	descriptions,
	baseVowels,
	letterValues,
	vietnameseAccents,
	numberDetails,
};
