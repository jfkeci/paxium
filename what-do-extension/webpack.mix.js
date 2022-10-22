let mix = require("laravel-mix");

mix
  .setPublicPath("./")
  .sass("src/assets/sass/popup.scss", "dist/css")
  .js("src/js/background.js", "dist/js")
  .js("src/main.js", "dist/js")
  .vue()
  .copy("src/assets/images", "dist/images")
  .options({ processCssUrls: false });
