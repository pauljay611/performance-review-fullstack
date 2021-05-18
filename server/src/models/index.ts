import { Sequelize } from "sequelize";
import Store, { storeModelName, storeModelAttributes } from "./store";
import Coupon, { couponModelName, couponModelAttributes } from "./coupon";
import Category, {
  categoryModelName,
  categoryModelAttributes,
} from "./category";

const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    username: "root",
    password: "my-password",
    database: "coupon_map",
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
  },
  stage: {
    username: process.env.CLEARDB_DATABASE_USER,
    password: process.env.CLEARDB_DATABASE_PASSWORD,
    database: process.env.CLEARDB_DATABASE_DB,
    host: process.env.CLEARDB_DATABASE_HOST,
    dialect: "mysql",
    port: 3306,
  },
  production: {
    username: process.env.CLEARDB_DATABASE_USER,
    password: process.env.CLEARDB_DATABASE_PASSWORD,
    database: process.env.CLEARDB_DATABASE_DB,
    host: process.env.CLEARDB_DATABASE_HOST,
    dialect: "mysql",
    port: 3306,
  },
};

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    port: config[env].port,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 30000,
    },
  }
);

export async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

Store.init(storeModelAttributes, {
  sequelize,
  modelName: storeModelName,
  timestamps: true,
});

Coupon.init(couponModelAttributes, {
  sequelize,
  modelName: couponModelName,
  timestamps: true,
});

Category.init(categoryModelAttributes, {
  sequelize,
  modelName: categoryModelName,
  timestamps: true,
});

Store.belongsToMany(Coupon, { through: "StoreCoupon", foreignKey: "store_id" });
Coupon.belongsToMany(Store, {
  through: "StoreCoupon",
  foreignKey: "coupon_id",
});

export default sequelize;
