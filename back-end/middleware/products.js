const {
  ProductPostSchema,
  ProductPutSchema,
  ProductDeleteSchema,
} = require("../schemas/products");

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
  ValidProductPutRequest,
  ValidProductPostRequest,
  ValidProductDeleteRequest,
};
