const { UNAUTHORIZED } = require("../constants/auth");
const {
  UserDeleteSchema,
  UserPostSchema,
  UserPutSchema,
  UserGetSchema,
} = require("../schemas/users");

const ValidUserGetRequest = async (req, res, next) => {
  try {
    const result = UserGetSchema.validate(req.params);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidUserPostRequest = async (req, res, next) => {
  try {
    const result = UserPostSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidUserPutRequest = async (req, res, next) => {
  try {
    const result = UserPutSchema.validate(req.body);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidUserDeleteRequest = async (req, res, next) => {
  try {
    const result = UserDeleteSchema.validate(req.params);
    if (result.error) {
      return res.status(400).send({ error: result.error.details });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const PutMyUser = async (req, res, next) => {
  try {
    const { user } = req;
    if (!user || user === null) {
      return res.status(401).send({ message: UNAUTHORIZED });
    }
    const data = req.body;
    // No debo poder actualizar otros usuarios diferentes al mío
    if (data.user_id !== user.user_id) {
      return res.status(401).send({ message: UNAUTHORIZED });
    }
  } catch (error) {
    next(error);
  }
};

const DeleteMyUser = async (req, res, next) => {
  try {
    const { user } = req;
    if (!user || user === null) {
      return res.status(401).send({ message: UNAUTHORIZED });
    }
    const data = req.params;
    // No debo poder eliminar otros usuarios diferentes al mío
    if (data.user_id !== user.user_id) {
      return res.status(401).send({ message: UNAUTHORIZED });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  PutMyUser,
  DeleteMyUser,
  ValidUserGetRequest,
  ValidUserPutRequest,
  ValidUserPostRequest,
  ValidUserDeleteRequest,
};
