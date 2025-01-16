import { describe, it, expect } from 'vitest';
import {
  adjustBrightness,
  adjustSaturation,
  mix,
  invert,
  grayscale,
} from '../src/manipulation';
import { hexToRGB } from '../src/color-conversions';

describe('Color Manipulation', () => {
  const baseColor = '#ff0000';

  it('should adjust brightness', () => {
    const lighter = adjustBrightness(baseColor, 20);
    const darker = adjustBrightness(baseColor, -20);

    expect(lighter).not.toBe(baseColor); // Lighter should differ from the base color
    expect(darker).not.toBe(baseColor); // Darker should differ from the base color

    expect(lighter).toBe('#ff3333'); // Example: Check specific value
    expect(darker).toBe('#cc0000'); // Example: Check specific value
  });

  it('should adjust saturation', () => {
    const desaturated = adjustSaturation(baseColor, 100);
    expect(desaturated).not.toBe(baseColor); // Desaturated should differ from the base color
  });

  it('should mix colors', () => {
    const mixed = mix('#ff0000', '#0000ff', 0.5);
    expect(mixed.toLowerCase()).toBe('#800080');
  });

  it('should invert colors', () => {
    const inverted = invert('#ff0000');
    expect(inverted.toLowerCase()).toBe('#00ffff');
  });

  it('should convert to grayscale', () => {
    const gray = grayscale('#ff0000');
    const { r, g, b } = hexToRGB(gray);
    expect(r).toBe(g);
    expect(g).toBe(b);
  });
});
