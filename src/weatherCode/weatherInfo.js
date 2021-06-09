const request = require("request");

const getWeatherInfo = (address, callback) => {
  request(
    {
      url:
        "http://api.weatherstack.com/current?access_key=0e7d06948be5a61fb2a9c3a4eae38a58&query=" +
        address +
        "",
      json: true,
    },
    (error, response) => {
      if (error) {
        callback({ error: "Check you internet connection" }, undefined);
      } else if (
        response.body === "undefined" ||
        response.body.success === false ||
        response === undefined
      ) {
        callback({ error: "Unable to find this location" }, undefined);
      } else {
        callback(undefined, response);
      }
    }
  );
};

module.exports = { getWeatherInfo };
