const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');
class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modelName: "User",
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "recipe",
    freezeTableName: true,
    underscored: true,
    timestamps: true
  }
);

module.exports = Recipe;