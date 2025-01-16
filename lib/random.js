"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPalette = exports.randomColor = void 0;
const color_conversions_1 = require("./color-conversions");
const randomColor = (options) => {
    const { minBrightness = 0, maxBrightness = 255, saturation = 100 } = options || {};
    const hue = Math.floor(Math.random() * 360);
    const sat = saturation / 100;
    const val = (Math.random() * (maxBrightness - minBrightness) + minBrightness) / 255;
    const c = val * sat;
    const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
    const m = val - c;
    let r = 0, g = 0, b = 0;
    if (hue < 60) {
        [r, g, b] = [c, x, 0];
    }
    else if (hue < 120) {
        [r, g, b] = [x, c, 0];
    }
    else if (hue < 180) {
        [r, g, b] = [0, c, x];
    }
    else if (hue < 240) {
        [r, g, b] = [0, x, c];
    }
    else if (hue < 300) {
        [r, g, b] = [x, 0, c];
    }
    else {
        [r, g, b] = [c, 0, x];
    }
    return (0, color_conversions_1.rgbToHex)(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
};
exports.randomColor = randomColor;
const randomPalette = (count = 5, options) => {
    const palette = [];
    const { variation = 30, minBrightness = 0, maxBrightness = 255 } = options || {};
    for (let i = 0; i < count; i++) {
        palette.push((0, exports.randomColor)({
            minBrightness,
            maxBrightness,
            saturation: Math.random() * variation + (100 - variation)
        }));
    }
    return palette;
};
exports.randomPalette = randomPalette;
