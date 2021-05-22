export interface IUser {
  id: number;
  username: string;
  user_id: string;
  password: string;
  name: string;
  is_admin: boolean;
}

export interface IReview {
  id: number;
  reviewer_id: string;
  employee_id: string;
  feedback: string;
  is_reviewed: boolean;
}

export enum Theme {
  Primary = "primary",
  Main = "main",
  Normal = "normal",
  Light = "light",
  Warning = "warning",
  Dangerous = "dangerous",
}

export enum Size {
  L = "L",
  M = "M",
  S = "S",
}

export interface BasStyleProps {
  sizeType?: Size;
  themeType?: Theme;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}
