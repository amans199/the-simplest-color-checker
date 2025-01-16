import { describe, it, expect } from 'vitest';
import { generatePalette } from '../src/palette';

describe('Palette Generation', () => {
  const baseColor = '#ff0000';

  it('should generate complementary colors', () => {
    const palette = generatePalette(baseColor, 'complementary');
    expect(palette).toHaveLength(2);
    expect(palette[0]).toBe(baseColor);
  });

  it('should generate analogous colors', () => {
    const palette = generatePalette(baseColor, 'analogous');
    expect(palette).toHaveLength(3);
    expect(palette[1]).toBe(baseColor);
  });

  it('should generate monochromatic colors', () => {
    const palette = generatePalette(baseColor, 'monochromatic');
    expect(palette).toHaveLength(5);
    expect(palette[2]).toBe(baseColor);
  });
});
