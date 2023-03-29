const Recipe = require('../models')

const recipedata = [
    {
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
    },
    {
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
    },
    {
        title: 'Classic Lasagna',
        description: 'A hearty and delicious Italian favorite!',
        ingredients: [
          '1 pound ground beef',
          '1 onion, chopped',
          '2 cloves garlic, minced',
          '1 (28-ounce) can crushed tomatoes',
          '1 (6-ounce) can tomato paste',
          '1/4 cup chopped fresh basil',
          '1 teaspoon salt',
          '1/4 teaspoon black pepper',
          '12 lasagna noodles',
          '16 ounces ricotta cheese',
          '1 egg',
          '1/4 cup chopped fresh parsley',
          '1 pound shredded mozzarella cheese',
          '3/4 cup grated Parmesan cheese',
        ],
        directions: [
          'Preheat oven to 375°F (190°C).',
          'In a large skillet over medium-high heat, cook ground beef, onion, and garlic until beef is browned and onion is tender; drain fat.',
          'Stir in crushed tomatoes, tomato paste, basil, salt, and pepper; bring to a boil. Reduce heat and simmer for 20 minutes.',
          'Meanwhile, cook lasagna noodles according to package directions; drain.',
          'In a medium bowl, combine ricotta cheese, egg, and parsley.',
          'Spread 1 cup of the meat sauce in the bottom of a 9x13-inch baking dish.',
          'Layer 4 lasagna noodles over the sauce, then spread one-third of the ricotta mixture over the noodles. Sprinkle with one-third of the mozzarella and Parmesan cheeses. Repeat layers two more times.',
          'Cover with foil and bake for 25 minutes.',
          'Remove foil and bake for an additional 25 minutes or until cheese is melted and bubbly.',
          'Let stand for 10 minutes before serving.',
        ],
    }
    {
        title: 'Beef Stroganoff',
        description: 'A hearty Russian dish made with tender beef, mushrooms, and sour cream sauce, served over egg noodles.',
        ingredients: [
          '1 pound beef sirloin, thinly sliced',
          '1/4 cup all-purpose flour',
          '2 tablespoons butter',
          '1 onion, diced',
          '8 ounces mushrooms, sliced',
          '2 cloves garlic, minced',
          '1 cup beef broth',
          '1 tablespoon Dijon mustard',
          '1/2 cup sour cream',
          'Salt and freshly ground black pepper',
          '8 ounces egg noodles, cooked'
        ],
        directions: [
          'In a bowl, season the beef with salt and pepper and toss with the flour to coat.',
          'In a large skillet, melt the butter over medium-high heat. Add the beef and cook until browned on all sides. Remove with a slotted spoon and set aside.',
          'Add the onion, mushrooms, and garlic to the skillet and cook until softened. Add the beef broth and mustard and bring to a simmer.',
          'Return the beef to the skillet and simmer until the sauce has thickened and the beef is cooked through.',
          'Remove from heat and stir in the sour cream. Season with salt and pepper to taste.',
          'Serve hot over cooked egg noodles.'
        ],
    },

]

module.exports = Recipe