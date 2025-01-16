import { hexToRGB, rgbToHex, rgbToHSL, hslToRGB } from './color-conversions';

// Refer to: https://css-tricks.com/using-javascript-to-adjust-saturation-and-brightness-of-rgb-colors/
export const adjustBrightness = (color: string, percentage: number): string => {
  // Convert hex to RGB
  const { r, g, b } = hexToRGB(color);

  const [lowest, middle, highest] = getLowestMiddleHighest([r, g, b]);

  // Calculate adjustment amount
  const adjustment = (percentage / 100) * 255;

  const returnArray = [];

  if (percentage > 0) {
    // Lighten
    returnArray[lowest.index] = Math.min(
      255,
      Math.round(lowest.val + adjustment)
    );
    const increaseFraction =
      (returnArray[lowest.index] - lowest.val) / (255 - lowest.val);
    returnArray[middle.index] = Math.min(
      255,
      middle.val + (255 - middle.val) * increaseFraction
    );
    returnArray[highest.index] = Math.min(
      255,
      highest.val + (255 - highest.val) * increaseFraction
    );
  } else {
    // Darken
    returnArray[highest.index] = Math.max(
      0,
      Math.round(highest.val + adjustment)
    );
    const decreaseFraction =
      (highest.val - returnArray[highest.index]) / highest.val;
    returnArray[middle.index] = Math.max(
      0,
      middle.val - middle.val * decreaseFraction
    );
    returnArray[lowest.index] = Math.max(
      0,
      lowest.val - lowest.val * decreaseFraction
    );
  }

  // Convert adjusted RGB back to hex
  return rgbToHex(returnArray[0], returnArray[1], returnArray[2]);
};

const getLowestMiddleHighest = (
  rgbIntArray: number[]
): { val: number; index: number }[] => {
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

export const adjustSaturation = (color: string, amount: number): string => {
  // Convert HEX to RGB
  const { r, g, b } = hexToRGB(color);

  // Convert RGB to HSL
  const { h, s, l } = rgbToHSL(r, g, b);

  // Adjust Saturation
  const newS = Math.min(100, Math.max(0, s + amount)); // Clamp saturation between 0 and 100

  // Edge case: Fully saturated colors may not visibly change; tweak lightness slightly if needed
  const adjustedL =
    l === 0 || l === 100
      ? l
      : Math.min(100, Math.max(0, l + (amount > 0 ? 1 : -1)));

  // Convert adjusted HSL back to RGB
  const { r: newR, g: newG, b: newB } = hslToRGB(h, newS, adjustedL);

  // Convert RGB back to HEX and return
  return rgbToHex(newR, newG, newB);
};

export const mix = (color1: string, color2: string, weight = 0.5): string => {
  const { r: r1, g: g1, b: b1 } = hexToRGB(color1);
  const { r: r2, g: g2, b: b2 } = hexToRGB(color2);

  const w = weight * 2 - 1;
  const w1 = (w + 1) / 2;
  const w2 = 1 - w1;

  return rgbToHex(
    Math.round(r1 * w1 + r2 * w2),
    Math.round(g1 * w1 + g2 * w2),
    Math.round(b1 * w1 + b2 * w2)
  );
};

export const tint = (color: string, amount: number): string => {
  return mix('#ffffff', color, amount);
};

export const shade = (color: string, amount: number): string => {
  return mix('#000000', color, amount);
};

export const invert = (color: string): string => {
  const { r, g, b } = hexToRGB(color);
  return rgbToHex(255 - r, 255 - g, 255 - b);
};

export const grayscale = (color: string): string => {
  const { r, g, b } = hexToRGB(color);
  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  return rgbToHex(gray, gray, gray);
};
