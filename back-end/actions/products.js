const { catalog_products } = require("../models");

const findProductsParams = async (params) => {
  const products = await catalog_products.findAll({ where: params });
  return products.map((current) => current.toJSON());
};

const findSingleProductParams = async (params) => {
  const current_product = await catalog_products.findOne({ where: params });
  if (current_product === null) return current_product;
  return current_product.toJSON();
};

const createProductFromData = async (data) => {
  delete data.catalog_product_id;
  const current_product = await catalog_products.create(data);
  return current_product.toJSON();
};

const updateProductFromData = async (data) => {
  const { catalog_product_id } = data;
  await catalog_products.update(data, {
    where: { catalog_product_id },
  });
  return findSingleProductParams({ catalog_product_id });
};

const deleteProductById = async (catalog_product_id) => {
  const product = await findSingleProductParams({ catalog_product_id });
  await catalog_products.destroy({
    where: {
      catalog_product_id,
    },
  });
  return product;
};

module.exports = {
  findProductsParams,
  findSingleProductParams,
  createProductFromData,
  updateProductFromData,
  deleteProductById,
};
