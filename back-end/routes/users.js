const express = require("express");
const {
  putUser,
  getUser,
  postUser,
  deleteUser,
} = require("../controllers/users");
const {
  ValidUserPutRequest,
  ValidUserPostRequest,
  ValidUserDeleteRequest,
  ValidUserGetRequest,
} = require("../middleware/users");
const router = express.Router();

router.get("/:user_id", [ValidUserGetRequest], getUser);

router.post("/", [ValidUserPostRequest], postUser);

router.put("/", [ValidUserPutRequest], putUser);

router.delete("/:user_id", [ValidUserDeleteRequest], deleteUser);

module.exports = router;
