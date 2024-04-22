"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class catalog_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  // Decidí usar decimal por que la plataforma de envía si admite decimales

  catalog_products.init(
    {
      catalog_product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      height: DataTypes.DECIMAL(10, 2),
      length: DataTypes.DECIMAL(10, 2),
      width: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "catalog_products",
      tableName: "catalog_products",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      timestamps: true,
    }
  );
  return catalog_products;
};
