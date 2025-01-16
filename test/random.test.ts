import { describe, it, expect } from 'vitest';
import { randomColor, randomPalette } from '../src/random';
import { isValidHex } from '../src/validation';
import { hexToRGB, rgbToHSL } from '../src/color-conversions';

describe('Random Colors', () => {
  describe('randomColor', () => {
    it('should generate valid hex colors', () => {
      const color = randomColor();
      expect(isValidHex(color)).toBe(true);
    });

    it('should respect brightness constraints', () => {
      const color = randomColor({ minBrightness: 200, maxBrightness: 255 });
      const rgb = hexToRGB(color);
      expect(Math.max(rgb.r, rgb.g, rgb.b)).toBeGreaterThanOrEqual(200);
    });

    it('should respect saturation constraints', () => {
      const color = randomColor({ saturation: 100 });
      const { s } = rgbToHSL(
        hexToRGB(color).r,
        hexToRGB(color).g,
        hexToRGB(color).b
      );
      expect(s).toBe(100);
    });
  });

  describe('randomPalette', () => {
    it('should generate correct number of colors', () => {
      expect(randomPalette(5)).toHaveLength(5);
      expect(randomPalette(3)).toHaveLength(3);
    });

    it('should generate valid hex colors', () => {
      const palette = randomPalette(3);
      palette.forEach(color => {
        expect(isValidHex(color)).toBe(true);
      });
    });
  });
});
