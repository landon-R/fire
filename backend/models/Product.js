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


ProductSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imgUrl = `http://localhost:4000/public/${filename}`
}

module.exports = model('Products', ProductSchema)
