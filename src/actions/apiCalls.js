/*
  apiCalls
*/

export const root = 'https://globalhack-7-1904labs.herokuapp.com/api/';
// export const root = 'http://localhost:8080/api/';

const getConfig = (method, requestBody) => {
  const config = {
    method: method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };
  if(requestBody) {
    config.requestBody = JSON.stringify(requestBody);
  }
  return config;
};

export const postUser = user => {
  const config = getConfig('post', user);
  return fetch(`${root}signup`, config);
};

export const loginUser = credentials => {
  const config = getConfig('post', credentials)
  return fetch(`${root}login`, config);
};

export const getTranslation = (textArray, targetLanguage) => {
  const requestBody = {
    text: textArray,
    target_language: targetLanguage.language,
  };
  const config = getConfig('post', requestBody);
  return fetch(
    'https://q6io8ynkgd.execute-api.us-east-1.amazonaws.com/dev/translatearray',
    config
  )
};

export const getGoal = (id) => {
	const config = getConfig()
  return fetch(`${root}goals/${id}`, config);
}

export const getObjective = (id) => {
	const config = getConfig('get');
  return fetch(`${root}milestones/${id}`, config);
}

export const getSummaries = (id) => {
	const config = getConfig('get');
  return fetch(`${root}summaries/${id}`, config);
}

export const getUser = (phone) => {
	const config = getConfig('get');
  return fetch(`${root}users/${phone}`, config);
}

export const getScore = (text) => {
	const requestBody = {
    text:text,
    "target_language": "es",
    "iterations": 5
}
	const config = getConfig('post', requestBody);
  return fetch(`https://q6io8ynkgd.execute-api.us-east-1.amazonaws.com/dev/verify`, config)
		.then(function(response) {
				return response.json();
			});
}

export const getSummary = (chatLines) => {
	const requestBody = {
    text:chatLines
  };
	const config = getConfig('post', requestBody);
  return fetch(`https://dudjjedajc.execute-api.us-east-1.amazonaws.com/dev/convert`, config)
		.then(function(response) {
				return response.json();
			});
}

export const saveSummary = (summaryText,milestoneId) => {
	const requestBody = {
    summaryText:summaryText,
  };
	const config = getConfig('post', requestBody);
  return fetch(`${root}summaries/${milestoneId}`, config)
		.then(function(response) {
				return response.json();
			});
}
