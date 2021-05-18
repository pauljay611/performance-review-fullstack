"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Coupons", [
      {
        id: 1,
        name: "louisa coffee 50% off",
        description: "louisa coffee 50% off",
        type: "Discount",
        dueTimestamp: new Date(),
        image: "https://cdn.webapp/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "komeda coffee for free",
        description: "komeda coffee for free",
        type: "Free",
        dueTimestamp: new Date(),
        image: "https://cdn.webapp/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "coffee cup 50 price cut",
        description: "coffee cup 50 price cut",
        type: "PriceCut",
        dueTimestamp: new Date(),
        image: "https://cdn.webapp/image",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Coupons", null, {});
  },
};
