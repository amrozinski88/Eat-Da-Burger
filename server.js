const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv").config()
const app = express();
const router = require("./controllers/burgers_controller")

const PORT = process.env.PORT || 3000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(router)







app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });



