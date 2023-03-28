const router = require('express').Router();
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const signupController = require('../controllers/signupController');

router.post('/login', loginController);

router.post('/logout', logoutController);

router.post('/signup', signupController);



module.exports = router;