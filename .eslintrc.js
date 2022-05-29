module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:vue/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        strict: "off",
    },
};