import { hexToRGB } from './color-conversions';

export const getBrightness = (color: string): number => {
  const { r, g, b } = hexToRGB(color);
  // Using the YIQ formula (same as W3C)
  return Math.round((r * 299 + g * 587 + b * 114) / 1000);
};

export const isLight = (color: string): boolean => {
  return getBrightness(color) >= 128;
};

export const isDark = (color: string): boolean => {
  return !isLight(color);
};
