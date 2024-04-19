"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ access_tokens }) {
      // define association here
      this.hasMany(access_tokens, { foreignKey: "user_id" });
    }
  }
  users.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      img_profile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      timestamps: true,
    }
  );
  return users;
};
