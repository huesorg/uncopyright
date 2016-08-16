var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.route('/')

    // GET all projects
    .get(function(req, res) {

        mongoose.model('Project').find({}, function (err, projects) {
            if (err) {
                return console.error(err);
            } else {
                res.render('projects/index', {
                    name: "Projects",
                    projects: projects
                });
            }
        });
    })

router.param('id', function(req, res, next, id) {

    mongoose.model('Project').findById(id, function (err, project) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 }
            });
        //if it is found we continue on
        } else {
            console.log(project);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next();
        }
    });
});


router.route('/:id')

    // GET project by id
    .get(function(req, res) {
        console.log('Request: ' + req);
        mongoose.model('Project').findById(req.id, function (err, project) {
            if (err) {
              console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
              res.render('projects/show', {
                  project: project
              });
            }
        });
    });

module.exports = router;
