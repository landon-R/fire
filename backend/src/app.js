const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");

//CONFIG DE SERVER
require('./config')
require("dotenv").config();

//DB
require('./db');

//SERVER APP
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`express server started in ${port}`));

//MIDDLEWARES
app.use(cookieParser())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors())


//PUBLIC STATIC FILES
app.use(express.static(path.join(__dirname, 'public' )))


//ROUTERS DE ENDPOINTS
app.use("/", require("./api/productos/productoRouter"))
