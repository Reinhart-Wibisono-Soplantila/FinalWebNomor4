var express = require('express');
var router = express.Router();
var users = require(`../models/usersModels`)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/handlelogin', (req, res, next) => {
  console.log(req.body)
  users.checkUsername(req.body, (result)=> {
    console.log(result)
  })
  res.send(`berhasil Login ${req.body.username} `)
})
module.exports = router;
