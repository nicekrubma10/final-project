const mongoose = require('mongoose');
const moment = require('moment-timezone')

const ProductSchema = new mongoose.Schema({
    productname: String,
    type: String,
    price: Number,
    image: String,
    created:{
        type: Date,
        required: true,
        default: () => moment().tz('Asia/Bangkok').toDate(),
    },
    // typepro: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Typepro'
    //   }
});

module.exports = mongoose.model('Product', ProductSchema);

