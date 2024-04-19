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

module.exports = {
  ValidUserGetRequest,
  ValidUserPutRequest,
  ValidUserPostRequest,
  ValidUserDeleteRequest,
};
