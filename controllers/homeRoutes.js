const router = require('express').Router();
const { User, Recipe } = require('../models');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll({
            include: [ User ],
        });
        console.log(recipes);
        res.render('homepage', {
            recipes: recipes
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/profile', (req, res) => {
    res.render('user');
});

module.exports = router;

// const router = require('express').Router();
// const { User, Recipe } = require('../models');

// router.get('/', async (req, res) => {
//     try {
//         const recipes = await Recipe.findAll({
//             include: [ User ],
//         });
//         console.log(recipes)
//         res.render('homepage', {
//         //    is the same as recipes: recipes?
//             blog_posts
//         })
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.get('/login', (req, res) => {
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

// router.get('/signup', (req, res) => {
//     res.render('signup');
// })

// router.get('/profile', (req, res) => {
//     res.render('profile');
// })



// module.exports = router;