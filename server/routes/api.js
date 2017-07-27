const express = require('express');
const passport = require('passport');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

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
      return res.status(200).send(user);
    });
  })(req, res, next);
});

module.exports = router;
