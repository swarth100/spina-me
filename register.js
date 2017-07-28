/**
 * The following script is meant to be run locally to force account registration.
 * The registration API is not accessible from the server running on port 3000
 */

const express = require('express');
const authentication = require('./server/models/authentication/authentication');
const util = require('util');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const register = require('./server/routes/register');

const app = express();

const login_data = [
  {'username' : ''},
  {'password': ''},
  {'password2': ''},
];

let index = 0;

let data = {};

const printInsert = function () {
  for (let key in login_data[index]) {
    //console.log(key);
    //console.log(login_data[index][key]);
    console.log('Insert ' + key);
  }
};

const addValue = function (value) {
  for (let key in login_data[index]) {
    //console.log(key);
    //console.log(login_data[index][key]);
    login_data[index][key] = value.split("\'")[1].split("\\n")[0];
  }
};

/* Basic authentication for users */
authentication.setup(app, (app) => {

  /** Parsers for POST data */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  /** Set our api routes */
  app.use('', register);

  const port = process.env.PORT || '3100';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);
  server.listen(port);
});

/* Handle stdin from command line */
process.stdin.resume();
process.stdin.setEncoding('utf8');

printInsert();

process.stdin.on('data', function (text) {
  const input = util.inspect(text);

  if (input) {
    addValue(input);
    index ++;
  }

  if (text === 'quit\n' || index >= login_data.length) {
    data.username = login_data[0].username;
    data.password = login_data[1].password;
    data.password2 = login_data[2].password2;
    console.log(data);

    done();
  } else {
    printInsert();
  }
});

function done() {
  console.log('Validating registration ...');

  request.post(
    'http://localhost:3100/register',
    { json: data },
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(' ---------------- [REGISTER SUCCESS] ---------------- ');
        console.log(body);
      }
      else {
        console.log(' ---------------- [REGISTER ERROR] ---------------- ');
        console.log(body);
      }
      process.exit();
    }
  );
}
