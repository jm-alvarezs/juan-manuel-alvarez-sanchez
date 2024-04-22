const express = require("express");
const router = express.Router();
const users = require("./users");
const envia = require("./envia");
const products = require("./products");

module.exports = function (base_url, app) {
  router.use("/products", products);
  router.use("/envia", envia);
  router.use("/users", users);
  app.use(base_url, router);
};
