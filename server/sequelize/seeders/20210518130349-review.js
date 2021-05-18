'use strict';
const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Review", [
      {
        reviewer_id: 2,
        employee_id: 1,
        feedback: 'hey hey you',
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Review", null, {});
  }
};
