// Import dependencies
const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const usersData = require('./userData');

async function seedDatabase() {
  // Seed the User table
  await sequelize.sync({force: true })
  const users = await User.bulkCreate(usersData);
  const recipes = [];

  users.forEach((user) => {
    const post1 =     {
      title: 'Cold Cut BLT',
      description: 'As Simple as it gets! Your choice of meat with an addition of Bacon, Lettuce, and Tomato between two slices of bread.',
      ingredients: [
          '(2) Slices of Bread',
          'Ham/Turkey/Balogna',
          'Bacon (Raw or Precooked)',
          'Cheese',
          'Lettuce',
          'Tomato',
          'Mayo',
      ],
      directions: [
          '1.  Take a slice of bread and put it on a plate; Also cook bacon if raw',
          '2.  Spread some mayo on one face of the bread',
          '3.  Add a Slice of Cheese on top of the mayo',
          '4.  Layer some of the Cooked bacon on the cheese (Ideally hot if you want the cheese melted)',
          '5.  Add a slice of tomato on top of the bacon (This helps avoid soggy bread)',
          '6.  Add on your preferred Cold cut meat',
          '7.  Add another layer of Bacon',
          '8.  Add Lettuce',
          '9.  Add another slice of cheese',
          '10. Spread mayo on your other slice of bread and place it on top',
          '11. Enjoy your completed Sandwich!',
      ],
      user_id: user.id
  }

    const post2 = {
      title: 'Creamy Chicken Alfredo',
      description: 'A delicious and creamy pasta dish that is quick and easy to make!',
      ingredients: [
          '1 pound fettuccine pasta',
          '2 tablespoons butter',
          '4 cloves garlic, minced',
          '2 cups heavy cream',
          '1 cup grated Parmesan cheese',
          '1/2 teaspoon salt',
          '1/4 teaspoon black pepper',
          '2 cups cooked and shredded chicken',
          '1/4 cup chopped fresh parsley',
      ],
      directions: [
          '1. Cook fettuccine pasta according to package directions; drain and set aside.',
          '2. In a large skillet over medium heat, melt butter and add garlic; cook for 1 minute.',
          '3. Add heavy cream, Parmesan cheese, salt, and pepper; bring to a simmer.',
          '4. Reduce heat to low and cook for 5-7 minutes, or until sauce has thickened.',
          '5. Add shredded chicken and parsley to the sauce; stir to combine.',
          '6. Add cooked pasta to the sauce and toss to coat.',
          '7. Serve immediately, garnished with additional Parmesan cheese and parsley if desired.',
      ],
      user_id: user.id
  }
    recipes.push(post1, post2);

  });
await Recipe.bulkCreate(recipes)
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
