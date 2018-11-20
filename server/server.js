const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/books', booksRouter);

module.exports = app;