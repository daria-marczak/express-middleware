var express = require("express");
var app = express();


app.get("/store", function(req, res, next) {
  console.log("Hi there, I'm the intermediary between the request and the response of /store command");
  next();
});

app.get("/", funciton(req, res) {
  res.send("Hello there");
});

app.get("/store", function(req, res) {
  res.send("That's the shop")
});


app.use(function(req, res, next) {
  res.status(404).send("Sorry, I couldn't find it");
});

app.listen(3000);