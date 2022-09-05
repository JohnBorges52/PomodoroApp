var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require('./configs/db.config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pomodorosRouter = require('./routes/pomodoros');
var breaksRouter = require('./routes/breaks');
var stickersRouter = require('./routes/stickers');
var user_stickersRouter = require('./routes/user_stickers');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/pomodoros', pomodorosRouter(db));
app.use('/breaks', breaksRouter(db));
app.use('/stickers', stickersRouter(db));
app.use('/user_stickers', user_stickersRouter(db));




module.exports = app;
