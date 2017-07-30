const express = require('express');
const passport = require('passport');
const router = express.Router();

const mongooseUser = require('./../models/mongoose/user');
const mongooseProject = require('./../models/mongoose/project');
const random = require('./../models/vendor/random');


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* Routing to post login information */
router.post('/login', (req, res, next) => {

  console.log('Got an API message');

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('no user found');
      return res.status(401).end();
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log('user found');

      /* Instantiate the random hash */
      mongooseUser.updateHash(user, random.makeID())
        .then(function(msg) {
          mongooseUser.find({'username': user.username})
            .then(function(user) {
              return res.status(200).send(user);
            })
            .catch(function(err) {
              console.log('Database error');
            });
        })
        .catch(function(err) {
          console.log('No element in the database meets the search criteria');
        });
    });
  })(req, res, next);
});

/* Routing to require access to projects */
router.get('/projects', function(req, res) {
  console.log('[index.html] : GET request to /projects/' + req.params.hash);

  /* TODO: Use hash to perform a lookup check on users DB */

  mongooseProject.findMultiple({})
    .then(function(prjs) {
      for (let i = 0; i < prjs.length; i++) {
        // console.log(prjs[i]);
      }
      res.send(prjs);
    })
    .catch(function(err) {
      console.log('No element in the database meets the search criteria');
      res.send([]);
    });
});

/* Routing to update a selected project */
router.post('/updateProjects/:hash', function(req, res) {
  console.log('[index.html] : POST request to /updateProjects/');

  /* TODO: Use hash to perform a lookup check on users DB */

  /* Updates and if not found, inserts */
  mongooseProject.updateProject(req.body)
    .then(function(msg) {
      /* SUCCESS */
    })
    .catch(function(err) {
      console.log('No element in the database meets the search criteria');
    });
});

/* Routing to update a selected project */
router.post('/removeProjects/:hash', function(req, res) {
  console.log('[index.html] : POST request to /removeProjects/');

  /* TODO: Use hash to perform a lookup check on users DB */

  /* Updates and if not found, inserts */
  mongooseProject.removeProject(req.body)
    .then(function(msg) {
      /* SUCCESS */
    })
    .catch(function(err) {
      console.log('No element in the database meets the search criteria');
    });
});

module.exports = router;
