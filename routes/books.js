const express = require('express')
const router = express.Router();

const connection = require('../database/db')

router.get('/books', (req, res) =>{
    let sql = "SELECT * FROM library.book"
    let query = connection.query(sql, (err, rows) =>{
        if (err) console.log('connection unsuccessful');
        else console.log('book query ran')
        res.render('books', {
            books: rows
        })
    })
})

module.exports = router