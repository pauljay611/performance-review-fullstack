import { findStoresByQuery, findStores, findStoreByID } from "../dao/store";

interface FindStoresQuery {
  range?: number;
  lat?: number;
  lng?: number;
  category?: string;
}

class Store {
  static async getAllData(query: FindStoresQuery) {
    if (!query.range || !query.lat || !query.lng) {
      const stores = await findStores();
      return stores;
    }
    const lat = +query.lat;
    const lng = +query.lng;
    const range = +query.range;

    const lowestLat = lat - range;
    const greatestLat = lat + range;
    const lowestLng = lng - range;
    const greatestLng = lng + range;

    const stores = await findStoresByQuery({
      lowestLat,
      lowestLng,
      greatestLat,
      greatestLng,
      category: query.category ?? "",
    });
    return stores;
  }
  static async getDataByID(id: number) {
    const stores = await findStoreByID(id);
    return stores;
  }
}

export default Store;
