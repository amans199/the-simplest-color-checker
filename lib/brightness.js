"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDark = exports.isLight = exports.getBrightness = void 0;
const color_conversions_1 = require("./color-conversions");
const getBrightness = (color) => {
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    // Using the YIQ formula (same as W3C)
    return Math.round((r * 299 + g * 587 + b * 114) / 1000);
};
exports.getBrightness = getBrightness;
const isLight = (color) => {
    return (0, exports.getBrightness)(color) >= 128;
};
exports.isLight = isLight;
const isDark = (color) => {
    return !(0, exports.isLight)(color);
};
exports.isDark = isDark;
