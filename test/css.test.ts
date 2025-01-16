import { describe, it, expect } from 'vitest';
import {
  createCSSColor,
  getTextColor,
  createStyles,
  createColorVariables,
} from '../src/css';

describe('CSS Integration', () => {
  describe('createCSSColor', () => {
    it('should create RGB color string', () => {
      expect(createCSSColor('#FF0000')).toBe('rgb(255, 0, 0)');
    });

    it('should create RGBA color string with alpha', () => {
      expect(createCSSColor('#FF0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
    });
  });

  describe('getTextColor', () => {
    it('should return black for light backgrounds', () => {
      expect(getTextColor('#FFFFFF')).toBe('#000000');
    });

    it('should return white for dark backgrounds', () => {
      expect(getTextColor('#000000')).toBe('#ffffff');
    });
  });

  describe('createStyles', () => {
    it('should create style object with correct properties', () => {
      const styles = createStyles('#FF0000');
      expect(styles).toHaveProperty('backgroundColor', '#FF0000');
      expect(styles).toHaveProperty('color');
      expect(styles).toHaveProperty('borderColor');
      expect(styles).toHaveProperty('boxShadow');
    });
  });

  describe('createColorVariables', () => {
    it('should create CSS custom properties string', () => {
      const vars = createColorVariables({
        primary: '#FF0000',
        secondary: '#00FF00',
      });
      expect(vars).toBe(
        '--color-primary: #FF0000;\n--color-secondary: #00FF00;'
      );
    });
  });
});
