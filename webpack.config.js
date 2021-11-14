const path = require("path");

module.exports = {
  entry: "./src/controller/indexController.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public", "src"),
  },
  mode: "production",
  watch: true,
};
