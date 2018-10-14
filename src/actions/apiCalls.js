/*
  apiCalls
*/

// const root = 'https://globalhack-7-1904labs.herokuapp.com/api/';
const root = 'http://localhost:8080/api/';

export const postUser = user => {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  return fetch(`${root}signup`, config);
};

export const loginUser = credentials => {
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  }
  return fetch(`${root}login`, config);
};

export const getStlWeather = () => {
  return null;
};
