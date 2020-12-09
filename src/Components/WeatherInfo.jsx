import React from 'react';

const WeatherInfo = (props) => {
   return (
       <>
       <h2> weather info</h2>
      {props.currentTemp && props.currentWeather &&
      <div> 
        <h3>{props.currentTemp.temp}</h3>
        <h3>{props.currentWeather[0].description}</h3>
      </div>
      }

      


 

       </>
   )
}
 
export default WeatherInfo;