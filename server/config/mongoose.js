var mongoose = require('mongoose'),
    crypto = require('crypto'); // built in cryptology for node

module.exports = function(config) {
    mongoose.connect(config.db)
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'))
    db.once('open', function callback() {
        console.log('multivision db opened');
    })

    var userSchema = mongoose.Schema({
        firstName : String,
        lastName  : String,
        username  : String,
        salt      : String,
        hashed_pwd: String
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }

    var User = mongoose.model('User', userSchema)

    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'peter');
            User.create({firstName: 'Peter', lastName: 'Borodich', username: 'pwbwolf', salt: salt, hashed_pwd: hash})
            salt = createSalt();
            hash = hashPwd(salt, 'emily');
            User.create({firstName: 'Emily', lastName: 'Runkel', username: 'RunkADunk', salt: salt, hashed_pwd: hash})
            salt = createSalt();
            hash = hashPwd(salt, 'john');
            User.create({firstName: 'John', lastName: 'Papa', username: 'JohnyPops', salt: salt, hashed_pwd: hash})
        }
    })
}

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}