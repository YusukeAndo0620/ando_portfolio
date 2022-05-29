const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "/ando_portfolio/" : "/",
    outputDir: "docs",
    outputDir: "dist",
    assetsDir: "./",
    transpileDependencies: true,
});