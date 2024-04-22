const {
  findSingleUserParams,
  createUserFromData,
  updateUserFromData,
  deleteUserById,
} = require("../actions/users");
const { USER_NOT_FOUND } = require("../constants/users");

// Este controlador se hizo solo con teléfono por el alcance del examen, debería ser autenticada con otro método

const getUserByPhone = async (req, res, next) => {
  try {
    const { phone } = req.query;
    const user = await findSingleUserParams({ phone });
    if (!user || user === null) {
      return res.status(400).send({ message: USER_NOT_FOUND });
    }
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await findSingleUserParams({ user_id });
    if (user === null) {
      return res.status(400).send({ message: USER_NOT_FOUND });
    }
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
    if (user === null) {
      return res.status(400).send({ message: USER_NOT_FOUND });
    }
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user = await deleteUserById(user_id);
    if (user === null) {
      return res.status(400).send({ message: USER_NOT_FOUND });
    }
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  putUser,
  postUser,
  deleteUser,
  getUserByPhone,
};
