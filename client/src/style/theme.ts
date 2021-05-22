import { Theme, Size } from "../types";

export const color: Record<Theme, string> = {
  [Theme.Primary]: "#3895ff",
  [Theme.Main]: "#FF0034",
  [Theme.Normal]: "#242323",
  [Theme.Warning]: "#FEE58F",
  [Theme.Error]: "#FF4D50",
};

export const size: Record<Size, string> = {
  [Size.L]: "24px",
  [Size.M]: "18px",
  [Size.S]: "12px",
};

export const buttonSize: Record<Size, { width: string; height: string }> = {
  [Size.L]: { width: "128px", height: "36px" },
  [Size.M]: { width: "96px", height: "24px" },
  [Size.S]: { width: "48px", height: "12px" },
};
