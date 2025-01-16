"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grayscale = exports.invert = exports.shade = exports.tint = exports.mix = exports.adjustSaturation = exports.adjustBrightness = void 0;
const color_conversions_1 = require("./color-conversions");
// Refer to: https://css-tricks.com/using-javascript-to-adjust-saturation-and-brightness-of-rgb-colors/
const adjustBrightness = (color, percentage) => {
    // Convert hex to RGB
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    const [lowest, middle, highest] = getLowestMiddleHighest([r, g, b]);
    // Calculate adjustment amount
    const adjustment = (percentage / 100) * 255;
    const returnArray = [];
    if (percentage > 0) {
        // Lighten
        returnArray[lowest.index] = Math.min(255, Math.round(lowest.val + adjustment));
        const increaseFraction = (returnArray[lowest.index] - lowest.val) / (255 - lowest.val);
        returnArray[middle.index] = Math.min(255, middle.val + (255 - middle.val) * increaseFraction);
        returnArray[highest.index] = Math.min(255, highest.val + (255 - highest.val) * increaseFraction);
    }
    else {
        // Darken
        returnArray[highest.index] = Math.max(0, Math.round(highest.val + adjustment));
        const decreaseFraction = (highest.val - returnArray[highest.index]) / highest.val;
        returnArray[middle.index] = Math.max(0, middle.val - middle.val * decreaseFraction);
        returnArray[lowest.index] = Math.max(0, lowest.val - lowest.val * decreaseFraction);
    }
    // Convert adjusted RGB back to hex
    return (0, color_conversions_1.rgbToHex)(returnArray[0], returnArray[1], returnArray[2]);
};
exports.adjustBrightness = adjustBrightness;
const getLowestMiddleHighest = (rgbIntArray) => {
    let highest = { val: -1, index: -1 };
    let lowest = { val: Infinity, index: -1 };
    rgbIntArray.map((val, index) => {
        if (val > highest.val) {
            highest = { val: val, index: index };
        }
        if (val < lowest.val) {
            lowest = { val: val, index: index };
        }
    });
    const middleIndex = 3 - highest.index - lowest.index;
    const middle = { index: middleIndex, val: rgbIntArray[middleIndex] };
    return [lowest, middle, highest];
};
const adjustSaturation = (color, amount) => {
    // Convert HEX to RGB
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    // Convert RGB to HSL
    const { h, s, l } = (0, color_conversions_1.rgbToHSL)(r, g, b);
    // Adjust Saturation
    const newS = Math.min(100, Math.max(0, s + amount)); // Clamp saturation between 0 and 100
    // Edge case: Fully saturated colors may not visibly change; tweak lightness slightly if needed
    const adjustedL = l === 0 || l === 100
        ? l
        : Math.min(100, Math.max(0, l + (amount > 0 ? 1 : -1)));
    // Convert adjusted HSL back to RGB
    const { r: newR, g: newG, b: newB } = (0, color_conversions_1.hslToRGB)(h, newS, adjustedL);
    // Convert RGB back to HEX and return
    return (0, color_conversions_1.rgbToHex)(newR, newG, newB);
};
exports.adjustSaturation = adjustSaturation;
const mix = (color1, color2, weight = 0.5) => {
    const { r: r1, g: g1, b: b1 } = (0, color_conversions_1.hexToRGB)(color1);
    const { r: r2, g: g2, b: b2 } = (0, color_conversions_1.hexToRGB)(color2);
    const w = weight * 2 - 1;
    const w1 = (w + 1) / 2;
    const w2 = 1 - w1;
    return (0, color_conversions_1.rgbToHex)(Math.round(r1 * w1 + r2 * w2), Math.round(g1 * w1 + g2 * w2), Math.round(b1 * w1 + b2 * w2));
};
exports.mix = mix;
const tint = (color, amount) => {
    return (0, exports.mix)('#ffffff', color, amount);
};
exports.tint = tint;
const shade = (color, amount) => {
    return (0, exports.mix)('#000000', color, amount);
};
exports.shade = shade;
const invert = (color) => {
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    return (0, color_conversions_1.rgbToHex)(255 - r, 255 - g, 255 - b);
};
exports.invert = invert;
const grayscale = (color) => {
    const { r, g, b } = (0, color_conversions_1.hexToRGB)(color);
    const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    return (0, color_conversions_1.rgbToHex)(gray, gray, gray);
};
exports.grayscale = grayscale;
