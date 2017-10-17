var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user')
var router = express.Router();


 router.get('/', function(req, res, next) {
   User.find({}, function(err, users) {
     if(err) return console.log(err);
     console.log(users);
     res.send(users);
   })
 });

 module.exports = router;
