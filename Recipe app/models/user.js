const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};


// Define the User model
 User.init (
    {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  
  // Define the Recipe model
   class Recipe extends Model {}
      Recipe.init ( 
    {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    ingredients: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    },
    directions: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
  
  // Define the Comment model
  class Comment extends Model {}
    Comment.init (
     {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
  
  // Define the associations between the models
  User.hasMany(Comment, { as: 'comments' });
  User.hasMany(Recipe, { as: 'recipes' });

  Recipe.belongsTo(User, { foreignKey: 'userId' });
  Recipe.hasMany(Comment, { as: 'comments' });

  Comment.belongsTo(Recipe, { foreignKey: 'recipeId' });
  Comment.belongsTo(User, { foreignKey: 'userId' });

  module.exports = User;
  module.exports = Recipe;
  module.exports = Comment;