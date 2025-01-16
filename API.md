# The Simplest Color Checker API Documentation

## Table of Contents

1. [Color Validation](#color-validation)
2. [Color Conversions](#color-conversions)
3. [Brightness](#brightness)
4. [Contrast](#contrast)
5. [Palette Generation](#palette-generation)
6. [Color Manipulation](#color-manipulation)
7. [Random Colors](#random-colors)
8. [CSS Integration](#css-integration)

## Color Validation

### `isValidHex(color: string): boolean`
Validates a hexadecimal color string.
```typescript
isValidHex('#FF0000') // true
isValidHex('invalid') // false
```

### `isValidRGB(r: number, g: number, b: number): boolean`
Validates RGB color values.
```typescript
isValidRGB(255, 0, 0) // true
isValidRGB(300, 0, 0) // false
```

### `isValidHSL(h: number, s: number, l: number): boolean`
Validates HSL color values.
```typescript
isValidHSL(360, 100, 50) // true
isValidHSL(400, 100, 50) // false
```

## Color Conversions

### `hexToRGB(hex: string): { r: number; g: number; b: number }`
Converts a hex color to RGB.
```typescript
hexToRGB('#FF0000') // { r: 255, g: 0, b: 0 }
```

### `rgbToHex(r: number, g: number, b: number): string`
Converts RGB values to a hex color.
```typescript
rgbToHex(255, 0, 0) // '#FF0000'
```

### `rgbToHSL(r: number, g: number, b: number): { h: number; s: number; l: number }`
Converts RGB values to HSL.
```typescript
rgbToHSL(255, 0, 0) // { h: 0, s: 100, l: 50 }
```

## Brightness

### `getBrightness(color: string): number`
Calculates the brightness value of a color (0-255).
```typescript
getBrightness('#FFFFFF') // 255
```

### `isLight(color: string): boolean`
Determines if a color is considered light.
```typescript
isLight('#FFFFFF') // true
```

## Contrast

### `getContrastRatio(color1: string, color2: string): number`
Calculates the contrast ratio between two colors.
```typescript
getContrastRatio('#000000', '#FFFFFF') // 21
```

## Palette Generation

### `generatePalette(baseColor: string, type: PaletteType): string[]`
Generates a color palette based on color theory.
```typescript
generatePalette('#FF0000', 'complementary')
generatePalette('#FF0000', 'analogous')
generatePalette('#FF0000', 'triadic')
```

Available palette types:
- `'complementary'`
- `'analogous'`
- `'triadic'`
- `'tetradic'`
- `'monochromatic'`
- `'split-complementary'`

## Color Manipulation

### `adjustBrightness(color: string, amount: number): string`
Adjusts the brightness of a color.
```typescript
adjustBrightness('#FF0000', 20) // Increases brightness by 20%
```

### `adjustSaturation(color: string, amount: number): string`
Adjusts the saturation of a color.
```typescript
adjustSaturation('#FF0000', -20) // Decreases saturation by 20%
```

### `mix(color1: string, color2: string, weight?: number): string`
Mixes two colors together.
```typescript
mix('#FF0000', '#0000FF', 0.5) // Purple
```

### `tint(color: string, amount: number): string`
Mixes a color with white.
```typescript
tint('#FF0000', 0.5) // Pink
```

### `shade(color: string, amount: number): string`
Mixes a color with black.
```typescript
shade('#FF0000', 0.5) // Dark red
```

### `invert(color: string): string`
Inverts a color.
```typescript
invert('#FF0000') // '#00FFFF'
```

### `grayscale(color: string): string`
Converts a color to grayscale.
```typescript
grayscale('#FF0000') // Grayscale equivalent
```

## Random Colors

### `randomColor(options?: RandomColorOptions): string`
Generates a random color.
```typescript
randomColor()
randomColor({ minBrightness: 100, maxBrightness: 200, saturation: 80 })
```

### `randomPalette(count?: number, options?: RandomPaletteOptions): string[]`
Generates a random color palette.
```typescript
randomPalette(5)
randomPalette(3, { variation: 30, minBrightness: 100 })
```

## CSS Integration

### `createCSSColor(color: string, alpha?: number): string`
Creates a CSS-compatible color string.
```typescript
createCSSColor('#FF0000') // 'rgb(255, 0, 0)'
createCSSColor('#FF0000', 0.5) // 'rgba(255, 0, 0, 0.5)'
```

### `getTextColor(backgroundColor: string): string`
Determines appropriate text color for a background.
```typescript
getTextColor('#FFFFFF') // '#000000'
```

### `createStyles(color: string): Record<string, string>`
Creates a style object for a color.
```typescript
createStyles('#FF0000')
// {
//   backgroundColor: '#FF0000',
//   color: '#FFFFFF',
//   borderColor: 'rgba(255, 0, 0, 0.2)',
//   boxShadow: '0 0 10px rgba(255, 0, 0, 0.1)'
// }
```

### `applyStyles(element: HTMLElement, styles: Record<string, string>): void`
Applies styles to an HTML element.
```typescript
applyStyles(element, createStyles('#FF0000'))
```

### `createColorVariables(colors: Record<string, string>): string`
Creates CSS custom properties.
```typescript
createColorVariables({
  primary: '#FF0000',
  secondary: '#00FF00'
})
// '--color-primary: #FF0000;\n--color-secondary: #00FF00;'
```