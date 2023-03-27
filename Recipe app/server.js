const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const homeRoutes = require('./routes/home-routes');
const userRoutes = require('./routes/user-routes');

const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// creates a session object with chosen attributes
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// creates session and adds the middleware to the app
app.use(session(sess));

// declare the template that we are using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoutes);
app.use('/users', userRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log('server running'));
        console.log('Successful sync!');
    }).catch((error) => {
        console.error('Sync failed', error);
    });