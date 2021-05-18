"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("StoreCoupon", [
      {
        coupon_id: 1,
        store_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coupon_id: 2,
        store_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coupon_id: 3,
        store_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("StoreCoupon", null, {});
  },
};
