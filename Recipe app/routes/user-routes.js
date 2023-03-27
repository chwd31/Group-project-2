const express = require('express');
const path = require('path');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const signupController = require('../controllers/signupController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', loginController);

app.post('/logout', logoutController);

app.post('/signup', signupController);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});