import React from 'react';
import "../CSS/WeatherInfo.scss"

const WeatherInfo = (props) => {
   return (
       <>
       <h2> weather info</h2>
      {props.currentTemp && props.currentWeather &&
      <div> 
        <h3>Temp: {props.currentTemp.temp}</h3>
        <h3>{props.currentWeather[0].description}</h3>
      </div>
      }




 

       </>
   )
}
 
export default WeatherInfo;