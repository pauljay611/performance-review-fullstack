import Store from "../models/store";
import { Op } from "sequelize";
interface Range {
  [Op.gte]: number;
  [Op.lt]: number;
}
interface Condition {
  lat: Range;
  lng: Range;
  category_id?: { [Op.eq]: string };
}
export interface FindStores {
  lowestLat: number;
  lowestLng: number;
  greatestLat: number;
  greatestLng: number;
  category: string;
}

export const findStores = async () => {
  const stores = await Store.findAll();
  return stores;
};

export async function findStoresByQuery({
  lowestLat,
  lowestLng,
  greatestLat,
  greatestLng,
  category,
}: FindStores) {
  const whereCondition: Condition = {
    lat: { [Op.gte]: lowestLat, [Op.lt]: greatestLat },
    lng: { [Op.gte]: lowestLng, [Op.lt]: greatestLng },
    category_id: { [Op.eq]: category },
  };

  const stores = await Store.findAll({
    where: {
      [Op.and]: whereCondition,
    },
  });
  return stores;
}

export const findStoreByID = async (id: number) => {
  const store = await Store.findByPk(id);
  return store;
};
