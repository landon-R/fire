const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const userModel = require('../api/user/userModel');

passport.use(new LocalStrategy((username, password, done)=> {
    userModel.findOne({username},(err, user)=> {
        //si hay error en la db de mongo
        if (err) {
            return done(err)
        }

        // si el user no exixte en la db de mongo
        if (!user) {
            return done(null, false)
        }
    })
}))