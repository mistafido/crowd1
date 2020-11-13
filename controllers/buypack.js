const User = require('../database/models/user')

module.exports = async (req, res) => {
    if(req.session.userId)
    {
        const user = await User.findById(req.session.userId)
       return res.render('buypack',{
           user
       })
    }
    res.redirect('/login')
   
}