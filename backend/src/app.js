const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./api/productos/productoRouter");

require('./config')
require("dotenv").config();

require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT;

app.listen(port, () => console.log(`listen on ${port}`));

// registro de rutas
app.use("/public", express.static(`${__dirname}/storage/imgs`));
app.use("/", productRoutes);
