import { hexToRGB, rgbToHex, rgbToHSL } from './color-conversions';

type PaletteType =
  | 'complementary'
  | 'analogous'
  | 'triadic'
  | 'tetradic'
  | 'monochromatic'
  | 'split-complementary';

const rotateHue = (h: number, degrees: number): number => {
  const newHue = (h + degrees) % 360;
  return newHue < 0 ? newHue + 360 : newHue;
};

const hslToRGB = (
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } => {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (60 <= h && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (120 <= h && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (180 <= h && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (240 <= h && h < 300) {
    [r, g, b] = [x, 0, c];
  } else if (300 <= h && h < 360) {
    [r, g, b] = [c, 0, x];
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

export const generatePalette = (
  baseColor: string,
  type: PaletteType
): string[] => {
  const { r, g, b } = hexToRGB(baseColor);
  const { h, s, l } = rgbToHSL(r, g, b);

  switch (type) {
    case 'complementary': {
      const complement = hslToRGB(rotateHue(h, 180), s, l);
      return [baseColor, rgbToHex(complement.r, complement.g, complement.b)];
    }

    case 'analogous': {
      const color1 = hslToRGB(rotateHue(h, -30), s, l);
      const color2 = hslToRGB(rotateHue(h, 30), s, l);
      return [
        rgbToHex(color1.r, color1.g, color1.b),
        baseColor,
        rgbToHex(color2.r, color2.g, color2.b),
      ];
    }

    case 'triadic': {
      const color1 = hslToRGB(rotateHue(h, 120), s, l);
      const color2 = hslToRGB(rotateHue(h, 240), s, l);
      return [
        baseColor,
        rgbToHex(color1.r, color1.g, color1.b),
        rgbToHex(color2.r, color2.g, color2.b),
      ];
    }

    case 'tetradic': {
      const color1 = hslToRGB(rotateHue(h, 90), s, l);
      const color2 = hslToRGB(rotateHue(h, 180), s, l);
      const color3 = hslToRGB(rotateHue(h, 270), s, l);
      return [
        baseColor,
        rgbToHex(color1.r, color1.g, color1.b),
        rgbToHex(color2.r, color2.g, color2.b),
        rgbToHex(color3.r, color3.g, color3.b),
      ];
    }

    case 'monochromatic': {
      return [
        rgbToHex(
          ...(Object.values(hslToRGB(h, s, Math.max(0, l - 30))) as [
            number,
            number,
            number,
          ])
        ),
        rgbToHex(
          ...(Object.values(hslToRGB(h, s, Math.max(0, l - 15))) as [
            number,
            number,
            number,
          ])
        ),
        baseColor,
        rgbToHex(
          ...(Object.values(hslToRGB(h, s, Math.min(100, l + 15))) as [
            number,
            number,
            number,
          ])
        ),
        rgbToHex(
          ...(Object.values(hslToRGB(h, s, Math.min(100, l + 30))) as [
            number,
            number,
            number,
          ])
        ),
      ];
    }

    case 'split-complementary': {
      const color1 = hslToRGB(rotateHue(h, 150), s, l);
      const color2 = hslToRGB(rotateHue(h, 210), s, l);
      return [
        baseColor,
        rgbToHex(color1.r, color1.g, color1.b),
        rgbToHex(color2.r, color2.g, color2.b),
      ];
    }

    default:
      return [baseColor];
  }
};
