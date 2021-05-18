require("dotenv").config({ path: __dirname + "/./../../../.env" });

module.exports = {
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
