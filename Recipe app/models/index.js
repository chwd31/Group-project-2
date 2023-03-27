const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);
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
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize
  }
);
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
    }
  },
  {
    sequelize
  }
);

User.hasMany(Comment, { as: 'comments' });
User.hasMany(Recipe, { as: 'recipes' });

Recipe.belongsTo(User, { foreignKey: 'userId' });
Recipe.hasMany(Comment, { as: 'comments' });

Comment.belongsTo(Recipe, { foreignKey: 'recipeId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  User,
  Recipe,
  Comment
};