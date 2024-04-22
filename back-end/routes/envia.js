const express = require("express");
const { PostRate, PostGenerate } = require("../controllers/envia");
const { token } = require("../middleware/auth");
const {
  ValidatePostRateRequest,
  ValidatePostGenerateRequest,
} = require("../middleware/envia");
const router = express.Router();

router.post("/rate", [token, ValidatePostRateRequest], PostRate);

router.post("/generate", [token, ValidatePostGenerateRequest], PostGenerate);

module.exports = router;
