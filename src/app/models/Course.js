const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Shop = new Schema(
    {
        _id: { type: Number },
        name: { type: String },
        prices: { type: Number },
        details: { type: String },
        img: { type: String },
        category: { type: String },
        slug: { type: String, slug: 'name', unique: true }
    }, 
    {
        _id: false,
        timestamps: true,
    }
);

Shop.plugin(AutoIncrement);

Shop.plugin(mongoose_fuzzy_searching, { 
    fields: ['name'] 
});

// mongoose delete plugin
Shop.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Shop', Shop);
