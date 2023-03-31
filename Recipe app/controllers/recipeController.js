const { User } = require('../models');

async function addRecipe(req, res) {
  try {
    // Check for authentication
    if (!req.session.logged_in) {
      return res.status(401).json({ error: 'You must be logged in to add a recipe' });
    }

    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { title, description, ingredients, directions } = req.body;
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      directions,
      user_id: userId
    });

    return res.json(recipe);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = addRecipe;