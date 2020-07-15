const express = require('express')

const api = express.Router()
api.post('/products', () => console.log('products'))