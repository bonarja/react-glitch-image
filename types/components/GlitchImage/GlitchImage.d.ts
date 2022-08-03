/// <reference types="react" />
declare type GlitchImageInput = {
    image: string;
    width?: number;
    splitSize?: number;
    animationInterval?: number;
    animationDuration?: number;
    variations?: Array<number>;
    inside?: boolean;
    opacity?: number;
    brightness?: number;
    filter?: boolean;
    customFilter?: string;
    activeFxOnInterval?: boolean;
    activeFxOnHover?: boolean;
    onActiveFx?: (time: number) => void;
};
declare const GlitchImage: ({ image, width, splitSize, animationInterval, animationDuration, variations, inside, opacity, brightness, filter, customFilter, activeFxOnInterval, activeFxOnHover, onActiveFx }: GlitchImageInput) => JSX.Element;
export { GlitchImage };
//# sourceMappingURL=GlitchImage.d.ts.map