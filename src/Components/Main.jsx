import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search"
import WeatherInfo from "./WeatherInfo"
import ClothingInfo from "./ClothingInfo"
import axios from "axios"
var json = require( "../clothing.json")

const Main = () => {

      const [location, setLocation] = useState('');
      const [currentTemp, setCurrentTemp] = useState(null);
      const [currentWeather, setCurrentWeather] = useState(null);
      const [clothingSuggestion, setClothingSuggestion] = useState(json);
      const [suggestion, setSuggestion] = useState(null)
      const [input, setInput] = useState('');



      const handleChange = e => {
        setInput(e.target.value);
      };

      const setTemp = async (e) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${e},us&appid=1bc0ccc0703dbac68a7322b905da0722&units=imperial`)
        // let suggestionData = null
        let temperature = response.data.main.temp
        let weather = response.data.weather[0].main
        setCurrentTemp(response.data.main)
        setCurrentWeather(response.data.weather)
        // setSuggestion(suggestionData)

        console.log(temperature, weather)

        if(temperature < 40){
          // suggestionData = clothingSuggestion.suggestions[0]
          setSuggestion(clothingSuggestion.suggestions[0])
        }else if(temperature > 40 && temperature < 60){
          setSuggestion(clothingSuggestion.suggestions[2])
        }else if(temperature > 60 && temperature < 75){
          setSuggestion(clothingSuggestion.suggestions[3])
        }else if(temperature > 75){
          setSuggestion(clothingSuggestion.suggestions[5])
        }
        


      }

      // const suggestClothes = (e) =>{

      // }
    
      


        return ( 
            <>
            <Header/>
            <Search input={input} setInput={handleChange} currentTemp={currentTemp} setTemp={setTemp}/>
            <WeatherInfo currentWeather={currentWeather} currentTemp={currentTemp} setTemp={setTemp}/>
            <ClothingInfo suggestion={suggestion} currentWeather={currentWeather} clothingSuggestions={clothingSuggestion} suggestion={suggestion}/>

            </>

         );
    
}
 
export default Main;