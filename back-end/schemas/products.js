const Joi = require("joi");

const ProductGetSchema = Joi.object({
  catalog_product_id: Joi.number().required(),
});

/**
 * Permitimos unknown para permitir que el producto tenga los atributos de timestamp o no
 * Todos los campos son requeridos para evitar null en base de datos
 */

const ProductPostSchema = Joi.object({
  name: Joi.string().max(254).required(),
  description: Joi.string().max(254).required(),
  height: Joi.number().positive().precision(2).required(),
  length: Joi.number().positive().precision(2).required(),
  width: Joi.number().positive().precision(2).required(),
}).unknown();

// Para actualizar o eliminar un producto, el único campo requerido es "catalog_product_id"

const ProductPutSchema = Joi.object({
  catalog_product_id: Joi.number().required(),
  name: Joi.string().max(254),
  description: Joi.string().max(254),
  height: Joi.number().positive().precision(2),
  length: Joi.number().positive().precision(2),
  width: Joi.number().positive().precision(2),
}).unknown();

const ProductDeleteSchema = Joi.object({
  catalog_product_id: Joi.number().required(),
});

module.exports = {
  ProductGetSchema,
  ProductPostSchema,
  ProductPutSchema,
  ProductDeleteSchema,
};
