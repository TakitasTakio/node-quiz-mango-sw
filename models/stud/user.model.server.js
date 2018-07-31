var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);




function createUser(user) {
    userModel.create(user);
}

//function findUserById(userId) { }

function findAllUser(){
    return userModel.find();
}

var api ={
    createUser: createUser,
    findAllUser: findAllUser

};

module.exports =api;



function findUserById(userId) { }
//function findUserByUsername(username) { }
//function findUserByCredentials(
 //   username, password) { }



//function deleteUser(userId) { }
//function updateUser(userId, newUser) { }