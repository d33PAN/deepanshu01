const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    category:{type:String,default:"User"}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
