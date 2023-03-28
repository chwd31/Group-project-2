// Import dependencies
const sequelize = require('../config/connection');
const { User, Recipe, Comment } = require('../models');

const userData = require('./userData');
const recipeData = require('./recipeData.js');
const commentData = require('./commentData.js');

async function seedDatabase() {
  // Sync the database and create tables if they don't exist
  await User.sync({ force: true });
  await Recipe.sync({ force: true });
  await Comment.sync({ force: true });

  // Seed the User table
  const users = await User.bulkCreate(usersData);

  // Seed the Recipe table with a reference to the corresponding User
  const recipes = await Promise.all(
    recipesData.map(async (recipeData) => {
      const user = users.find((user) => user.username === recipeData.username);
      return Recipe.create({ ...recipeData, userId: user.id });
    })
  );

  // Seed the Comment table with a reference to the corresponding User and Recipe
  await Promise.all(
    commentsData.map(async (commentData) => {
      const user = users.find((user) => user.username === commentData.username);
      const recipe = recipes.find(
        (recipe) => recipe.title === commentData.recipeTitle
      );
      return Comment.create({
        ...commentData,
        userId: user.id,
        recipeId: recipe.id,
      });
    })
  );
}

// Execute the seedDatabase function
seedDatabase()
  .then(() => {
    console.log('Database seeding successful.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Database seeding failed:', error);
    process.exit(1);
  });
