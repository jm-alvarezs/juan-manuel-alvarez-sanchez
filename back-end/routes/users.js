const express = require("express");
const {
  putUser,
  postUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/users");
const {
  PutMyUser,
  DeleteMyUser,
  ValidUserPutRequest,
  ValidUserPostRequest,
  ValidUserDeleteRequest,
} = require("../middleware/users");
const { token } = require("../middleware/auth");
const router = express.Router();

router.get("/", [token], getCurrentUser);

// Post User no requiere token para usarse como crear cuenta

router.post("/", [ValidUserPostRequest], postUser);

router.put("/", [token, ValidUserPutRequest, PutMyUser], putUser);

router.delete(
  "/:user_id",
  [token, ValidUserDeleteRequest, DeleteMyUser],
  deleteUser
);

module.exports = router;
