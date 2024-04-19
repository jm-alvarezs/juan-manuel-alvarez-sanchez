const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const services = require("./services");

module.exports = function (base_url, app) {
  router.use("/services", services);
  router.use("/products", products);
  router.use("/users", users);
  app.use(base_url, router);
};
