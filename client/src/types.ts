export interface IStore {
  ID: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  category_id: number;
}

export interface IStoresPayload {
  location?: { lat: number; lng: number };
  category?: string;
  range: number;
}

export interface ICoupon {
  ID: string;
  name: string;
  description: string;
  type: CouponType;
  dueTimestamp: number;
  image: string;
}

export interface ICouponsPayload {
  storeID: number;
}

export enum CouponType {
  PriceCut,
  Discount,
  Free,
}

export interface IAccount {
  ID: string;
  name: string;
  userInfo: IUserInfo;
}

export interface IUserInfo {
  address: string;
  phone: number;
}

export interface ICategory {
  ID: string;
  name: string;
  description: string;
}

export enum Theme {
  Primary = "primary",
  Main = "main",
  Normal = "normal",
  Warning = "warning",
  Error = "error",
}

export enum Size {
  L = "L",
  M = "M",
  S = "S",
}
