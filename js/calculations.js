import { vietnameseAccents, letterValues, baseVowels } from './constants.js';

// Global variables for storing calculation data
let calculatedData = {};
let calculationSteps = {};

// Helper function to normalize Vietnamese text
function normalizeVietnamese(str) {
	return str
		.split('')
		.map(char => vietnameseAccents[char.toLowerCase()] || char)
		.join('');
}

// Helper function to get letter value
function getLetterValue(letter) {
	return letterValues[letter.toUpperCase()] || 0;
}

// Helper function to check if Y is a vowel based on context
function isYVowel(name, index) {
	const upperName = name.toUpperCase();
	const prevChar = index > 0 ? upperName[index - 1] : '';
	const nextChar = index < upperName.length - 1 ? upperName[index + 1] : '';

	// If Y is before or after a vowel, Y is a consonant
	if (baseVowels.includes(prevChar) || baseVowels.includes(nextChar)) {
		return false; // Y is consonant
	}

	return true; // Y is vowel
}

// Helper function to check if a letter is a vowel
function isVowel(letter, name, index) {
	if (baseVowels.includes(letter)) {
		return true;
	}
	if (letter === 'Y') {
		return isYVowel(name, index);
	}
	return false;
}

// Reduce number to single digit or master number
function reduceToSingleDigit(num) {
	// Handle master numbers (11, 22, 33)
	if (num === 11 || num === 22 || num === 33) {
		return num;
	}

	while (num > 9) {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		num = sum;

		// Check for master numbers after calculation
		if (num === 11 || num === 22 || num === 33) {
			return num;
		}
	}
	return num;
}

// Get reduction steps for display
function getReductionSteps(num) {
	if (num === 11 || num === 22 || num === 33 || num <= 9) {
		return `${num} (không cần rút gọn)`;
	}

	let steps = [];
	let current = num;

	while (current > 9) {
		if (current === 11 || current === 22 || current === 33) {
			steps.push(`${current} (Master Number)`);
			break;
		}

		let digits = current.toString().split('').map(Number);
		let sum = digits.reduce((a, b) => a + b, 0);
		steps.push(`${current} → ${digits.join(' + ')} = ${sum}`);
		current = sum;
	}

	return steps.join(' → ');
}

// Get letter breakdown for name analysis
function getLetterBreakdown(name, type) {
	const normalizedName = normalizeVietnamese(name);
	const cleanName = normalizedName.replace(/[^A-Za-z]/g, '').toUpperCase();

	let breakdown = [];
	let sum = 0;

	for (let i = 0; i < cleanName.length; i++) {
		const letter = cleanName[i];
		const value = getLetterValue(letter);
		let include = false;

		if (type === 'all') {
			include = true;
		} else if (type === 'vowel') {
			include = isVowel(letter, cleanName, i);
		} else if (type === 'consonant') {
			include = !isVowel(letter, cleanName, i);
		}

		if (include) {
			breakdown.push(`${letter}(${value})`);
			sum += value;
		}
	}

	return {
		letters: breakdown.join(' + '),
		calculation: `${breakdown.join(' + ')} = ${sum}`,
		sum: sum,
	};
}

// Calculate Life Path Number
function calculateLifePathNumber(birthDate) {
	const date = new Date(birthDate);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	const sum = day + month + year;
	const result = reduceToSingleDigit(sum);

	// Save calculation details
	calculationSteps.lifePathSteps = {
		input: `${day}/${month}/${year}`,
		calculation: `${day} + ${month} + ${year} = ${sum}`,
		reduction: getReductionSteps(sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Destiny Number
function calculateDestinyNumber(fullName) {
	const breakdown = getLetterBreakdown(fullName, 'all');
	const result = reduceToSingleDigit(breakdown.sum);

	// Save calculation details
	calculationSteps.destinySteps = {
		input: `"${fullName}"`,
		letters: breakdown.letters,
		calculation: breakdown.calculation,
		reduction: getReductionSteps(breakdown.sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Soul Urge Number
function calculateSoulUrgeNumber(fullName) {
	const breakdown = getLetterBreakdown(fullName, 'vowel');
	const result = reduceToSingleDigit(breakdown.sum);

	// Save calculation details
	calculationSteps.soulUrgeSteps = {
		input: `"${fullName}" (chỉ nguyên âm)`,
		letters: breakdown.letters,
		calculation: breakdown.calculation,
		reduction: getReductionSteps(breakdown.sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Personality Number
function calculatePersonalityNumber(fullName) {
	const breakdown = getLetterBreakdown(fullName, 'consonant');
	const result = reduceToSingleDigit(breakdown.sum);

	// Save calculation details
	calculationSteps.personalitySteps = {
		input: `"${fullName}" (chỉ phụ âm)`,
		letters: breakdown.letters,
		calculation: breakdown.calculation,
		reduction: getReductionSteps(breakdown.sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Birthday Number
function calculateBirthdayNumber(birthDate) {
	const date = new Date(birthDate);
	const day = date.getDate();
	const result = reduceToSingleDigit(day);

	// Save calculation details
	calculationSteps.birthdaySteps = {
		input: `Ngày sinh: ${day}`,
		calculation: `Số Ngày Sinh = ${day}`,
		reduction: getReductionSteps(day),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Attitude Number
function calculateAttitudeNumber(birthDate) {
	const date = new Date(birthDate);
	const day = date.getDate();
	const month = date.getMonth() + 1;

	const sum = day + month;
	const result = reduceToSingleDigit(sum);

	// Save calculation details
	calculationSteps.attitudeSteps = {
		input: `${day}/${month}`,
		calculation: `${day} + ${month} = ${sum}`,
		reduction: getReductionSteps(sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate Maturity Number
function calculateMaturityNumber(lifePathNumber, destinyNumber) {
	const sum = lifePathNumber + destinyNumber;
	const result = reduceToSingleDigit(sum);

	// Save calculation details
	calculationSteps.maturitySteps = {
		input: `Life Path: ${lifePathNumber}, Destiny: ${destinyNumber}`,
		calculation: `${lifePathNumber} + ${destinyNumber} = ${sum}`,
		reduction: getReductionSteps(sum),
		result: result,
	};
	
	// Also save to window for UI access
	window.calculationSteps = calculationSteps;

	return result;
}

// Calculate all numerology numbers
function calculateAllNumbers(fullName, birthDate) {
	// Reset calculation steps
	calculationSteps = {};

	// Calculate all numbers
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

	// Store calculated data
	calculatedData = {
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

	return calculatedData;
}

export {
	calculateAllNumbers,
	calculateAttitudeNumber,
	calculateBirthdayNumber,
	calculateDestinyNumber,
	calculateLifePathNumber,
	calculateMaturityNumber,
	calculatePersonalityNumber,
	calculateSoulUrgeNumber,
	reduceToSingleDigit,
};
