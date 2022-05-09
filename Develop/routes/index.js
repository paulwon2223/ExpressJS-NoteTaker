const express = require('express');
const app = express();

const apiRoute = require('./apiRoute');
const htmlRoute = require('./htmlRoute');

app.use('/', apiRoute);
app.use('/api/notes', htmlRoute);

module.exports = app;