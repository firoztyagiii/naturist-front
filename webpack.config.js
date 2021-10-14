const path = require("path");

module.exports = {
  entry: "./src/script/controller/controller.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "src", "script"),
  },
  mode: "production",
  watch: true,
};
