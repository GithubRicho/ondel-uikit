import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
<<<<<<< HEAD
  primary: "#0f5f54",
  primaryBright: "#0f5f54",
  primaryDark: "#0f5f54",
  secondary: "#0e3731",
=======
  primary: "#3e80ca",
  primaryBright: "#3e80ca",
  primaryDark: "#3e80ca",
  secondary: "#4e9ece",
>>>>>>> refs/remotes/origin/master
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
<<<<<<< HEAD
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#ebf4ea",
  tertiary: "#EFF4F5",
  text: "#0e3731",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e5951",
=======
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eaf4f0",
  tertiary: "#EFF4F5",
  text: "#222f87",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e4f59",
>>>>>>> refs/remotes/origin/master
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
<<<<<<< HEAD
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
=======
  secondary: "#4e9ece",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#354347",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c4c9d4",
  borderColor: "#4b5363",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
>>>>>>> refs/remotes/origin/master
  },
};
