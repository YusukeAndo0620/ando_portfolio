const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    // publicPath: "./",
    publicPath: process.env.NODE_ENV === "production" ? "/ando_portfolio/" : "/",
    outputDir: "docs",
    assetsDir: "./",
    transpileDependencies: true,
});