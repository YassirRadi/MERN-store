const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/ProductController");

router.route("/").get(getProducts).post(addProduct);

router.put("/api/products/:id", deleteProduct);

router.delete("/api/products/:id", editProduct);

module.exports = router;
