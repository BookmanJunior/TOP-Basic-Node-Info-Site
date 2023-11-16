const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send("Error! Something Broke!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
