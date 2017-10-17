var express = require('express');
var mongoose = ('mongoose');
var Job = require('../models/job')
var router = express.Router();


router.get('/', function(req, res, next) {
  // Job.create({
  //   title: 'Junior Dev',
  //   companyName: 'Microsoft',
  //   location:'Seattle, WA'
  // }, function(err, job) {
  //   if (err) return console.log(err);
  //   res.send(job);
  // });
  Job.find({}, function(err, jobs){
    if(err) return console.log(err);
    res.send(jobs)
  })
});

module.exports = router;
