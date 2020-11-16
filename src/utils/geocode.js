const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiamF5ZGVubHNmIiwiYSI6ImNraGZ0a20yZzBmMmMyeW53emR0eWNramwifQ.ymyqDZDHxnnylMKrtGDkGg&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Mapbox API!", undefined);
    } else if (body.features.length < 1) {
      callback("Unable to fetch data for specified location.", undefined);
    } else {
      callback(undefined, {
        location: body.features[0].place_name,
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
