const Joi = require("joi");

/**
 * Permitimos unknown para permitir que el usuario tenga los atributos de timestamp o no
 */

const UserPostSchema = Joi.object({
  name: Joi.string().max(254),
  phone: Joi.string().max(10),
  img_profile: Joi.string().max(254),
}).unknown();

const UserPutSchema = Joi.object({
  user_id: Joi.number(),
  name: Joi.string().max(254),
  phone: Joi.string().max(10),
  img_profile: Joi.string().max(254),
}).unknown();

const UserDeleteSchema = Joi.object({
  user_id: Joi.number(),
});

module.exports = { UserPostSchema, UserPutSchema, UserDeleteSchema };
