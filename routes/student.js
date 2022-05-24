const express = require('express')
const router = express.Router();

const connection = require('../database/db')

router.get('/students', (req, res) =>{
    let sql = "SELECT * FROM library.student"
    let query = connection.query(sql, (err, rows) =>{
        if (err) console.log('connection unsuccessful');
        else console.log('student query ran')
        res.render('students', {
            students: rows
        })
    })
})

module.exports = router