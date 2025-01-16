// Old implementation
// @ts-nocheck
/**
 * Utility function: Get brightness of a color
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {number} - Brightness of the color on a scale of 0-255
 */
function getBrightness(color) {
  let r, g, b;
  if (color.match(/^rgb/)) {
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }
  return Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
}

/**
 * Utility function: Check if color is light
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {boolean} - True if color is light, false if dark
 */
function isLight(color) {
  return getBrightness(color) > 127.5;
}

/**
 * Utility function: Check if color is dark
 * @param {string} color - Color to be checked as hex, rgb or rgba
 * @returns {boolean} - True if color is dark, false if light
 */
function isDark(color) {
  return !isLight(color);
}

/**
 * Apply color rules to elements
 * @param {Object} options - Options object
 * @prop {string} targetSelector - Selector of elements to apply rules to
 * @prop {string} [lightTextColor="#000"] - Text color to use for light backgrounds
 * @prop {string} [darkTextColor="#fff"] - Text color to use for dark backgrounds
 * @prop {boolean} [adjustTextColor=true] - Whether to adjust text color
 */
function applyColorRules(options) {
  if (!options || !options.targetSelector) return;

  const lightTextColor = options.lightTextColor || '#000';
  const darkTextColor = options.darkTextColor || '#fff';
  const elements = document.querySelectorAll(
    `${options.targetSelector}[data-color]`
  );

  elements.forEach(element => {
    const brightness = isLight(element.dataset.color) ? 'light' : 'dark';
    element.setAttribute('data-brightness', brightness);

    if (options.adjustTextColor) {
      const textColor = brightness === 'dark' ? darkTextColor : lightTextColor;
      element.style.color = textColor;

      element.querySelectorAll('*').forEach(child => {
        child.style.color = textColor;
      });
    }
  });
}

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
function checkColor(options) {
  console.warn(
    '`checkColor` is deprecated and will be removed in a future version. Use `applyColorRules` instead.'
  );

  // Map old options to new options for backward compatibility
  const mappedOptions = {
    targetSelector: options.selector, // `selector` -> `targetSelector`
    adjustTextColor: options.optimize_text_color, // `optimize_text_color` -> `adjustTextColor`
    lightTextColor: options.ifLight?.textColor || '#000', // `ifLight.textColor` -> `lightTextColor`
    darkTextColor: options.ifDark?.textColor || '#fff', // `ifDark.textColor` -> `darkTextColor`
  };

  applyColorRules(mappedOptions);
}

// Exporting utilities and the main function
module.exports = {
  checkColor,
  applyColorRules,
  isLight,
  isDark,
  getBrightness,
};
