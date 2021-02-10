const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max: 20,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    role: {
      type: String,
      // default: 'user',
      enum: ["user", "admin"],
      required: true,
    },
    todos: [{ type: Schema.Types.ObjectId, ref: "todo" }],
  },
  {
    timestamps: true,
  }
);

//encripta el password
UserSchema.pre('save',function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});


//decifra el password
UserSchema.methods.comparePassword = function(password,cb){
    bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
    });
}



//FUNCION PARA NO MOSTRAR EL PASSWORD EN EL JSON DEL BACK-END Y FRONTEND
// userSchema.methods.toJSON = function() {
//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;
//     return userObject;
//   }

module.exports = model("User", userSchema);
