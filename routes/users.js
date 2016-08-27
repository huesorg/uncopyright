var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.route('/')

  .get(function(req, res) {
    res.send('users index');
  })

module.exports = router;
