/*
  apiCalls
*/

export const root = 'https://globalhack-7-1904labs.herokuapp.com/api/';
// export const root = 'http://localhost:8080/api/';

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

export const getTranslation = (textArray, targetLanguage) => {
  const requestBody = {
    text: textArray,
    target_language: targetLanguage.language,
  };
  const config = {
    method: "post",
    header: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(requestBody),
  };
  return fetch(
    'https://q6io8ynkgd.execute-api.us-east-1.amazonaws.com/dev/translatearray',
    config
  )
};

export const getGoal = credentials => {
	const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  }
  return fetch(`${root}login`, config);
}

