/**
 *
 * @type {*}
 */
var log = require('01.06.logger')(module);
var db = require('db');
//db.connect();


/**
 *
 * @param name
 * @constructor
 */
function User(name) {
    this.name = name;
}

/**
 *
 * @param {User} user
 */
User.prototype.hello = function (user) {
    // ..
    log(db.getPhrase("Hello") + ' ' + user.name);
}

// console.log(module);

// console.log('10.04.user is required');
// exports.User = User;
module.exports = User;
// this.User = User;
// global.User = User;
