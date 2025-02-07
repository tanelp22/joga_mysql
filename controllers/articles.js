const db = require("../utils/db");

const getAllarticles = (req, res) => {
  let sql = "SELECT * FROM article";
  db.query(sql, (error, result) => {
    //console.log(result);
    res.render("index", {
      articles: result,
    });
  });
};

const getArticleBySlug = (req, res) => {
  let sql = `SELECT * FROM article WHERE slug='${req.params.slug}'`;
  db.query(sql, (error, result) => {
    res.render('article',{
      article: result
    })
  });
};

module.exports = { getAllarticles, getArticleBySlug };

//{}
//[]
