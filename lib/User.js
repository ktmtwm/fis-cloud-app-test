var db_user = fis.db.COLLECTION_LIST.user;

var exports = module.exports = {};

exports.addUser = function(name, _auth, email, callback){
    var userObj = {
        _id : name,
        name : name,
        _auth : _auth,
        email : email,
        createTime : fis.util.date_format("yyyy-MM-dd hh:mm:ss")
    };
    fis.db.insert(db_user, name, userObj, {}, callback);
};

exports.getUserByName = function(name, callback){
    fis.db.findOne(db_user, null, {name : name}, function(err, user){
        callback(err, user);
    });
};

exports.getUserByAuth = function(_auth, callback){
    fis.db.findOne(db_user, null, {_auth : _auth}, function(err, user){
        callback(err, user);
    });
};

exports.updateUser = function(user, callback){
    fis.db.update(db_user, user.name, {name : user.name}, user, {}, callback);
};

exports.getUserByEmail = function(email, callback){
    fis.db.findOne(db_user, null, {email : email}, function(err, user){
        callback(err, user);
    });
};

exports.getUserByQuery = function(query, callback){
    fis.db.findOne(db_user, null, query, function(err, user){
        callback(err, user);
    }); 
};