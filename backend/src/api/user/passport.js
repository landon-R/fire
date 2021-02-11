const bcrypt = require("bcrypt");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("./userModel");



const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}



// authorization 
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "NoobCoder"
},(payload,done)=>{
    userModel.findById({_id : payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else
            return done(null,false);
    });
}));




// authenticated local strategy usando username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    userModel.findOne({ username }, (err, user) => {
      //si hay error en la db de mongo
      if (err) {
        return done(err);
      }

      // si el user no exixte en la db de mongo
      if (!user) {
        return done(null, false);
      }

      // chekea si password is correct
      user.comparePassword(password, done);
    });
  })
);


