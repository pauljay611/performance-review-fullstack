'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Review.init({
    reviewer_id: DataTypes.UUIDV4,
    employee_id: DataTypes.UUIDV4,
    feedback: DataTypes.TEXT,
    is_reviewed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};