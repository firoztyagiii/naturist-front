const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("*", (req, res) => {
  res.send("./index.html");
});

app.listen(3000, () => {
  console.log("Listening to PORT 3000");
});
