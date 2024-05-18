module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/ban-ts-comment": 1,
        "@typescript-eslint/no-unused-vars": 2,
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
        "curly": ["error", "all"],
    },
};
