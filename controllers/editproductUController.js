const User = require('../models/User');
const Product = require('../models/Product');
const Raw = require('../models/Raw');
const Typepro = require('../models/typepro.js');

module.exports = async (req, res) => {
    try {
        let UserData = await User.findById(req.session.userId);
        const productId = req.query.id;
        let product = await Product.findById(productId);
        let productTypes = await Product.distinct('type');
        let typeproducts = await Typepro.find();
        // let products = await Product.find().populate('typepro');


        const rawId = req.query.id;
        let raw = await Raw.findById(rawId);
        let rawTypes = await Raw.distinct('rawunit');

        res.render('editproductU', {
            UserData,
            raw,
            rawTypes,
            product,
            productTypes,
            typeproducts,
            // products
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};
