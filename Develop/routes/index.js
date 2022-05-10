const express = require('express');
const app = express();

const apiRoute = require('./htmlRoute');
const htmlRoute = require('./apiRoute');

app.use('/', apiRoute);
app.use('/api/notes', htmlRoute);

module.exports = app;