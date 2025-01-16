import { describe, it, expect } from 'vitest';
import { getContrastRatio } from '../src/contrast';

describe('Contrast', () => {
  it('should calculate maximum contrast ratio for black and white', () => {
    const ratio = getContrastRatio('#000000', '#FFFFFF');
    expect(ratio).toBeCloseTo(21, 1);
  });

  it('should calculate minimum contrast ratio for same colors', () => {
    const ratio = getContrastRatio('#FF0000', '#FF0000');
    expect(ratio).toBeCloseTo(1, 1);
  });

  it('should calculate contrast ratios symmetrically', () => {
    const ratio1 = getContrastRatio('#FF0000', '#FFFFFF');
    const ratio2 = getContrastRatio('#FFFFFF', '#FF0000');
    expect(ratio1).toBe(ratio2);
  });

  it('should calculate contrast ratios for various color combinations', () => {
    expect(getContrastRatio('#000000', '#808080')).toBeGreaterThan(5);
    expect(getContrastRatio('#FFFFFF', '#808080')).toBeGreaterThan(3);
  });
});
