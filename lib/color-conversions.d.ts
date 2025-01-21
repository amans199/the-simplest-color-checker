export declare const namedColorToRGB: (color: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare const rgbStringToRGB: (rgb: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export declare const toRGB: (color: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const hexToRGB: (hex: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const hexToRgba: (color: string, alpha: number) => string;
export declare const rgbToHex: (r: number, g: number, b: number) => string;
export declare const rgbToHSL: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
export declare const hslToRGB: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
