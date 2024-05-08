import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { baseKeyframe1, baseKeyframe2, imageKeyframe1, imageKeyframe2 } from "./keyframes.css";

export const styleConfig = {
  width: createVar(),
  inside: createVar() as "true" | "false",
  activeFxOnHover: createVar() as "true" | "false",
  opacity: createVar(),
};
export const wrapperStyle = style({
  position: "relative",
  width: styleConfig.width,
});
globalStyle(`${wrapperStyle} img`, {
  width: "100%",
});
globalStyle(`${wrapperStyle} canvas`, {
  width: "100%",
  height: "100%",
});

export const imgGlitchStyle = style({
  position: "absolute",
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  animationIterationCount: "infinite",
  animationDuration: "150ms",
  animationFillMode: "forwards",
  opacity: 0,
  zIndex: 2,
});
globalStyle(`${imgGlitchStyle} div`, {
  width: "100%",
  height: "100%",
  position: "absolute",
});
globalStyle(`${imgGlitchStyle} canvas`, {
  opacity: styleConfig.opacity,
});

export const imgGlitchBaseStyle = style([imgGlitchStyle, {
  animationIterationCount: "infinite",
  animationFillMode: "forwards",
  opacity: 0,
  animationDuration: "150ms",
  zIndex: 0,
}]);
globalStyle(`${imgGlitchBaseStyle} canvas`, {
  opacity: 1,
  transform: "none",
  filter: "unset !important",
});

export const divGlitchSectionStyle = style({
  height: "100%",
  width: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  overflow: styleConfig.inside === "true" ? "hidden" : "unset",
  pointerEvents: !styleConfig.activeFxOnHover ? "none" : "all",
});
globalStyle(`${divGlitchSectionStyle} img, ${divGlitchSectionStyle} canvas`, {
  position: "absolute",
});

export const activeGlitchFxStyle = style({});
globalStyle(`${divGlitchSectionStyle}.${activeGlitchFxStyle} ${imgGlitchStyle}`, {
  animationName: imageKeyframe1,
  zIndex: styleConfig.inside === "true" ? 2 : 0,
  opacity: 1,
});
globalStyle(`${divGlitchSectionStyle}.${activeGlitchFxStyle} ${imgGlitchStyle}:nth-child(odd)`, {
  animationName: imageKeyframe2,
});
globalStyle(`${divGlitchSectionStyle}.${activeGlitchFxStyle} ${imgGlitchBaseStyle}`, {
  opacity: 1,
  animationName: baseKeyframe1,
});
globalStyle(`${divGlitchSectionStyle}.${activeGlitchFxStyle} ${imgGlitchBaseStyle}:nth-child(odd)`, {
  animationName: baseKeyframe2,
});