const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const bcrypt = require('bcrypt-nodejs');
const router = require('../../routes/user');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: { type: String},       
        email: { type: String },      
        password: { type: String }, 
        address: { type: String },
        sdt: { type: Number },
        sothich: { type: String },
        token: { type: String },
        role: { type: String }   
    }, 
    {
        timestamps: true,
    }
);

User.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(11), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', User);