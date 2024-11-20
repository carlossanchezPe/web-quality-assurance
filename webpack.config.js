const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify")
    }
  },
};
