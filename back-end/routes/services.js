const express = require("express");
const { PostQuote } = require("../controllers/services");
const { token } = require("../middleware/auth");
const router = express.Router();

router.post("/quote", [token], PostQuote);

module.exports = router;
