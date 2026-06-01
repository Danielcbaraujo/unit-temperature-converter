const express = require("express");

const router = express.Router();

const convert = require("../controllers/converterController");

router.post("/convert", convert);

module.exports = router;
