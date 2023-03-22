const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
require('dotenv').config();
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync()
    .then(() => {
        console.log('Successful sync!');
    }).catch((error) => {
        console.error('Sync failed', error);
    });