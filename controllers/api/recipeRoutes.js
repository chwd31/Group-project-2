const router = require('express').Router();
const { Recipe } = require('../../models');

router.post('/', async (req, res) => {
    try {
       const newPost = await Recipe.create({ 
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        user_id: req.session.user_id
       })
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;