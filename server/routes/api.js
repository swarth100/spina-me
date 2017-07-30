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
router.get('/projects/:hash', function(req, res) {
  console.log('[index.html] : POST request to /projects/' + req.params.hash);

  /* TODO: Use hash to perform a lookup check on users DB */

  mongooseProject.findMultiple({})
    .then(function(prjs) {
      for (let i = 0; i < prjs.length; i++) {
        console.log(prjs[i]);
      }
      res.send(prjs);
    })
    .catch(function(err) {
      console.log('No element in the database meets the search criteria');
      res.send([]);
    });
});

module.exports = router;
