const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", (req, res) => {
  res.send(req.body.cute);
});

app.listen(3030, () => {
  console.log("Working");
});
