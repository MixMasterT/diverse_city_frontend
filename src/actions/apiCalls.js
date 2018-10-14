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

export const getGoal = (id) => {
	const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${root}goals/${id}`, config);
}

export const getObjective = (id) => {
	const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${root}milestones/${id}`, config);
}

export const getSummaries = (id) => {
	const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${root}summaries/${id}`, config);
}

export const getUser = (phone) => {
	const config = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${root}users/${phone}`, config);
}

export const getScore = (text) => {
	const requestBody = {
    text:text,
    "target_language": "es",
    "iterations": 5
}
	const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify(requestBody),
  }
  return fetch(`https://q6io8ynkgd.execute-api.us-east-1.amazonaws.com/dev/verify`, config)
		.then(function(response) {
				return response.json();
			});
}

export const getSummary = (chatLines) => {
	const requestBody = {
    text:chatLines
}
	const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify(requestBody),
  }
  return fetch(`https://dudjjedajc.execute-api.us-east-1.amazonaws.com/dev/convert`, config)
		.then(function(response) {
				return response.json();
			});
}

export const saveSummary = (summaryText,milestoneId) => {
	const requestBody = {
    summaryText:summaryText,
}
	const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify(requestBody),
  }
  return fetch(`${root}summaries/${milestoneId}`, config)
		.then(function(response) {
				return response.json();
			});
}