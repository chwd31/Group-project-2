const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        modelName: "user",
        key: "id"
      }
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        modelName: "recipe",
        key: "id"
      }
    }
  },
  {
    sequelize,
    modelName: "comment",
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Comment;