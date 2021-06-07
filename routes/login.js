const { response } = require('express');
var express = require('express')
var router = express.Router();

router.get('/login', (require, response, next) =>{
    response.render('Login', {title:'Login Express'})
})

router.post('/handlelogin', (req, res, next) => {
    console.log(req.body)
    users.checkUsername()
    res.send(`berhasil Login ${req.body.username} `)
})