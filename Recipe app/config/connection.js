const Sequelize = require('sequelize');
const mysql = require('mysql2');
const express = require('express')
require('dotenv').config();

// create connection to our database
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, 
    {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;