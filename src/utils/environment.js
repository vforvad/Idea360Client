let baseUrl = null;

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://api.idea.teamcircle.io';
} else {
  baseUrl = 'http://dockerhost:5000/api/v1';
}

export default {
  baseURL: baseUrl,
};
