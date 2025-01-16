type PaletteType = 'complementary' | 'analogous' | 'triadic' | 'tetradic' | 'monochromatic' | 'split-complementary';
export declare const generatePalette: (baseColor: string, type: PaletteType) => string[];
export {};
