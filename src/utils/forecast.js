const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3724d3f6e352e24d30b86d3d826809ad&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weatherstack API!", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      const currentData = body.current;
      callback(
        undefined,
        `${currentData.weather_descriptions[0]}. It is currently ${currentData["temperature"]} degrees out. It feels like ${currentData["feelslike"]} degrees out.`
      );
    }
  });
};

module.exports = forecast;
