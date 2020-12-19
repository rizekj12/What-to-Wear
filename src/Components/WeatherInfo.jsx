import React, { useDebugValue } from "react";
import "../CSS/WeatherInfo.scss";

//${props.style}

const WeatherInfo = (props) => {
  return (
    <div>
      <div className={`${props.style2} weatherTitle`}>
        <h2 className="todayTitle">Today's weather</h2> 
      </div>
      <div className={`${props.style} weatherDiv`}>
      {props.currentTemp && props.currentWeather && (
        <div className="weatherDiv2">
          <h3>{props.currentWeather[0].main}</h3>
          <h3>{props.currentWeather[0].description}</h3>
          <p className="subTitle">temp:</p>
          <h3>{Math.round(props.currentTemp.temp)} &#8457;</h3>
          <p className="subTitle">feels like:</p>
          <h3>{props.currentTemp.feels_like}</h3>
          <p className="subTitle">humidity:</p>
          <h3>{props.currentTemp.humidity}</h3>
        </div>
      )}
      </div>
    </div>
  );
};

export default WeatherInfo;
