const Product = require("../models/product");
const StatusCodes = require("http-status-codes");

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(StatusCodes.OK).send(products);
  } catch (err) {
    console.log(err.message);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: err.message });
  }
}

function addProduct(req, res) {
  //
}

function editProduct(req, res) {
  //
}

function deleteProduct(req, res) {
  //
}

module.exports = {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
