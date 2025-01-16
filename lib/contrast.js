"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastRatio = void 0;
const color_conversions_1 = require("./color-conversions");
const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(value => {
        value /= 255;
        return value <= 0.03928
            ? value / 12.92
            : Math.pow((value + 0.055) / 1.055, 2.4);
    });
    return rs * 0.2126 + gs * 0.7152 + bs * 0.0722;
};
const getContrastRatio = (color1, color2) => {
    const rgb1 = (0, color_conversions_1.hexToRGB)(color1);
    const rgb2 = (0, color_conversions_1.hexToRGB)(color2);
    const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
};
exports.getContrastRatio = getContrastRatio;
