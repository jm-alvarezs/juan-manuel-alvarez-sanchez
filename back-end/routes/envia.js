const express = require("express");
const { PostQuote } = require("../controllers/envia");
const { token } = require("../middleware/auth");
const { ValidatePostQuoteRequest } = require("../middleware/envia");
const router = express.Router();

router.post("/quote", [token, ValidatePostQuoteRequest], PostQuote);

module.exports = router;
