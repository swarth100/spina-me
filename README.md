# Spina.me

Alberto Spina's personal website.

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


