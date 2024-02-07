const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.redirect('error');
        }
        console.log('User logged in successfully');
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
