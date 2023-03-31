const router = require('express').Router();
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const signupController = require('../controllers/signupController');
const addRecipe = require('../controllers/recipeController');

router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/signup', signupController);
router.post('/:userId/recipes', addRecipe);

module.exports = router;