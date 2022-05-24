const express = require('express');
const port = 9000
const bodyParser = require('body-parser');
const db = require('./database/db')
const path = require('path');
const app = express();

//route variables
const booksRoute = require('./routes/books')
const studentRoute = require('./routes/student')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



//routes
app.use('/', booksRoute);
app.use('/', studentRoute);

app.get('/', (req,res) =>{
    res.send('server works')
})

//port listening
app.listen(port, ()=> { console.log(`Server running on http://localhost:${port}/`)})