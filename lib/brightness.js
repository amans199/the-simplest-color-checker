"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDark = exports.isLight = exports.getBrightness = void 0;
const color_conversions_1 = require("./color-conversions");
const getBrightness = (color) => {
    const { r, g, b } = (0, color_conversions_1.toRGB)(color);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
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
