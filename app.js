// require data tools
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generatePassword = require("./generate_password");

//setting server port
const port = 3000;

//setting express engine into handlebars
//setting express view into handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use body-parser for any routes
app.use(bodyParser.urlencoded({ extended: true }));

//setting get routes and render to index handlebars
app.get("/", function(req, res) {
  res.render("index");
});

// setting post routes and render to index handlebars
app.post("/", function(req, res) {
  //req data in value of form name
  console.log("req.body", req.body);
  let options = req.body;
  let password = generatePassword(req.body);
  console.log("password is :", password);
  res.render("index", { password: password, options: options });
});

// starting and listen on the express server
app.listen(port, function() {
  console.log(`Express app listening on : http://localhost:${port}`);
});
