"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class access_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      // define association here
      this.belongsTo(users, { foreignKey: "user_id" });
    }
  }
  access_tokens.init(
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true },
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "access_tokens",
      tableName: "access_tokens",
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
    }
  );
  return access_tokens;
};
