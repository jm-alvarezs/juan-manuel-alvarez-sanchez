const { users, access_tokens } = require("../models");

const findUsersParams = async (params) => {
  const users = await users.findAll({ where: params });
  return users.map((current) => current.toJSON());
};

const findSingleUserParams = async (params) => {
  const current_user = await users.findOne({
    where: params,
    include: access_tokens,
  });
  if (current_user === null) return current_user;
  return current_user.toJSON();
};

const findUserByToken = async (token) => {
  const current_user = await users.findOne({
    include: {
      model: access_tokens,
      where: {
        token,
      },
    },
  });
  if (current_user === null) return current_user;
  return current_user.toJSON();
};

const createUserFromData = async (data) => {
  delete data.user_id;
  const current_user = await users.create(data);
  return current_user.toJSON();
};

const updateUserFromData = async (data) => {
  const { user_id } = data;
  await users.update(data, {
    where: { user_id },
  });
  return findSingleUserParams({ user_id });
};

const deleteUserById = async (user_id) => {
  const user = await findSingleUserParams({ user_id });
  await users.destroy({
    where: {
      user_id,
    },
  });
  return user;
};

module.exports = {
  findUsersParams,
  findUserByToken,
  findSingleUserParams,
  createUserFromData,
  updateUserFromData,
  deleteUserById,
};
