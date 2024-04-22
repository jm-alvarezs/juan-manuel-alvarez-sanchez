const Joi = require("joi");

const PostQuoteSchema = Joi.object({
  catalog_product_id: Joi.number().required(),
  destination: Joi.object({
    name: Joi.string().required(),
    company: Joi.string(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.number().required(),
    district: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required().length(2),
    country: Joi.string().required().allow("MX"),
    postalCode: Joi.string().required().length(5),
    reference: Joi.string(),
  }),
}).allow();

module.exports = { PostQuoteSchema };
