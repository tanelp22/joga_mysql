const app = require("./utils/app.js");
const db = require("./utils/db.js");
const articleRoutes = require("./routes/articles.js");

app.use("/", articleRoutes);

app.listen(3012, () => {
  console.log("Web server is connected");
});

//npm start

//{}
//[]
