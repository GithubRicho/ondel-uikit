import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ff47db",
  primaryBright: "#ff47db",
  primaryDark: "#ff47db",
  secondary: "#ff47db",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ff47db",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eaf4f0",
  tertiary: "#EFF4F5",
  text: "#222f87",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e4f59",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#0f5f54",
  background: "#343135",
  backgroundDisabled: "#28a392",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#0098A1",
  primaryDark: "#0098A1",
  tertiary: "#28a392",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c9c4d4",
  borderColor: "#28a392",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #0f5f54 0%, #0e3731 100%)",
  },
};
