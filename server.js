var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.render("./index.html");
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  