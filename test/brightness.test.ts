import { describe, it, expect } from 'vitest';
import { getBrightness, isLight } from '../src/brightness';

describe('Brightness', () => {
  describe('getBrightness', () => {
    it('should return maximum brightness for white', () => {
      expect(getBrightness('#FFFFFF')).toBe(254.99999999999997);
    });

    it('should return minimum brightness for black', () => {
      expect(getBrightness('#000000')).toBe(0);
    });

    it('should calculate brightness correctly for colors', () => {
      expect(getBrightness('#FF0000')).toBe(54.213);
      expect(getBrightness('#00FF00')).toBe(182.37599999999998);
      expect(getBrightness('#0000FF')).toBe(18.411);
    });
  });

  describe('isLight', () => {
    it('should identify light colors', () => {
      expect(isLight('#FFFFFF')).toBe(true);
      expect(isLight('#FFFF00')).toBe(true);
      expect(isLight('#90EE90')).toBe(true);
    });

    it('should identify dark colors', () => {
      expect(isLight('#000000')).toBe(false);
      expect(isLight('#800000')).toBe(false);
      expect(isLight('#000080')).toBe(false);
    });
  });
});
