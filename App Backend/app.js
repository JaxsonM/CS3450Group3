const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const crypto = require('crypto')
const session = require('express-session')
const passport = require('passport')

const app = express();
app.use(session({
  secret: 'NotASecret', // For security, replace this with an environment variable
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true
  } 
}))
app.use(passport.authenticate('session'))
const indexRouter = require('./routes/index');


const cors = require('cors');

// Allow cross-origin requests
app.use(cors());

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development'
const sequelizeOptions = require("./database/config/config.js")
const sequelize = new Sequelize(sequelizeOptions[env] || sequelizeOptions['development'])

setImmediate(async () => {
  try {
    await sequelize.authenticate()
    console.log('sequelize has been authenticated')
  } catch (err) {
    console.log('sequelize was not authenticated', err)
  }
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
