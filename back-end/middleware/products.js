const {
  ProductDeleteSchema,
  ProductPostSchema,
  ProductPutSchema,
  ProductGetSchema,
} = require("../schemas/products");

const ValidProductGetRequest = async (req, res, next) => {
  try {
    const result = ProductGetSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidProductPostRequest = async (req, res, next) => {
  try {
    const result = ProductPostSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidProductPutRequest = async (req, res, next) => {
  try {
    const result = ProductPutSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidProductDeleteRequest = async (req, res, next) => {
  try {
    const result = ProductDeleteSchema.validate(req.params);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ValidProductGetRequest,
  ValidProductPutRequest,
  ValidProductPostRequest,
  ValidProductDeleteRequest,
};
