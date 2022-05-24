const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'library'
})

//run test to see if database is connected
connection.connect(function(error){
    if (!error) console.log('Library Database Connected')
    else console.log(error)
})

module.exports = connection