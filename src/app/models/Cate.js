const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Catalog = new Schema(
    {
        namecate: { type: String },
        slug: { type: String, slug: 'namecate', unique: true }
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Catalog.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});
module.exports = mongoose.model('Catalog', Catalog);