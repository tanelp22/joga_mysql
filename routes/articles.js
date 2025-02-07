const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articles.js");

router.get("/", articleController.getAllarticles);
router.get('/article/:slug', articleController.getArticleBySlug)

module.exports = router;

//{}
//[]
