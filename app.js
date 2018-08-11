const express = require("express");
// const routes = require("./routes");
const body_parser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();



//Middleware
app.use(express.static("public"));
app.use(
  body_parser.urlencoded({
    extended: false
  })
);
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main"
  })
);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("home", {
    message: "Hello world",
    subheading: "It's nice to meet you"
  });
});

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`listening on ${PORT}`));
