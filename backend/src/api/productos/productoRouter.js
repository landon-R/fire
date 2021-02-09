const express = require("express");
const upload = require('../../middlewares/multer')

const {addProduct, getProducts } = require('./productController')

const api = express.Router();


api.post('/products', upload.single('image'), addProduct );
api.get('/products', getProducts )

module.exports = api;
