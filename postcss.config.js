const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-mixins")
  ]
};
