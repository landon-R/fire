require("dotenv").config();

const express = require("express");

const connectDB = require('./db/mongodb') //CONFIGURACION DE DB MONGO

const { appConfig, db } = require("./config"); //ficehro config

const app = express();

connectDB(db)

app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`));
