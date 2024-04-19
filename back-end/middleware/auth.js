const { TOKEN_NOT_FOUND, UNAUTHORIZED } = require("../constants/auth");
const { findUserByToken } = require("../actions/users");

const token = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).send({ message: TOKEN_NOT_FOUND });
  }
  const token = req.headers.authorization;
  const user = await findUserByToken(token);
  if (user === null) {
    return res.status(400).send({ message: UNAUTHORIZED });
  }
  req.token = token;
  req.user = user;
  next();
};

module.exports = {
  token,
};
