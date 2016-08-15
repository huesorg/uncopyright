var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.route('/')

// GET all entries
.get(function(req, res, next) {
    mongoose.model('Project').find({}, function (err, projects) {
          if (err) {
              return console.error(err);
          } else {
              res.format({
                html: function(){
                    res.render('projects/index', {
                        title: "Projects",
                        "projects": projects
                    });
                }
            });
          }
    });
})

module.exports = router;
