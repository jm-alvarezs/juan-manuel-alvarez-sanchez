const { PostRateSchema, PostGenerateSchema } = require("../schemas/envia");

const ValidatePostRateRequest = async (req, res, next) => {
  try {
    const result = PostRateSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidatePostGenerateRequest = async (req, res, next) => {
  try {
    const result = PostGenerateSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { ValidatePostRateRequest, ValidatePostGenerateRequest };
