import { descriptions } from './constants.js';

// PDF Export functionality

// Helper function to get detailed number info for PDF
function getNumberDetails(number, type) {
	const imagePath =
		number === 11
			? '11-master.png'
			: number === 22
			? '22-master.png'
			: number === 33
			? '33-master.png'
			: `${number}.png`;

	return {
		imagePath,
		coreStrengths: getCoreStrengths(number, type),
		positiveTraits: getPositiveTraits(number, type),
		negativeTraits: getNegativeTraits(number, type),
	};
}

function getCoreStrengths(number, type) {
	const strengths = {
		personality: {
			1: 'Con đường học tư chủ và tiên phong; dám chấp lời riêng, dẫn dắt bằng gương mẫu.',
			2: 'Con đường học hợp tác – cân bằng – kiên nhẫn.',
			3: 'Mong muốn sâu thẳm: được tự do lựa chọn & tự quyết; được công nhận năng lực.',
			4: 'Cách thể hiện ra ngoài: nhanh nhện, quyết đoán, thẳng thắn.',
			5: 'Án trường ban đầu/khi chật: mạnh mẽ, chủ động.',
			6: 'Tố chất bẩm sinh: bật đầu việc mới, tự lập, thích thử thách.',
			7: 'Định cao đời sống: quyền lực nội tại và vị thế dẫn dắt dựa trên đức tin vào chính mình & gia trị phụng sự.',
			8: 'Con đường học hợp tác – cân bằng – kiên nhẫn.',
			9: 'Mong muốn sâu thẳm: được kết nối, được yêu thương, được an toàn trong quan hệ.',
		},
	};
	return strengths[type] && strengths[type][number]
		? strengths[type][number]
		: `Đặc điểm cốt lõi cho số ${number}`;
}

function getPositiveTraits() {
	return `Chủ động, "tôi chịu trách nhiệm", đặt mục tiêu rõ – hành động nhanh, biết xin hỗ trợ khi cần.`;
}

function getNegativeTraits() {
	return `Lê thuộc, chần chừ; hoặc độc đoán, nóng nảy, thích áp đặt.`;
}

// Create PDF page content
function createPage1Content() {
	const page1Content = document.createElement('div');
	page1Content.style.cssText = `
		width: 210mm;
		padding: 20px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background: white;
		color: black;
		font-size: 14px;
		line-height: 1.5;
	`;

	page1Content.innerHTML = `
		<div style="text-align: center; margin-bottom: 30px;">
			<h1 style="color: #667eea; font-size: 24px; margin-bottom: 10px;">🔮 BÁO CÁO THẦN SỐ HỌC</h1>
			<p style="color: #666; font-style: italic;">Khám phá bản thân thông qua sức mạnh của con số</p>
		</div>
		
		<div style="margin-bottom: 30px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
			<h3 style="color: #333; margin-bottom: 15px;">THÔNG TIN CÁ NHÂN</h3>
			<p><strong>Họ và tên:</strong> ${calculatedData.fullName}</p>
			<p><strong>Ngày sinh:</strong> ${new Date(
				calculatedData.birthDate,
			).toLocaleDateString('vi-VN')}</p>
			<p><strong>Ngày tạo báo cáo:</strong> ${new Date().toLocaleDateString(
				'vi-VN',
			)}</p>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🌟 SỐ ĐƯỜNG ĐỜI (LIFE PATH NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.lifePathNumber
			}</div>
			<p style="text-align: justify;">${
				descriptions.lifePathDescriptions[calculatedData.lifePathNumber]
			}</p>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🎯 SỐ ĐỊNH MỆNH (DESTINY NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.destinyNumber
			}</div>
			<p style="text-align: justify;">${
				descriptions.destinyDescriptions[calculatedData.destinyNumber]
			}</p>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #feca57, #ff9ff3); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">💖 SỐ KHÁT KHAO TÂM HỒN (SOUL URGE NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.soulUrgeNumber
			}</div>
			<p style="text-align: justify;">${
				descriptions.soulUrgeDescriptions[calculatedData.soulUrgeNumber]
			}</p>
		</div>

		<div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-style: italic;">
			<p>Báo cáo này được tạo bởi Trang Web Thần Số Học</p>
			<p style="font-size: 12px; margin-top: 10px;">"Con số không chỉ là ký hiệu, mà còn là chìa khóa mở ra những bí mật của cuộc sống"</p>
		</div>
	`;

	return page1Content;
}

function createPage2Content() {
	const page2Content = document.createElement('div');
	page2Content.style.cssText = `
		width: 210mm;
		padding: 20px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background: white;
		color: black;
		font-size: 14px;
		line-height: 1.5;
	`;

	const personalityDetails = getNumberDetails(
		calculatedData.personalityNumber,
		'personality',
	);
	const birthdayDetails = getNumberDetails(
		calculatedData.birthdayNumber,
		'birthday',
	);
	const attitudeDetails = getNumberDetails(
		calculatedData.attitudeNumber,
		'attitude',
	);
	const maturityDetails = getNumberDetails(
		calculatedData.maturityNumber,
		'maturity',
	);

	page2Content.innerHTML = `
		<div style="text-align: center; margin-bottom: 30px;">
			<h1 style="color: #667eea; font-size: 24px; margin-bottom: 10px;">🔮 BÁO CÁO THẦN SỐ HỌC - TRANG 2</h1>
			<p style="color: #666; font-style: italic;">Chi tiết các con số bổ sung</p>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #48c6ef, #6f86d6); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🎭 SỐ NHÂN CÁCH (PERSONALITY NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.personalityNumber
			}</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi (điểm mạnh):</h4>
				<p style="text-align: justify; font-size: 13px;">${
					personalityDetails.coreStrengths
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu cân bằng:</h4>
					<p style="font-size: 12px;">${personalityDetails.positiveTraits}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu lệch/khoa:</h4>
					<p style="font-size: 12px;">${personalityDetails.negativeTraits}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #ff9a56, #ffad56); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🎂 SỐ NGÀY SINH (BIRTHDAY NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.birthdayNumber
			}</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi (điểm mạnh):</h4>
				<p style="text-align: justify; font-size: 13px;">${
					descriptions.birthdayDescriptions[
						calculatedData.birthdayNumber
					]
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu cân bằng:</h4>
					<p style="font-size: 12px;">${birthdayDetails.positiveTraits}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu lệch/khoa:</h4>
					<p style="font-size: 12px;">${birthdayDetails.negativeTraits}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #a8e6cf, #7fcdcd); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🌱 SỐ THÁI ĐỘ (ATTITUDE NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.attitudeNumber
			}</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi (điểm mạnh):</h4>
				<p style="text-align: justify; font-size: 13px;">${
					descriptions.attitudeDescriptions[
						calculatedData.attitudeNumber
					]
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu cân bằng:</h4>
					<p style="font-size: 12px;">${attitudeDetails.positiveTraits}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu lệch/khoa:</h4>
					<p style="font-size: 12px;">${attitudeDetails.negativeTraits}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #ff6b9d, #c44569); border-radius: 15px; color: white;">
			<h3 style="margin-bottom: 15px;">🌸 SỐ TRƯỞNG THÀNH (MATURITY NUMBER)</h3>
			<div style="font-size: 36px; font-weight: bold; text-align: center; margin: 20px 0;">${
				calculatedData.maturityNumber
			}</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi (điểm mạnh):</h4>
				<p style="text-align: justify; font-size: 13px;">${
					descriptions.maturityDescriptions[
						calculatedData.maturityNumber
					]
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu cân bằng:</h4>
					<p style="font-size: 12px;">${maturityDetails.positiveTraits}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Dấu hiệu lệch/khoa:</h4>
					<p style="font-size: 12px;">${maturityDetails.negativeTraits}</p>
				</div>
			</div>
		</div>

		<div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-style: italic;">
			<p>Báo cáo này được tạo bởi Trang Web Thần Số Học</p>
			<p style="font-size: 12px; margin-top: 10px;">"Con số không chỉ là ký hiệu, mà còn là chìa khóa mở ra những bí mật của cuộc sống"</p>
		</div>
	`;

	return page2Content;
}

// Main PDF export function
async function exportToPDF() {
	if (!calculatedData.fullName) {
		alert('Vui lòng tính toán thần số học trước khi xuất PDF!');
		return;
	}

	// Create page contents
	const page1Content = createPage1Content();
	const page2Content = createPage2Content();

	// Hide formula section during export
	const formulaSection = document.getElementById('formulaSection');
	const originalDisplay = formulaSection.style.display;
	formulaSection.style.display = 'none';

	// Temporarily add pages to body for rendering
	document.body.appendChild(page1Content);
	document.body.appendChild(page2Content);

	try {
		// Create PDF
		const { jsPDF } = window.jspdf;
		const pdf = new jsPDF('p', 'mm', 'a4');

		// Render page 1
		const canvas1 = await html2canvas(page1Content, {
			scale: 2,
			useCORS: true,
			allowTaint: true,
			backgroundColor: '#ffffff',
		});

		const imgWidth = 210; // A4 width in mm
		const pageHeight = 295; // A4 height in mm
		const imgHeight1 = (canvas1.height * imgWidth) / canvas1.width;

		// Add page 1
		pdf.addImage(
			canvas1.toDataURL('image/png'),
			'PNG',
			0,
			0,
			imgWidth,
			Math.min(imgHeight1, pageHeight),
		);

		// Render page 2
		const canvas2 = await html2canvas(page2Content, {
			scale: 2,
			useCORS: true,
			allowTaint: true,
			backgroundColor: '#ffffff',
		});

		const imgHeight2 = (canvas2.height * imgWidth) / canvas2.width;

		// Add page 2
		pdf.addPage();
		pdf.addImage(
			canvas2.toDataURL('image/png'),
			'PNG',
			0,
			0,
			imgWidth,
			Math.min(imgHeight2, pageHeight),
		);

		// Save PDF file
		const fileName = `Than_So_Hoc_${calculatedData.fullName.replace(
			/\s+/g,
			'_',
		)}_${new Date().toISOString().slice(0, 10)}.pdf`;
		pdf.save(fileName);
	} catch (error) {
		console.error('Lỗi khi tạo PDF:', error);
		alert('Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại!');
	} finally {
		// Clean up: remove temporary elements and restore formula section
		document.body.removeChild(page1Content);
		document.body.removeChild(page2Content);
		formulaSection.style.display = originalDisplay;
	}
}

export { exportToPDF };
