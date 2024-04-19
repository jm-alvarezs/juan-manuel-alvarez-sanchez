const {
  findSingleProductParams,
  createProductFromData,
  updateProductFromData,
  findProductsParams,
  deleteProductById,
} = require("../actions/products");
const { PRODUCT_NOT_FOUND } = require("../constants/products");

/**
 * Nombramos los controllers por el método HTTP con el que interactúa
 */

const getAllProducts = async (_, res, next) => {
  try {
    const products = await findProductsParams();
    res.status(200).send({ products });
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const { catalog_product_id } = req.params;
    const product = await findSingleProductParams({ catalog_product_id });
    if (product === null) {
      return res.status(404).send({ message: PRODUCT_NOT_FOUND });
    }
    res.status(200).send({ product });
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await createProductFromData(data);
    res.status(200).send({ product });
  } catch (error) {
    next(error);
  }
};

const putProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const current_product = await updateProductFromData(data);
    res.status(200).send({ product: current_product });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { catalog_product_id } = req.params;
    const product = await deleteProductById(catalog_product_id);
    if (product === null) {
      return res.status(404).send({ message: PRODUCT_NOT_FOUND });
    }
    res.status(200).send({ product });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
