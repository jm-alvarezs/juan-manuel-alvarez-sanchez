const express = require("express");
const {
  putProduct,
  postProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/products");
const {
  ValidProductPostRequest,
  ValidProductPutRequest,
  ValidProductDeleteRequest,
} = require("../middleware/products");
const router = express.Router();

router.get("/", getAllProducts);

router.get("/:catalog_product_id", getSingleProduct);

router.post("/", [ValidProductPostRequest], postProduct);

router.put("/", [ValidProductPutRequest], putProduct);

router.delete(
  "/:catalog_product_id",
  [ValidProductDeleteRequest],
  deleteProduct
);

module.exports = router;
