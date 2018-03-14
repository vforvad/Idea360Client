let baseUrl = {};

if (process.env.NODE_ENV === 'production') {
  baseUrl = {
    baseURL: 'https://api.idea.teamcircle.io',
  };
} else {
  baseUrl = {
    baseURL: 'http://dockerhost:5000/api/v1',
  };
}

export default {
  baseURL: baseUrl,
};
