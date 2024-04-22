const { PostQuoteSchema } = require("../schemas/envia");

const ValidatePostQuoteRequest = async (req, res, next) => {
  try {
    const result = PostQuoteSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { ValidatePostQuoteRequest };
