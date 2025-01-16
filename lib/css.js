"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createColorVariables = exports.applyStyles = exports.createStyles = exports.getTextColor = exports.createCSSColor = void 0;
const brightness_1 = require("./brightness");
const color_conversions_1 = require("./color-conversions");
const createCSSColor = (color, alpha = 1) => {
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    return alpha === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
exports.createCSSColor = createCSSColor;
const getTextColor = (backgroundColor) => {
    return (0, brightness_1.isLight)(backgroundColor) ? '#000000' : '#ffffff';
};
exports.getTextColor = getTextColor;
const createStyles = (color) => {
    const textColor = (0, exports.getTextColor)(color);
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    return {
        backgroundColor: color,
        color: textColor,
        borderColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
        boxShadow: `0 0 10px rgba(${r}, ${g}, ${b}, 0.1)`,
    };
};
exports.createStyles = createStyles;
const applyStyles = (element, styles) => {
    Object.assign(element.style, styles);
};
exports.applyStyles = applyStyles;
const createColorVariables = (colors) => {
    return Object.entries(colors)
        .map(([name, value]) => `--color-${name}: ${value};`)
        .join('\n');
};
exports.createColorVariables = createColorVariables;
