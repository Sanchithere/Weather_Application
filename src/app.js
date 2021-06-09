const express = require("express");
const path = require("path");
const getWeatherInfoData = require("../src/weatherCode/weatherInfo");

const newPathToRefer = path.join(__dirname, "../public");

const app = express();
app.set("view engine", "hbs");
const port = process.env.PORT || 3000;

app.use(express.static(newPathToRefer));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send({
      error: "Please enter andress first",
    });
  }
  getWeatherInfoData.getWeatherInfo(address, (error, data) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send({
        dataForLocation: data.body.current,
      });
    }
  });
});

app.listen(port);
