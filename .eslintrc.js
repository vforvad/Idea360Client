module.exports = {
  extends: "airbnb",
   env: {
    "browser": true,
    "node": true,
    "jasmine": true,
    "jest": true
  },

   parser: "babel-eslint",
   "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};
