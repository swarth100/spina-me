// TODO: Add description

/* ------------------------------------------------------------------------------------------------------------------ */

let mongoose = require('mongoose');
let helper = require('./mongoose');

/* Load the database address from the config file
 * Removes the double quotation mark using replace function
 */
let dbConfig = 'mongodb://' +
  process.env.DB_USER + ':' +
  process.env.DB_PASS + '@' +
  process.env.DB_HOST + ':' +
  process.env.DB_PORT;

let uniqueValidator = require('mongoose-unique-validator');

/* Connect to mongoDB users database */

let Schema = mongoose.Schema;
let projectDBName = '/spina-me';
mongoose.Promise = global.Promise;
let projectDB = mongoose.createConnection(dbConfig + projectDBName);

// TODO: Add validation

/* Handling connection errors */

projectDB.on('error', console.error.bind(console, 'Cannot connect to projectDB:'));
projectDB.once('open', function() {
    // console.log('[DB ACTIVE]: /spina-me/users');
});

/* ------------------------------------------------------------------------------------------------------------------ */

/* Setters for the fields */

let projectSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
      type: String,
    },
    links: {
      type: Array,
      // default: [],
    },
    date: {
      type: String,
      // default: "01/01/70",
    },
});

/* Plugin that validates unique entries */
projectSchema.plugin(uniqueValidator);

/* Pre save function [AUTORUN]
 * Used to initialise fields upon saving
 * */
projectSchema.pre('save', function(next) {
    // TODO: Handle checks before invoking next
    // Next can be invoked with an error to make it cascade through
    // i.e. new Error('something went wrong')
    next();
});

/* ------------------------------------------------------------------------------------------------------------------ */

let Project = projectDB.model('Project', projectSchema);

/* Creates and returns a new database entry
* Parameters:
*   JSON
* Returns:
*   new Project instance */
exports.createNewProject = function(prj) {
    return new Project(prj);
};

/* Saves the current Project onto the DB
 * Parameters:
 *   project
 * Returns:
 *   Promise */
exports.saveProject = function(prj) {
    return helper.saveHelper(prj);
};

/* Retrieves one Project from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.find = function(p) {
    return helper.findHelper(Project, p);
};

/* Retrieves multiple Projects from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.findMultiple = function(p) {
    return helper.findMultipleHelper(Project, p);
};

/* Removes a single Project from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.removeProject = function(p) {
    return helper.removeElem(Project, p);
};

/* Removes multiple Projects from the DB
 * Parameters:
 *   Search parameters : { name : 'Anne' }
 * Returns:
 *   Promise */
exports.removeMultiple = function(p) {
    return helper.removeMultipleHelper(Project, p);
};

/* */
exports.updateProject = function(prj) {
  let query = prj;

  let cond = {
    'title': prj.title,
  };

  return helper.updateHelper(Project, cond, query);
};

/* Export the User model *
exports.userModel = User;
*/
