const { User } = require('../models');

async function signup(req, res) {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now signed up and logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = signup;