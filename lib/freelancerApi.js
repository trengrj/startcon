const requestPromise = require('request-promise');

exports.fetchUserSelf = (accessToken) => {
  const options = {
    uri: 'https://www.freelancer-sandbox.com/api/users/0.1/self',
    headers: { 'Freelancer-OAuth-V1': accessToken },
    json: true
  };

  return requestPromise(options);
};
