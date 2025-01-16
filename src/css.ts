import { isLight } from './brightness';
import { hexToRGB } from './color-conversions';

export const createCSSColor = (color: string, alpha: number = 1): string => {
  const { r, g, b } = hexToRGB(color);
  return alpha === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const getTextColor = (backgroundColor: string): string => {
  return isLight(backgroundColor) ? '#000000' : '#ffffff';
};

export const createStyles = (color: string): Record<string, string> => {
  const textColor = getTextColor(color);
  const { r, g, b } = hexToRGB(color);

  return {
    backgroundColor: color,
    color: textColor,
    borderColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
    boxShadow: `0 0 10px rgba(${r}, ${g}, ${b}, 0.1)`,
  };
};

export const applyStyles = (element: HTMLElement, styles: Record<string, string>): void => {
  Object.assign(element.style, styles);
};

export const createColorVariables = (colors: Record<string, string>): string => {
  return Object.entries(colors)
    .map(([name, value]) => `--color-${name}: ${value};`)
    .join('\n');
};