import { describe, it, expect } from 'vitest';
import { isValidHex, isValidRGB, isValidHSL } from '../src/validation';

describe('Color Validation', () => {
  describe('HEX Validation', () => {
    it('should validate correct HEX colors', () => {
      expect(isValidHex('#000')).toBe(true);
      expect(isValidHex('#000000')).toBe(true);
      expect(isValidHex('#FFF')).toBe(true);
      expect(isValidHex('#FFFFFF')).toBe(true);
    });

    it('should reject invalid HEX colors', () => {
      expect(isValidHex('000')).toBe(false);
      expect(isValidHex('#GGG')).toBe(false);
      expect(isValidHex('#FFFF')).toBe(false);
    });
  });

  describe('RGB Validation', () => {
    it('should validate correct RGB values', () => {
      expect(isValidRGB(0, 0, 0)).toBe(true);
      expect(isValidRGB(255, 255, 255)).toBe(true);
      expect(isValidRGB(128, 128, 128)).toBe(true);
    });

    it('should reject invalid RGB values', () => {
      expect(isValidRGB(-1, 0, 0)).toBe(false);
      expect(isValidRGB(256, 0, 0)).toBe(false);
      expect(isValidRGB(0, -1, 0)).toBe(false);
    });
  });
});
