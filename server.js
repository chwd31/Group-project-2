const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ partialsDir: path.join(__dirname, 'views/partials') });
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'), {
    headers: {
        'Content-Type': 'text/css'
    }
}));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/css');
    next();
  });
  

app.use(routes);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () => console.log('server running'));
        console.log('Successful sync!');
    }).catch((error) => {
        console.error('Sync failed', error);
    });
