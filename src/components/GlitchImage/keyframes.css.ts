import { keyframes, createVar } from "@vanilla-extract/css";

type KeyfraneStyleTypes = "marginLeft" | "marginBottom" | "opacity";
type KeyframeConfig = Record<
  number,
  Partial<Record<KeyfraneStyleTypes, number>>
>;
const configImageGlitch1: KeyframeConfig = {
  0: { marginLeft: 1, marginBottom: 0.5, opacity: 1 },
  20: { marginLeft: -3, marginBottom: -0.1 },
  40: { marginLeft: 3, marginBottom: 0.05 },
  60: { marginLeft: -1, marginBottom: 0.1 },
  74: { opacity: 1 },
  75: { opacity: 0 },
  80: { marginLeft: 0, marginBottom: 0 },
  85: { opacity: 1 },
  100: { marginLeft: 0.35, marginBottom: -0.05 },
};

const configImageGlitch2: KeyframeConfig = {
  0: { marginLeft: -3, opacity: 1 },
  20: { marginLeft: 2 },
  34: { opacity: 1 },
  35: { opacity: 0 },
  40: { marginLeft: 0 },
  45: { opacity: 1 },
  60: { marginLeft: 3 },
  80: { marginLeft: -3 },
  100: { marginLeft: 3.2 },
};

const configImageBaseGlitch1: KeyframeConfig = {
  0: { marginLeft: 0.5 },
  20: { marginLeft: -1 },
  40: { marginLeft: 1 },
  60: { marginLeft: -1 },
  80: { marginLeft: 0 },
  100: { marginLeft: 0.35 },
};
const configImageBaseGlitch2: KeyframeConfig = {
  0: { marginLeft: -1 },
  20: { marginLeft: 1 },
  40: { marginLeft: 0 },
  60: { marginLeft: 1 },
  80: { marginLeft: -1 },
  100: { marginLeft: 0.5 },
};
export const variation1 = createVar();
export const variation2 = createVar();

const getKeyframesWithVariationAndConfig = (
  variation: ReturnType<typeof createVar>,
  config: KeyframeConfig
) => {
  return Object.entries(config).reduce((acum, [key, style]) => {
    acum[key + "%"] = {
      ...(style.marginLeft && {
        marginLeft: `calc(${style.marginLeft}* ${variation})`
      }),
      ...(style.marginBottom && {
        marginBottom: `calc(${style.marginBottom}* ${variation})`,
      }),
      ...(style.opacity && { opacity: style.opacity }),
    };
    return acum;
  }, {} as Parameters<typeof keyframes>[0]);
};

export const imageKeyframe1 = keyframes(
  getKeyframesWithVariationAndConfig(variation1, configImageGlitch1)
);
export const imageKeyframe2 = keyframes(
  getKeyframesWithVariationAndConfig(variation1, configImageGlitch2)
);

export const baseKeyframe1 = keyframes(
  getKeyframesWithVariationAndConfig(variation2, configImageBaseGlitch1)
);

export const baseKeyframe2 = keyframes(
  getKeyframesWithVariationAndConfig(variation2, configImageBaseGlitch2)
);
