const User = require('../models/User');

module.exports = async (req, res) => {
    try {
        // Fetch the currently logged-in user's data
        let UserData = await User.findById(req.session.userId);

        // Fetch additional data for the user to be edited
        const userId = req.query.id;
        let user = await User.findById(userId);

        // Render the 'editproductA' view with the fetched data
        res.render('editprofileA', {
            UserData,
            user
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error1');
    }
};
