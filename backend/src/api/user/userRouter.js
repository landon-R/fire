//import libreria
const JWT = require("jsonwebtoken");
const passport = require("passport");
const { Router } = require("express");

//import files
const passportConfig = require("./passport");
const userModel = require("./userModel");
const todoModel = require("../todo/todoModel");

const router = Router();

router.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  userModel.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res
        .status(400)
        .json({
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

module.exports = router;
