const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  res.send(req.body.cute);
});

app.listen(3030, () => {
  console.log("Working");
});
