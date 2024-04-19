const {
  findSingleUserParams,
  createUserFromData,
  updateUserFromData,
  deleteUserById,
} = require("../actions/users");

const getUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await findSingleUserParams({ user_id });
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await createUserFromData(data);
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await updateUserFromData(data);
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await deleteUserById(user_id);
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
