var log = require('01.06.logger')(module);
var db = require('db');
db.connect();

// var user = require('./01.04.user'); // exports
// require('./user'); // global.User
var User = require('./user'); // exports = User

// var vasya = new user.User("Вася"); // exports
// var petya = new user.User("Петя"); // exports

function run() {
    // var vasya = new User("Вася"); // global.User
    // var petya = new User("Петя"); // global.User
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"));
}

if (module.parent) { // if has parent
    exports.run = run;
} else {
    run();
}