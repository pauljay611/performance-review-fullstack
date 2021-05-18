"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "drinks",
        description: "all drinks include softdrink and alcohol",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "foods",
        description: "something you can eat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "groceries",
        description: "something you can use",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
