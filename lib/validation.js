"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateColor = exports.isValidHSL = exports.isValidRGB = exports.isValidHex = void 0;
const isValidHex = (color) => {
    const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
    return hexRegex.test(color);
};
exports.isValidHex = isValidHex;
const isValidRGB = (r, g, b) => {
    return [r, g, b].every(value => value >= 0 && value <= 255);
};
exports.isValidRGB = isValidRGB;
const isValidHSL = (h, s, l) => {
    return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
};
exports.isValidHSL = isValidHSL;
const validateColor = (color, format) => {
    switch (format) {
        case 'hex':
            return (0, exports.isValidHex)(color);
        case 'rgb': {
            const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (!match)
                return false;
            const [r, g, b] = match.slice(1).map(Number);
            return (0, exports.isValidRGB)(r, g, b);
        }
        case 'hsl': {
            const match = color.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/);
            if (!match)
                return false;
            const [h, s, l] = match.slice(1).map(Number);
            return (0, exports.isValidHSL)(h, s, l);
        }
        default:
            return false;
    }
};
exports.validateColor = validateColor;
