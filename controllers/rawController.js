const User = require('../models/User')
const Product = require('../models/Product');
const Raw = require('../models/Raw');

module.exports = async(req,res) =>{

    let UserData = await User.findById(req.session.userId)
    let products = await Product.find();
    let raws = await Raw.find();

    try{
        res.render('raw', {
            UserData,  
            products,
            raws
        });
    }catch(error){
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}