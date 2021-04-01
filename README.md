# Spina.me

Alberto Spina's personal website.

## Installing and Running

Project dependencies are managed via NPM, ensure you have installed NPM and node using NVM (Node Version Manager)

Node version used by the project:
```
node 10.20.1
npm 6.14.4
```

Ensure you have MongoDB installed. The project uses version `3.6.23`

Generate a `.env` file (in the project root) with the following details (if using default setup):
```
DB_HOST=localhost
DB_PORT=27017
```

Database credentials can be optionally used by setting the `DB_USER` and `DB_PASS` in the `.env` file.

You can now install dependencies:
```
npm install
```

## Deploying

To deploy to the server, ensure you have installed PM2 globally as an executably as an executable to your machine:
```
npm install pm2 -g
```

To deploy for the first time (i.e. clone):  
**NOTE**: First remove the `source` directory from the project root.
```
pm2 deploy ecosystem.config.js dev setup
```

For routine deployments (pulls latest sources and restarts the server):
```
pm2 deploy ecosystem.config.js dev setup

```

# Technologies

## Front End

The project was generated via `angular-cli`. <br>
`Angular 4` is used for the frontend together with `Materialize` (for CSS and JS Components) and `SCSS` <br>
A dashboard is in place to allow dynamic editing of the website's contents (e.g. Projects, Contact details)

## Back End

The backend and API routes are serviced via `nodeJS` and `expressJS`. <br>
The website is currently hosted on a `AWS` Server <br>
Other npm packages used:
- `bcryptjs`: Used to securely authenticate users storing encrypted passwords.
- `passport`: Used together with bcrypt for authentication.
- `dotenv`: Used to secure environment variables.
- `mongoose`: Used together with mongoDB.

## Database

There is a `mongo` database accessed via the `mongoose` npm wrapper. <br>
Access to the database requires both mongo and bcrypt authentication.


