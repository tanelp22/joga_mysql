const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articles.js");

router.get("/", articleController.getAllarticles);

module.exports = router;

//{}
//[]
