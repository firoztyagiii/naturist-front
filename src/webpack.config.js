const path = require("path");

module.exports = {
  entry: "./src/script/controller/indexController.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "src", "script"),
  },
  mode: "production",
  watch: true,
};
