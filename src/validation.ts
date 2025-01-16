type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'named';

export const isValidHex = (color: string): boolean => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  return hexRegex.test(color);
};

export const isValidRGB = (r: number, g: number, b: number): boolean => {
  return [r, g, b].every(value => value >= 0 && value <= 255);
};

export const isValidHSL = (h: number, s: number, l: number): boolean => {
  return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
};

export const validateColor = (color: string, format: ColorFormat): boolean => {
  switch (format) {
    case 'hex':
      return isValidHex(color);
    case 'rgb': {
      const match = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      if (!match) return false;
      const [r, g, b] = match.slice(1).map(Number);
      return isValidRGB(r, g, b);
    }
    case 'hsl': {
      const match = color.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/);
      if (!match) return false;
      const [h, s, l] = match.slice(1).map(Number);
      return isValidHSL(h, s, l);
    }
    default:
      return false;
  }
};