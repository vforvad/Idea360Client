module.exports = {
  extends: "airbnb",
   env: {
    "browser": true,
    "node": true,
    "jasmine": true
  },

   parser: "babel-eslint",
   "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};
