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

module.exports = { getAllarticles };

//{}
//[]
