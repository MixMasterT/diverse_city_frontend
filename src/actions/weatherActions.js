import * as apiCalls from './apiCalls';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export const fetchWeather = () => async (dispatch) => {
  let weatherResponse;
  try {
    weatherResponse = await apiCalls.getStlWeather();
  } catch(error) {
    console.log('Error...', error);
    return;
  };
  const weather = await weatherResponse.json();
  console.log('weather: ', weather);
  return dispatch({
    type: RECEIVE_WEATHER,
    weather,
  });
}
