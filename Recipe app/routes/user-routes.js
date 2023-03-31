const router = require('express').Router();
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const signupController = require('../controllers/signupController');
const addRecipe = require('../controllers/addRecipe');

router.post('/login', loginController);
router.post('/logout', logoutController);
router.post('/signup', signupController);
router.post('/users/:userId/recipes', addRecipe);

module.exports = router;