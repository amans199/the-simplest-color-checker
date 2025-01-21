"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslToRGB = exports.rgbToHSL = exports.rgbToHex = exports.hexToRgba = exports.hexToRGB = exports.toRGB = exports.rgbStringToRGB = exports.namedColorToRGB = void 0;
const utils_1 = require("./utils");
const namedColorToRGB = (color) => {
    const lowerColor = color.toLowerCase();
    return utils_1.namedColors[lowerColor] || null;
};
exports.namedColorToRGB = namedColorToRGB;
const rgbStringToRGB = (rgb) => {
    const match = rgb.match(utils_1.rgbRegex);
    if (!match)
        return null;
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    // Ensure values are within the valid range
    if (r > 255 || g > 255 || b > 255)
        return null;
    return { r, g, b };
};
exports.rgbStringToRGB = rgbStringToRGB;
const toRGB = (color) => {
    if (color.startsWith('#')) {
        return (0, exports.hexToRGB)(color);
    }
    const rgbColor = (0, exports.rgbStringToRGB)(color);
    if (rgbColor) {
        return rgbColor;
    }
    const namedColor = utils_1.namedColors[color.toLowerCase()];
    if (namedColor) {
        return namedColor;
    }
    throw new Error(`Unsupported color format: ${color}`);
};
exports.toRGB = toRGB;
const hexToRGB = (hex) => {
    let color = hex.charAt(0) === '#' ? hex.substring(1) : hex;
    if (color.length === 3) {
        color = color
            .split('')
            .map((char) => char + char)
            .join('');
    }
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return { r, g, b };
};
exports.hexToRGB = hexToRGB;
const hexToRgba = (color, alpha) => {
    if (!color)
        return `rgba(0, 0, 0, 0)`;
    const { r, g, b } = (0, exports.toRGB)(color);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
exports.hexToRgba = hexToRgba;
const rgbToHex = (r, g, b) => {
    const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
exports.rgbToHex = rgbToHex;
const rgbToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
};
exports.rgbToHSL = rgbToHSL;
const hslToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let rp = 0, gp = 0, bp = 0;
    if (h >= 0 && h < 60)
        [rp, gp, bp] = [c, x, 0];
    else if (h >= 60 && h < 120)
        [rp, gp, bp] = [x, c, 0];
    else if (h >= 120 && h < 180)
        [rp, gp, bp] = [0, c, x];
    else if (h >= 180 && h < 240)
        [rp, gp, bp] = [0, x, c];
    else if (h >= 240 && h < 300)
        [rp, gp, bp] = [x, 0, c];
    else
        [rp, gp, bp] = [c, 0, x];
    return {
        r: Math.round((rp + m) * 255),
        g: Math.round((gp + m) * 255),
        b: Math.round((bp + m) * 255),
    };
};
exports.hslToRGB = hslToRGB;
