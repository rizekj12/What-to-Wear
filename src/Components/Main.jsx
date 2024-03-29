import React, { useState } from "react";
import Header from "./Header";
import WeatherInfo from "./WeatherInfo";
import ClothingInfo from "./ClothingInfo";
import NewSearch from "./NewSearch"
import axios from "axios";
import "../CSS/Main.scss";
var json = require("../clothing.json");

const Main = () => {
  const [location, setLocation] = useState(null)
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [clothingSuggestion] = useState(json);
  const [suggestion, setSuggestion] = useState(null);
  const [input, setInput] = useState("");
  const [weatherStyle, setWeatherStyle] = useState("");
  const [weatherStyle2, setWeatherStyle2] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const setTemp = async (e) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${e},us&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    let temperature = response.data.main.temp;
    let weather = response.data.weather[0].main;
    setCurrentTemp(response.data.main);
    setCurrentWeather(response.data.weather);
    setLocation(response.data.name)

    if (temperature < 50 && weather === "Rain") {
      setSuggestion(clothingSuggestion.suggestions[2]);
      setWeatherStyle("chilli");
    } else if (temperature > 60 && temperature < 75 && weather === "Rain") {
      setSuggestion(clothingSuggestion.suggestions[5]);
      setWeatherStyle("warm");
      setWeatherStyle2("warm2")
    } else if (temperature < 40 && weather === "Snow") {
      setSuggestion(clothingSuggestion.suggestions[1]);
      setWeatherStyle("cold");
      setWeatherStyle2("cold2")
    } else if (temperature < 40) {
      setSuggestion(clothingSuggestion.suggestions[0]);
      setWeatherStyle("cold");
      setWeatherStyle2("cold2")
    } else if (temperature > 40 && temperature < 60) {
      setSuggestion(clothingSuggestion.suggestions[3]);
      setWeatherStyle("chilli");
      setWeatherStyle2("chilli2")
    } else if (temperature > 60 && temperature < 75) {
      setSuggestion(clothingSuggestion.suggestions[4]);
      setWeatherStyle("warm");
      setWeatherStyle2("warm2")
    } else if (temperature > 75) {
      setSuggestion(clothingSuggestion.suggestions[6]);
      setWeatherStyle("hot");
      setWeatherStyle2("hot2")
    }
  };

  return (
    <>
      <Header
        location={location}
        style2={weatherStyle2}
      />

      <NewSearch
        style={weatherStyle}
        input={input}
        setInput={handleChange}
        currentTemp={currentTemp}
        setTemp={setTemp}
      />

      <WeatherInfo
        style={weatherStyle}
        style2={weatherStyle2}
        location={location}
        currentWeather={currentWeather}
        currentTemp={currentTemp}
        setTemp={setTemp}
      />
      <ClothingInfo
        style={weatherStyle}
        suggestion={suggestion}
        currentWeather={currentWeather}
        clothingSuggestions={clothingSuggestion}
      />
    </>
  );
};

export default Main;
