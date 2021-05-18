"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stores", [
      {
        id: 1,
        name: "John",
        description: "louisa coffee",
        lat: 25.0335,
        lng: 121.564,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Doe",
        description: "komeda coffee",
        lat: 25.0635,
        lng: 121.864,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Bill",
        description: "how dare you",
        lat: 25.1,
        lng: 121.764,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stores", null, {});
  },
};
