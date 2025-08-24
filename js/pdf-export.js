import { numberDetails } from './constants.js';

// PDF Export functionality

// Helper function to get detailed number info for PDF
function getNumberDetails(number, type) {
	const details = numberDetails[number];
	if (!details) {
		return {
			meaning: `Ý nghĩa số ${number}`,
			positive: 'Đặc điểm tích cực',
			negative: 'Điểm cần cân bằng',
		};
	}

	// Map type to corresponding property
	const typeMapping = {
		lifePath: 'lifePath',
		destiny: 'destiny',
		soul: 'soul',
		personality: 'personality',
		attitude: 'attitude',
		birthday: 'birthday',
		maturity: 'maturity',
	};

	const mappedType = typeMapping[type] || 'lifePath';
	const data = details[mappedType];

	return {
		meaning: data?.meaning || `Ý nghĩa số ${number}`,
		positive: data?.positive || 'Đặc điểm tích cực',
		negative: data?.negative || 'Điểm cần cân bằng',
	};
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
		<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #667eea; padding-bottom: 20px;">
			<div style="flex: 1;">
				<h1 style="color: #667eea; font-size: 24px; margin: 0 0 10px 0;">BÁO CÁO THẦN SỐ HỌC</h1>
				<p style="color: #666; font-style: italic; margin: 0;">Khám phá bản thân thông qua sức mạnh của con số</p>
			</div>
			<div style="text-align: right; font-size: 13px; color: #666;">
				<div style="margin-bottom: 5px;">
					📞 <strong>0782 793 153</strong> (Thu Hà)
				</div>
				<div>
					https://www.facebook.com/profile.php?id=61554327784251
				</div>
			</div>
		</div>
		
		<div style="margin-bottom: 30px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
			<h3 style="color: #333; margin-bottom: 15px;">THÔNG TIN CÁ NHÂN</h3>
			<p><strong>Họ và tên:</strong> ${calculatedData.fullName}</p>
			<p><strong>Ngày sinh:</strong> ${new Date(
				calculatedData.birthDate,
			).toLocaleDateString('vi-VN')}
			</p>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🌟 SỐ ĐƯỜNG ĐỜI (LIFE PATH NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${
					calculatedData.lifePathNumber
				}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${
					getNumberDetails(calculatedData.lifePathNumber, 'lifePath')
						.meaning
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(
							calculatedData.lifePathNumber,
							'lifePath',
						).positive
					}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(
							calculatedData.lifePathNumber,
							'lifePath',
						).negative
					}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #f093fb, #f5576c); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🎯 SỐ ĐỊNH MỆNH (DESTINY NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${
					calculatedData.destinyNumber
				}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${
					getNumberDetails(calculatedData.destinyNumber, 'destiny')
						.meaning
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(
							calculatedData.destinyNumber,
							'destiny',
						).positive
					}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(
							calculatedData.destinyNumber,
							'destiny',
						).negative
					}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #feca57, #ff9ff3); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">💖 SỐ KHÁT KHAO TÂM HỒN (SOUL URGE NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${
					calculatedData.soulUrgeNumber
				}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${
					getNumberDetails(calculatedData.soulUrgeNumber, 'soul')
						.meaning
				}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(calculatedData.soulUrgeNumber, 'soul')
							.positive
					}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${
						getNumberDetails(calculatedData.soulUrgeNumber, 'soul')
							.negative
					}</p>
				</div>
			</div>
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
		<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 30px; border-bottom: 2px solid #667eea; padding-bottom: 20px;">
			<div style="flex: 1;">
				<h1 style="color: #667eea; font-size: 24px; margin: 0 0 10px 0;">BÁO CÁO THẦN SỐ HỌC</h1>
				<p style="color: #666; font-style: italic; margin: 0;">Chi tiết các con số bổ sung</p>
			</div>
			<div style="text-align: right; font-size: 13px; color: #666;">
				<div style="margin-bottom: 5px;">
					📞 <strong>0782 793 153</strong> (Thu Hà)
				</div>
				<div>
					https://www.facebook.com/profile.php?id=61554327784251
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #48c6ef, #6f86d6); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🎭 SỐ NHÂN CÁCH (PERSONALITY NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${calculatedData.personalityNumber}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${personalityDetails.meaning}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${personalityDetails.positive}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${personalityDetails.negative}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #ff9a56, #ffad56); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🎂 SỐ NGÀY SINH (BIRTHDAY NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${calculatedData.birthdayNumber}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${birthdayDetails.meaning}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${birthdayDetails.positive}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${birthdayDetails.negative}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #a8e6cf, #7fcdcd); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🌱 SỐ THÁI ĐỘ (ATTITUDE NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${calculatedData.attitudeNumber}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${attitudeDetails.meaning}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${attitudeDetails.positive}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${attitudeDetails.negative}</p>
				</div>
			</div>
		</div>

		<div style="margin-bottom: 30px; padding: 20px; background: linear-gradient(135deg, #ff6b9d, #c44569); border-radius: 15px; color: white;">
			<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
				<h3 style="margin: 0; flex: 1;">🌸 SỐ TRƯỞNG THÀNH (MATURITY NUMBER)</h3>
				<div style="font-size: 36px; font-weight: bold; margin-left: 20px;">${calculatedData.maturityNumber}</div>
			</div>
			<div style="margin: 15px 0;">
				<h4 style="color: #fff; margin-bottom: 10px;">Ý nghĩa cốt lõi:</h4>
				<p style="text-align: justify; font-size: 13px;">${maturityDetails.meaning}</p>
			</div>
			<div style="display: flex; justify-content: space-between; margin-top: 15px;">
				<div style="flex: 1; margin-right: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Cân bằng:</h4>
					<p style="font-size: 12px;">${maturityDetails.positive}</p>
				</div>
				<div style="flex: 1; margin-left: 10px;">
					<h4 style="color: #fff; margin-bottom: 8px;">Lệch:</h4>
					<p style="font-size: 12px;">${maturityDetails.negative}</p>
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

	// Hide formula section during export (if exists)
	const formulaSection = document.getElementById('formulaSection');
	const originalDisplay = formulaSection
		? formulaSection.style.display
		: null;
	if (formulaSection) {
		formulaSection.style.display = 'none';
	}

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
		const birthDate = new Date(calculatedData.birthDate);
		const birthYear = birthDate.getFullYear();
		const birthMonth = String(birthDate.getMonth() + 1).padStart(2, '0');
		const birthDay = String(birthDate.getDate()).padStart(2, '0');

		// Remove Vietnamese accents and convert to lowercase
		const cleanName = calculatedData.fullName
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '') // Remove diacritics
			.replace(/đ/g, 'd') // Replace đ with d
			.replace(/\s+/g, '_')
			.replace(/[^a-z0-9_]/g, ''); // Remove any remaining special characters

		const fileName = `${cleanName}-${birthDay}-${birthMonth}-${birthYear}.pdf`;
		pdf.save(fileName);
	} catch (error) {
		console.error('Lỗi khi tạo PDF:', error);
		alert('Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại!');
	} finally {
		// Clean up: remove temporary elements and restore formula section
		document.body.removeChild(page1Content);
		document.body.removeChild(page2Content);
		if (formulaSection && originalDisplay !== null) {
			formulaSection.style.display = originalDisplay;
		}
	}
}

export { exportToPDF };
