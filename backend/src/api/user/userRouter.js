//import libreria
const JWT = require("jsonwebtoken");
const passport = require("passport");
const { Router } = require("express");

//import files
const passportConfig = require("./passport");
const userModel = require("./userModel");
const todoModel = require("../todo/todoModel");

const router = Router();

//_* CREA EL JWT
const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "NoobCoder",
      sub: userID,
    },
    "NoobCoder",
    { expiresIn: "5h" }
  );
};

//_* REGISTER UN USER
router.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  userModel.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res.status(400).json({
        message: { msgBody: "Username ya existe", msgError: true },
      });
    else {
      const newUser = new userModel({ username, password, role });
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          res.status(201).json({
            message: {
              msgBody: "Account registrado successfully created",
              msgError: false,
            },
          });
      });
    }
  });
});

//_* LOGIN DE UN USER
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
  }
);

//_* CERRAR SESSION DE UN USER
router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, success: true });
  }
);

/////////////////////////////////////

//CREA UN TODO
router.post('/todo',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const todo = new todoModel(req.body);
    todo.save(err=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            req.user.todos.push(todo);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
                else
                    res.status(200).json({message : {msgBody : "Successfully created todo", msgError : false}});
            });
        }
    })
});


//_* OBTIENE ALL TODOS
router.get('/todos',passport.authenticate('jwt',{session : false}),(req,res)=>{
    userModel.findById({_id : req.user._id}).populate('todos').exec((err,document)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}});
        else{
            res.status(200).json({todos : document.todos, authenticated : true});
        }
    });
});

//_* ENTRAR A UNA URL SIENDO ADMIN
router.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
    if(req.user.role === 'admin'){
        res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
    }
    else
        res.status(403).json({message : {msgBody : "tu no tienes privilegios de admin", msgError : true}});
});


//_* OBTIENE ALL TODOS
router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username,role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username,role}});
});

module.exports = router;
