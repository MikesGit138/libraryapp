require('dotenv').config()

const express = require('express');
const port = 9000
const bodyParser = require('body-parser');
const db = require('./database/db')
const path = require('path');
const app = express();
const session = require('express-session')
const mysql = require('mysql')

//route variables
const booksRoute = require('./routes/books')
const studentRoute = require('./routes/student')
const loginRoute = require('./routes/login')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))



//routes
app.use('/', booksRoute);
app.use('/', studentRoute);
app.use('/', loginRoute);

app.get('/', (req,res) =>{
    res.send('server works')
})

//port listening
app.listen(port, ()=> { console.log(`Server running on http://localhost:${port}/`)})