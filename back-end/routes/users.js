const express = require("express");
const {
  putUser,
  postUser,
  deleteUser,
  getCurrentUser,
  getUserByPhone,
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

// Esta ruta se hizo solo con teléfono por el alcance del examen, debería ser autenticada con otro método

router.get("/", getUserByPhone);

// Post User no requiere token para usarse como crear cuenta

router.post("/", [ValidUserPostRequest], postUser);

router.put("/", [token, ValidUserPutRequest, PutMyUser], putUser);

router.delete(
  "/:user_id",
  [token, ValidUserDeleteRequest, DeleteMyUser],
  deleteUser
);

module.exports = router;
