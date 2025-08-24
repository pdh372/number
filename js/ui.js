// UI Management and DOM interactions
import { descriptions } from './constants.js';
import {
	calculateLifePathNumber,
	calculateDestinyNumber,
	calculateSoulUrgeNumber,
	calculatePersonalityNumber,
	calculateBirthdayNumber,
	calculateAttitudeNumber,
	calculateMaturityNumber,
} from './calculations.js';

// Display calculation results in the UI
function displayResults(data) {
	// Display main numbers
	document.getElementById('lifePathNumber').textContent = data.lifePathNumber;
	document.getElementById('lifePathDescription').textContent =
		descriptions.lifePathDescriptions[data.lifePathNumber];

	document.getElementById('destinyNumber').textContent = data.destinyNumber;
	document.getElementById('destinyDescription').textContent =
		descriptions.destinyDescriptions[data.destinyNumber];

	document.getElementById('soulUrgeNumber').textContent = data.soulUrgeNumber;
	document.getElementById('soulUrgeDescription').textContent =
		descriptions.soulUrgeDescriptions[data.soulUrgeNumber];

	document.getElementById('personalityNumber').textContent =
		data.personalityNumber;
	document.getElementById('personalityDescription').textContent =
		descriptions.personalityDescriptions[data.personalityNumber];

	document.getElementById('birthdayNumber').textContent = data.birthdayNumber;
	document.getElementById('birthdayDescription').textContent =
		descriptions.birthdayDescriptions[data.birthdayNumber];

	document.getElementById('attitudeNumber').textContent = data.attitudeNumber;
	document.getElementById('attitudeDescription').textContent =
		descriptions.attitudeDescriptions[data.attitudeNumber];

	document.getElementById('maturityNumber').textContent = data.maturityNumber;
	document.getElementById('maturityDescription').textContent =
		descriptions.maturityDescriptions[data.maturityNumber];

	// Show results section
	const resultsDiv = document.getElementById('results');
	resultsDiv.style.display = 'block';

	// Scroll to results
	resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display detailed calculation steps
function displayCalculationDetails() {
	const detailsDiv = document.getElementById('calculationDetails');

	// Check if we have any calculation data
	const steps = window.calculationSteps || {};
	const hasAnyData =
		steps.lifePathSteps ||
		steps.destinySteps ||
		steps.soulUrgeSteps ||
		steps.personalitySteps ||
		steps.birthdaySteps ||
		steps.attitudeSteps ||
		steps.maturitySteps;

	if (!hasAnyData) {
		detailsDiv.innerHTML +=
			'<p style="color: red;">ERROR: Calculation steps missing. Please try calculating again.</p>';
		return;
	}

	const html = `
		<div style="display: grid; gap: 20px;">
			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #667eea;">
				<h4 style="color: #667eea; margin-bottom: 10px;">🌟 Số Đường Đời (Life Path Number)</h4>
				<p><strong>Công thức:</strong> ${steps.lifePathSteps?.input || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.lifePathSteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.lifePathSteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #667eea; font-weight: bold;">${
					steps.lifePathSteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #f093fb;">
				<h4 style="color: #f093fb; margin-bottom: 10px;">🎯 Số Định Mệnh (Destiny Number)</h4>
				<p><strong>Công thức:</strong> ${steps.destinySteps?.input || 'N/A'}</p>
				<p><strong>Chữ cái:</strong> ${steps.destinySteps?.letters || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.destinySteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.destinySteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #f093fb; font-weight: bold;">${
					steps.destinySteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #feca57;">
				<h4 style="color: #feca57; margin-bottom: 10px;">💖 Số Khát Khao Tâm Hồn (Soul Urge Number)</h4>
				<p><strong>Công thức:</strong> ${steps.soulUrgeSteps?.input || 'N/A'}</p>
				<p><strong>Nguyên âm:</strong> ${steps.soulUrgeSteps?.letters || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.soulUrgeSteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.soulUrgeSteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #feca57; font-weight: bold;">${
					steps.soulUrgeSteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #48c6ef;">
				<h4 style="color: #48c6ef; margin-bottom: 10px;">🎭 Số Nhân Cách (Personality Number)</h4>
				<p><strong>Công thức:</strong> ${steps.personalitySteps?.input || 'N/A'}</p>
				<p><strong>Phụ âm:</strong> ${steps.personalitySteps?.letters || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${
					steps.personalitySteps?.calculation || 'N/A'
				}</p>
				<p><strong>Rút gọn:</strong> ${steps.personalitySteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #48c6ef; font-weight: bold;">${
					steps.personalitySteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #ff9a56;">
				<h4 style="color: #ff9a56; margin-bottom: 10px;">🎂 Số Ngày Sinh (Birthday Number)</h4>
				<p><strong>Công thức:</strong> ${steps.birthdaySteps?.input || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.birthdaySteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.birthdaySteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #ff9a56; font-weight: bold;">${
					steps.birthdaySteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #a8e6cf;">
				<h4 style="color: #a8e6cf; margin-bottom: 10px;">🌱 Số Thái Độ (Attitude Number)</h4>
				<p><strong>Công thức:</strong> ${steps.attitudeSteps?.input || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.attitudeSteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.attitudeSteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #a8e6cf; font-weight: bold;">${
					steps.attitudeSteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="padding: 15px; background: white; border-radius: 10px; border-left: 4px solid #ff6b9d;">
				<h4 style="color: #ff6b9d; margin-bottom: 10px;">🌸 Số Trưởng Thành (Maturity Number)</h4>
				<p><strong>Công thức:</strong> ${steps.maturitySteps?.input || 'N/A'}</p>
				<p><strong>Tính toán:</strong> ${steps.maturitySteps?.calculation || 'N/A'}</p>
				<p><strong>Rút gọn:</strong> ${steps.maturitySteps?.reduction || 'N/A'}</p>
				<p><strong>Kết quả:</strong> <span style="color: #ff6b9d; font-weight: bold;">${
					steps.maturitySteps?.result || 'N/A'
				}</span></p>
			</div>

			<div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 10px;">
				<h5 style="color: #1976d2; margin-bottom: 10px;">📝 Lưu ý về quy tắc Y:</h5>
				<p style="font-size: 0.9em; color: #333;">
					• Y được coi là <strong>nguyên âm</strong> khi đứng độc lập hoặc không có nguyên âm kế bên<br>
					• Y được coi là <strong>phụ âm</strong> khi đứng trước hoặc sau các nguyên âm A, E, I, O, U
				</p>
			</div>
		</div>
	`;

	detailsDiv.innerHTML = html;
}

// Form submission handler
function handleFormSubmission() {
	document
		.getElementById('numerologyForm')
		.addEventListener('submit', function (e) {
			e.preventDefault();

			const fullName = document.getElementById('fullName').value.trim();
			const birthDate = document.getElementById('birthDate').value;

			if (!fullName || !birthDate) {
				alert('Vui lòng nhập đầy đủ thông tin!');
				return;
			}

			// Reset calculationSteps
			window.calculationSteps = {};

			// Calculate all numerology numbers
			const lifePathNumber = calculateLifePathNumber(birthDate);
			const destinyNumber = calculateDestinyNumber(fullName);
			const soulUrgeNumber = calculateSoulUrgeNumber(fullName);
			const personalityNumber = calculatePersonalityNumber(fullName);
			const birthdayNumber = calculateBirthdayNumber(birthDate);
			const attitudeNumber = calculateAttitudeNumber(birthDate);
			const maturityNumber = calculateMaturityNumber(
				lifePathNumber,
				destinyNumber,
			);

			// Store calculated data globally
			window.calculatedData = {
				fullName,
				birthDate,
				lifePathNumber,
				destinyNumber,
				soulUrgeNumber,
				personalityNumber,
				birthdayNumber,
				attitudeNumber,
				maturityNumber,
			};

			// Display results
			displayResults(window.calculatedData);

			// Display calculation details
			setTimeout(() => {
				displayCalculationDetails();
			}, 100);

			// Scroll to results
			document
				.getElementById('results')
				.scrollIntoView({ behavior: 'smooth' });
		});
}

// Add input focus effects
function addInputEffects() {
	const inputs = document.querySelectorAll('input');
	inputs.forEach(input => {
		input.addEventListener('focus', function () {
			this.style.transform = 'translateY(-2px)';
			this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.2)';
		});

		input.addEventListener('blur', function () {
			this.style.transform = 'translateY(0)';
			this.style.boxShadow = 'none';
		});
	});
}

// Setup form handlers (alias for handleFormSubmission)
function setupFormHandlers() {
	handleFormSubmission();
}

// Setup UI effects (alias for addInputEffects)
function setupUIEffects() {
	addInputEffects();
}

// Initialize UI interactions when DOM is loaded
function initializeUI() {
	handleFormSubmission();
	addInputEffects();
}

// Export functions for use in other modules
export {
	displayResults,
	displayCalculationDetails,
	setupFormHandlers,
	setupUIEffects,
	initializeUI,
};
