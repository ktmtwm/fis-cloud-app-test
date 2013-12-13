
require('fs').readdirSync(__dirname + "/lib").forEach(function (f) {
	console.log(f)
    if (!f.match(/\.js$/)) return;
    module.exports[f.replace(/\.js$/, '')] = require('./lib/' + f);
});

// require('fs').readdirSync(__dirname + "/action/http").forEach(function (f) {
//     if (!f.match(/\.js$/)) return;
//     module.exports[f.replace(/\.js$/, '')] = require('./action/http/' + f);
// });
