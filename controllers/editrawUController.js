const User = require('../models/User');
const Product = require('../models/Product');
const Raw = require('../models/Raw');

module.exports = async (req, res) => {
    try {
        //products
        let UserData = await User.findById(req.session.userId);
        const productId = req.query.id;
        let product = await Product.findById(productId);
        let productTypes = await Product.distinct('type');

        //raws
        const rawId = req.query.id;
        let raw = await Raw.findById(rawId);
        let rawTypes = await Raw.distinct('rawunit');
        
        res.render('editrawU', {
            UserData,
            raw,
            rawTypes,
            product,
            productTypes
        });
        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};
