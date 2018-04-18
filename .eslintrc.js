module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": 2015,
        "jsx": true
    },
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "no-console": 0,
        "indent": [2, 4, {
            "SwitchCase": 1
        }]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".sass",
                    ".json"
                ]
            }
        }
    }
}