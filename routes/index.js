var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {

    mongoose.model('Project').count({}, function (err, projectCount) {
        if (err) {
            return console.error(err);
        } else {
            res.render('index', {
                title: 'The Uncopyright Project',
                projectCount: projectCount
            });
        }
    })
});

module.exports = router;
