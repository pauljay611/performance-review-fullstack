import { Sequelize } from "sequelize";

import Review, { reviewModelName, reviewModelAttributes } from "./review";
import User, {
  userModelName,
  userModelAttributes,
} from "./user";

require('dotenv').config({ path: `${__dirname}/../../../.env` })

const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    username: process.env.APP_DB_USERNAME,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB,
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

User.init(userModelAttributes, {
  sequelize,
  modelName: userModelName,
  freezeTableName: true,
  timestamps: true,
});

Review.init(reviewModelAttributes, {
  sequelize,
  modelName: reviewModelName,
  freezeTableName: true,
  timestamps: true,
});

User.hasMany(Review, { foreignKey: "employee_id" });
Review.belongsTo(User, {
  foreignKey: "employee_id",
});

export default sequelize;
