const User = require('../models/User');
const Product = require('../models/Product');
const Raw = require('../models/Raw');
const Typepro = require('../models/typepro.js');

module.exports = async (req, res) => {
    try {
        let UserData = await User.findById(req.session.userId);
        let products = await Product.find();
        let raws = await Raw.find();
        let typeproducts = await Typepro.find();

        res.render('index_product', {
            UserData,
            products,
            raws,
            typeproducts
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};

