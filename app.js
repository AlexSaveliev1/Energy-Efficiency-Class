const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const efc = require('./routes/energy-efficiency-class');
const { PORT } = require('./configs/config');
const database = require('./initializers/database');

const app = express();
database.create();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', efc);

app.listen(PORT, () => console.log(`EFC app listening on port ${PORT}!`));

module.exports = app;
