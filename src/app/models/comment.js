const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Comment = new Schema(
    {
        name: { type: String },
        date: { type: String },       
        idsp: { type: String },
        binhluan: { type: String }
        
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Comment.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});
module.exports = mongoose.model('Comment', Comment);