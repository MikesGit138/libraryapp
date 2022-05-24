const express = require('express');
const port = 9000
const bodyParser = require('body-parser');
const db = require('./database/db')
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req,res) =>{
    res.send('server works')
})

//port listening
app.listen(port, ()=> { console.log(`Server running on http://localhost:${port}/`)})