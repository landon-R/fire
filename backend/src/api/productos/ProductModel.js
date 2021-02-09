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

//metodo para poner la url en campo imgUrl  para usarlo en el frontend
ProductSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imgUrl = `http://localhost:4000/uploads/${filename}`
}

module.exports = model('Products', ProductSchema)
