const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: "ando_portfolio",
    outputDir: "docs",
    assetsDir: "./",
    transpileDependencies: true,
});