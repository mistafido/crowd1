const User = require('../database/models/user')

module.exports = async (req, res) => {
    const user = User.findById(req.session.userId)
    res.render('downline', {
        user
    })
}