const User = require('./user');
const Recipe = require('./recipe');
const Comment = require('./comment');


User.hasMany(Comment, { foreignKey: 'user_id' });
User.hasMany(Recipe, { foreignKey: 'user_id' });

Recipe.belongsTo(User, { foreignKey: 'user_id' });
Recipe.hasMany(Comment, { foreignKey: 'recipe_id' });

Comment.belongsTo(Recipe, { foreignKey: 'recipe_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  User,
  Recipe,
  Comment
};