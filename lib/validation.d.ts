type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'named';
export declare const isValidHex: (color: string) => boolean;
export declare const isValidRGB: (r: number, g: number, b: number) => boolean;
export declare const isValidHSL: (h: number, s: number, l: number) => boolean;
export declare const validateColor: (color: string, format: ColorFormat) => boolean;
export {};
