const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product");

require('./config')
require("dotenv").config();

require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT;

app.listen(port, () => console.log(`listen on ${port}`));

// registro de rutas
app.use("/public", express.static(`${__dirname}/storage/imgs`));
app.use("/", productRoutes);
