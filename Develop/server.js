const express = require('express');
const api = require('./routes/index')

// creating port
const PORT = process.env.port || 3002;

const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', api);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})
