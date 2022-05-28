const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: "./",
    outputDir: "docs",
    assetsDir: "./",
    transpileDependencies: true,
});