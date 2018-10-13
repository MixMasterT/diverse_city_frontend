/*
  apiCalls
*/

const root = 'http://localhost:8008/api/';

export const postUser = (user) => {
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  }
  return fetch(`${root}signup`, config);
};

export const loginUser = (credentials) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(credentials),
  }
  return fetch(`${root}login`, config);
};

export const getStlWeather = () => {
  return null
}
