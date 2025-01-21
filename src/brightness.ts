import {  toRGB } from './color-conversions';


export const getBrightness = (color: string): number => {
    const { r, g, b } = toRGB(color);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const isLight = (color: string): boolean => {
  return getBrightness(color) >= 128;
};

export const isDark = (color: string): boolean => {
  return !isLight(color);
};
