const mongosse = require("mongoose");

const { Schema, model } = mongosse;

const ProductSchema = Schema(
  {
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
  },
  {
    timestamps: true
  }
);

module.exports = model('Products', ProductSchema)
