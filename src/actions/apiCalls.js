const stlWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
export const getStlWeather = () => {
  return fetch(stlWeatherUrl);
};
