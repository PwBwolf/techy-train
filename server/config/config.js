
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 5000
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://pborodich:Boarder28@ds053764.mongolab.com:53764/techy-train',
        port: process.env.PORT || 80
    }
}