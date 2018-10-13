/*
  apiCalls
*/

const root = 'https://globalhack-7-1904labs.herokuapp.com/';

export const postUser = (user) => {
  const config = {
    method: 'POST',
    body: JSON.stringify(user),
  }
  return fetch(`${root}signup`, config);
};

export const loginUser = (credentials) => {
  const config = {
    method: 'POST',
    body: credentials,
  }
  return fetch(`${root}login`, config);
};

export const getStlWeather = () => {
  return null
}
