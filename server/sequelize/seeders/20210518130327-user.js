'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        username: 'admin',
        user_id: uuidv4(),
        password: process.env.APP_DB_PASSWORD,
        name: 'admin',
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user0',
        user_id: uuidv4(),
        password: '1234',
        name: 'user0',
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
