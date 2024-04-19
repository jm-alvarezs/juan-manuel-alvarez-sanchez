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
  ValidProductGetRequest,
} = require("../middleware/products");
const { token } = require("../middleware/auth");
const router = express.Router();

// Mostrar los productos es un endpoint público, cualquiera puede ver productos

router.get("/", getAllProducts);

router.get("/:catalog_product_id", [ValidProductGetRequest], getSingleProduct);

// Estos endpoints deberían tener alguna validación como permiso de admin

router.post("/", [token, ValidProductPostRequest], postProduct);

router.put("/", [token, ValidProductPutRequest], putProduct);

router.delete(
  "/:catalog_product_id",
  [token, ValidProductDeleteRequest],
  deleteProduct
);

module.exports = router;
