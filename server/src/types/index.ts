export interface IStore {
  ID: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  category_id: number;
}

export interface ICoupon {
  ID: string;
  name: string;
  description: string;
  type: CouponType;
  dueTimestamp: number;
  image: string;
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
