const User = require('../database/models/user')
const bcrypt = require('bcryptjs')



module.exports = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err) {
            console.log(err)
        }

        let user = new User ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            sponsor: req.body.sponsor,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            countrycode: req.body.countrycode,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass

        })

        user.save().then(user => {
            console.log('User added successfully')
            res.redirect('/login')
        }).catch(error => {
            const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('registrationErrors', registrationErrors)
            req.flash('data', req.body)
            res.redirect('/signup')
        })
       
    })

    
    
}