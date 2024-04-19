const express = require("express");
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/", getUser);

router.post("/", postUser);

router.put("/", putUser);

router.delete("/:user_id", deleteUser);

module.exports = router;
