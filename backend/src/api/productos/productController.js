const Product = require("./ProductModel");

//__* CREAR UN PRODUCTO
exports.addProduct = async (req, res) => {
  try {
    const { name, size, unitaryPrice, description } = req.body;

    const product = Product({
      name,
      size,
      unitaryPrice,
      description,
    });

    //si hay img agregale la url para pintar la img en el frontend
    if (req.file) {
      const { filename } = req.file;
      product.setImgUrl(filename);
    }

    const productStored = await product.save();

    res.status(201).send({ productStored });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};



//__* OBTENER TODOS LOS PRODUCTOS
exports.getProducts = async (req, res) => {
  const products = await Product.find().lean().exec();
  res.status(200).send({ products });
};

