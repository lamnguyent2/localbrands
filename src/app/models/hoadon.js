const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Cart = new Schema(
    {
        name: { type: String },
        detail: { type: String },
        address: { type: String },
        prices: { type: Number }
    }, 
    {
        timestamps: true,
    }
);

// mongoose delete plugin
Cart.plugin(mongoosedelete, { 
    deletedAt : true,
    overrideMethods: 'all' 
});
module.exports = mongoose.model('Cart', Cart);