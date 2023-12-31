const mongoose = require ('mongoose');


const objetSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type:String, required: true},
    imageUrl: { type:String, required: true},
   userId: {type:String},
    price: {type: Number,required: true},
});

module.exports = mongoose.model('Thing', objetSchema);