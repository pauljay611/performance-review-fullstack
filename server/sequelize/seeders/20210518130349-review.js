"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Review", [
      {
        reviewer_id: 2,
        employee_id: 3,
        feedback: "hey hey you",
        is_reviewed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewer_id: 3,
        employee_id: 4,
        feedback: "",
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewer_id: 4,
        employee_id: 3,
        feedback: "",
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewer_id: 3,
        employee_id: 2,
        feedback: "",
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewer_id: 4,
        employee_id: 2,
        feedback: "",
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        reviewer_id: 2,
        employee_id: 4,
        feedback: "",
        is_reviewed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Review", null, {});
  },
};
