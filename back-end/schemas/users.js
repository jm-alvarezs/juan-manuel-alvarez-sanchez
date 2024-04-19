const Joi = require("joi");

const UserGetSchema = Joi.object({
  user_id: Joi.number().required(),
});

/**
 * Permitimos unknown para permitir que el usuario tenga los atributos de timestamp o no
 * La foto de perfil no es requerida
 */

const UserPostSchema = Joi.object({
  name: Joi.string().max(254).required(),
  // 14 digitos para numeros como +504
  phone: Joi.string().trim().min(10).max(14).required(),
  img_profile: Joi.string().max(254),
}).unknown();

// El unico campo requerido para actualizar o eliminar es "user_id"

const UserPutSchema = Joi.object({
  user_id: Joi.number().required(),
  name: Joi.string().max(254),
  phone: Joi.string().max(10),
  img_profile: Joi.string().max(254),
}).unknown();

const UserDeleteSchema = Joi.object({
  user_id: Joi.number().required(),
});

module.exports = {
  UserGetSchema,
  UserPostSchema,
  UserPutSchema,
  UserDeleteSchema,
};
