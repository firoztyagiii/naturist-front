const path = require("path");

module.exports = {
  entry: "./src/controller/indexController.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname),
  },
  mode: "production",
  watch: true,
};
