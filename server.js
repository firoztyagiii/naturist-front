const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(2000, () => {
  console.log("Listening to PORT 2000");
});
