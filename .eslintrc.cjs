module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off",
        "indent": ["error", 2],
        "@typescript-eslint/no-unused-vars":"warn",
        "padded-blocks" : "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
    }
}
