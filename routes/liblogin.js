const express = require('express')
const router = express.Router();
const session = require('express-session')
const bcrypt = require('bcrypt')
const passport = require('passport')

const connection = require('../database/db')


router.get('/liblogin', (req, res) => {
     res.render('liblogin')
  })

router.post('/liblogin',(req,res)=>{
  
    let fname = req.body.fname;
    let lname = req.body.lname;
    let teacherId = req.body.id
    let password = req.body.password
    
    connection.query("select * from library.student where id = ?",[teacherId],(error, results,fields)=>{
      if (error) throw error
      console.log(results);
      
        if(results.length > 0 && bcrypt.compare(password,results[0].password)){
            // res.redirect('/books')
            res.send('you are on the librarian page')
            req.session.loggedin = true;
        }
  
        else{
        //   req.flash('error', 'incorrect credentials')
            // res.redirect('/login')  
    res.send('the credentials dont match a librarian')

        }
        res.end()
    })
})
module.exports = router