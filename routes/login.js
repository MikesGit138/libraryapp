const express = require('express')
const router = express.Router();
const session = require('express-session')
const bcrypt = require('bcrypt')

const connection = require('../database/db')

router.get('/login', (req, res) => {
     res.render('login')
  })

router.post('/login',(req,res)=>{
  
    let fname = req.body.fname;
    let lname = req.body.lname;
    let username = req.body.username
    let password = req.body.password
  
    console.log(password);
    
    connection.query("select * from library.student where first_name = ?",[username],(error, results,fields)=>{
      if (error) throw error
      console.log(results);
      
        if(results.length > 0 && bcrypt.compare(password,results[0].password)){
          getHome()
            res.render('books')
            req.session.loggedin = true;
            req.session.username = username;
        }
  
        else{
        //   req.flash('error', 'incorrect credentials')
            // res.redirect('/login')  
    res.send('the credentials dont match a student')

        }
        res.end()
    })
})
module.exports = router