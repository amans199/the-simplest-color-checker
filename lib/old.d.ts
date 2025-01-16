/**
 * Utility function: Get brightness of a color
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {number} - Brightness of the color on a scale of 0-255
 */
declare function getBrightness(color: any): number;
/**
 * Utility function: Check if color is light
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {boolean} - True if color is light, false if dark
 */
declare function isLight(color: any): boolean;
/**
 * Utility function: Check if color is dark
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {boolean} - True if color is dark, false if light
 */
declare function isDark(color: any): boolean;
/**
 * Apply color rules to elements
 * @param {Object} options - Options object
 * @prop {string} targetSelector - Selector of elements to apply rules to
 * @prop {string} [lightTextColor="#000"] - Text color to use for light backgrounds
 * @prop {string} [darkTextColor="#fff"] - Text color to use for dark backgrounds
 * @prop {boolean} [adjustTextColor=true] - Whether to adjust text color
 */
declare function applyColorRules(options: any): void;
/**
 * Deprecated function: checkColor
 * Maps old options to new options for backward compatibility and applies color rules.
 *
 * @deprecated This function will be removed in a future version.
 * @param {Object} options - Options object
 * @prop {string} options.selector - Selector of elements to apply rules to
 * @prop {boolean} [options.optimize_text_color=true] - Whether to optimize text color
 * @prop {Object} [options.ifLight] - Options for light background
 * @prop {string} [options.ifLight.textColor="#000"] - Text color for light backgrounds
 * @prop {Object} [options.ifDark] - Options for dark background
 * @prop {string} [options.ifDark.textColor="#fff"] - Text color for dark backgrounds
 */
declare function checkColor(options: any): void;
