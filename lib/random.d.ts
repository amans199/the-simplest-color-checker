export declare const randomColor: (options?: {
    minBrightness?: number;
    maxBrightness?: number;
    saturation?: number;
}) => string;
export declare const randomPalette: (count?: number, options?: {
    baseColor?: string;
    variation?: number;
    minBrightness?: number;
    maxBrightness?: number;
}) => string[];
