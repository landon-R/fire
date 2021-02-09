const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./api/productos/productoRouter");

//CONFIG DE SERVER
require('./config')
require("dotenv").config();

//DB
require('./db');

//SERVER APP
const app = express();
const port = process.env.PORT;
app.listen(port, () => console.log(`listen on ${port}`));

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors())


//PUBLIC STATIC FILES
app.use(express.static(path.join(__dirname, 'public' )))


//ROUTERS DE ENDPOINTS
// app.use("/public", express.static(`${__dirname}/src/uploads/imgs`));
app.use("/", productRoutes);
