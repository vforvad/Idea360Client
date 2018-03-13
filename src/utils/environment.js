let config = {};

if (process.env.NODE_ENV === 'production') {
  config = {
    baseURL: 'https://api.idea.teamcircle.io'
  };
} else {
  config = {
    baseURL: 'http://dockerhost:5000'
  }
}

export default config;
