// TODO: Add description

/* ------------------------------------------------------------------------------------------------------------------ */

let mongoose = require('mongoose');
let helper = require('./mongoose');

/* Load the database address from the config file
 * Removesthe double quotation mark using replace function
 */
let dbConfig = 'mongodb://localhost:27017';

let uniqueValidator = require('mongoose-unique-validator');

/* Connect to mongoDB users database */

let Schema = mongoose.Schema;
let userDBName = '/spina-me/users';
mongoose.Promise = global.Promise;
let userDB = mongoose.createConnection(dbConfig + userDBName);

// TODO: Add validation

/* Handling connection errors */

userDB.on('error', console.error.bind(console, 'Cannot connect to userDB:'));
userDB.once('open', function() {
    // console.log('[DB ACTIVE]: /spina-me/users');
});

/* ------------------------------------------------------------------------------------------------------------------ */

/* Setters for the fields */

let userSchema = new Schema({
    hash: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

/* Plugin that validates unique entries */
userSchema.plugin(uniqueValidator);

/* Helper methods on the userSchema */

/* Prints the fields of a User
* Parameters:
*   none
* Returns:
*   none */
userSchema.methods.debugPrinting = function() {
    return 'name: ' + this.name + ', email: ' + this.email + ', password: ' + this.password +
        ', time: ' + this.time + ', username ' + this.username + ', friends ' + this.friends;
};

/* Pre save function [AUTORUN]
 * Used to initialise fields upon saving
 * */
userSchema.pre('save', function(next) {
    // TODO: Handle checks before invoking next
    // Next can be invoked with an error to make it cascade through
    // i.e. new Error('something went wrong')
    next();
});

/* ------------------------------------------------------------------------------------------------------------------ */

let User = userDB.model('User', userSchema);

/* Creates and returns a new database entry
* Parameters:
*   n = name
*   e = email
*   p = password
* Returns:
*   new User instance */
exports.createNewUser = function(u, p) {
    return new User({
        password: p,
        username: u,
    });
};

/* Saves the current User onto the DB
 * Parameters:
 *   user
 * Returns:
 *   Promise */
exports.saveUser = function(user) {
    return helper.saveHelper(user);
};

/* Retrieves one User from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.find = function(p) {
    return helper.findHelper(User, p);
};

/* Retrieves multiple Users from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.findMultiple = function(p) {
    return helper.findMultipleHelper(User, p);
};

/* Removes a single User from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.removeUser = function(p) {
    return helper.removeElem(User, p);
};

/* Removes multiple Users from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.removeMultiple = function(p) {
    return helper.removeMultipleHelper(User, p);
};

/* Export the User model *
exports.userModel = User;
*/
