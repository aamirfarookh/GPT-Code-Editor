const express = require("express");
const { codeConverter, codeDebugger, codeQualityChecker } = require("../Controllers/gptController");

const router = express();

router.post("/convert",codeConverter);

router.post("/debug",codeDebugger);

router.post("/qualityCheck",codeQualityChecker);


module.exports = {router}