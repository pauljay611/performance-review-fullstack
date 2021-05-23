"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPwd = await bcrypt.hash(process.env.APP_DB_PASSWORD, 10);
    const hashedPwd2 = await bcrypt.hash("1234", 10);
    return queryInterface.bulkInsert("User", [
      {
        username: "admin",
        user_id: uuidv4(),
        password: hashedPwd,
        name: "admin",
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user0",
        user_id: uuidv4(),
        password: hashedPwd2,
        name: "user0",
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
