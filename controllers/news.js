const User = require('../database/models/user')

module.exports = (req, res) => {
    const user = User.findById(req.session.userId)
    res.render('news', {
        user
    })
}