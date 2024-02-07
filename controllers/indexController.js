const Product = require('../models/Product');
module.exports =  async (req,res)=>{
    try {
        let products = await Product.find();

        res.render('index', {
            products,
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }

}