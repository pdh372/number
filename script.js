import { setupFormHandlers, setupUIEffects } from './js/ui.js';
import { exportToPDF } from './js/pdf-export.js';

// Global variables
let calculatedData = {};
let calculationSteps = {};

// Export global variables cho các module khác sử dụng
window.calculatedData = calculatedData;
window.calculationSteps = calculationSteps;
window.exportToPDF = exportToPDF;

// Khởi tạo ứng dụng khi DOM loaded
document.addEventListener('DOMContentLoaded', function () {
	// Setup form handlers
	setupFormHandlers();

	// Setup UI effects
	setupUIEffects();
});
