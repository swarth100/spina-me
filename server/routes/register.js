const express = require('express');
const router = express.Router();

const authentication = require('./../models/authentication/authentication');

/* GET api listing. */
router.post('/register', (req, res) => {
  authentication.checkRegisterFields(req, res, authentication.addUserToDb, authentication.failToValidateUser);
});

module.exports = router;
