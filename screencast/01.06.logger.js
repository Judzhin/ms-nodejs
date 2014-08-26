// var log = require('01.06.logger')(module);

module.exports = function (module) {

    return function (/* ... */) {
        //console.log(['args', arguments]);
        var args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    }

}