var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = mongoose.model('Project');

/* GET home page. */
router.get('/', function(req, res) {

    Project.count({}, function (err, projectCount) {
        if (err) {
            return console.error(err);
        } else {

            if (req.query.welcome) {

                var id = req.query.welcome

                Project.findById(id, function (err, projectRef) {
                    if (err) {

                        console.log('err:' + err)

                        res.render('index', {
                              name: 'The Uncopyright Project',
                              projectCount: projectCount
                        });

                    } else {

                        console.log('project ' + projectRef);

                        res.render('modal', {
                            name: 'The Uncopyright Project',
                            projectCount: projectCount,
                            projectRef: projectRef
                        });
                    }
                });

            } else {

                res.render('index', {
                    name: 'The Uncopyright Project',
                    projectCount: projectCount
                });
            };
        }
    })
});

router.get('/about', function(req, res) {
    res.render('about', {
        name: 'The Uncopyright Project'
    });
});

module.exports = router;
