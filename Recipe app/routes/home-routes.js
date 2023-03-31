const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../util/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    console.log('test1')
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log('test2')
  if (req.session.logged_in) {
    
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
