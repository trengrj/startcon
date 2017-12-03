const requestPromise = require('request-promise');

exports.fetchUserSelf = (accessToken) => {
  const options = {
    uri: 'https://www.freelancer-sandbox.com/api/users/0.1/self',
    headers: { 'Freelancer-OAuth-V1': accessToken },
    json: true
  };

  return requestPromise(options);
};

exports.postCreateProject = (accessToken) => {
  const body = {
    "title": "Kitchen refresh",
    "description": "Need some help decorating and refreshing our kitchen",
    "currency": {
      "code": "AUD",
      "id": 3,
      "sign": "$"
    },
    "budget": {
      "minimum": 8000,
      "maximum": 10000,
    },
    "jobs": [
      {
        "id": 3
      },
      {
        "id": 17
      }
    ]
  };

  const options = {
    method: 'POST',
    uri: 'https://www.freelancer-sandbox.com/api/projects/0.1/projects/',
    headers: { 'Freelancer-OAuth-V1': accessToken },
    body: body,
    json: true
  };

  return requestPromise(options);
};
