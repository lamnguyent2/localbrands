const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Demo = new Schema(
    {
        title: { type: String },
        img: { type: String },
        oldprices: { type: Number },
        newprices: { type: Number }
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Demo.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});
module.exports = mongoose.model('Demo', Demo);