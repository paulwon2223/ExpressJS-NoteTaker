const express = require('express');
const path = require('path');
const indexRoute = require('./routes/indexRoute');
const htmlRoute = require('./routes/htmlRoute');


const PORT = process.env.port || 3000;

const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoute)
app.use('/api', indexRoute);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/index.html'))
});

// GET Route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
})

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})
