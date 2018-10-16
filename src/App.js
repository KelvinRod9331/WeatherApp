import React, { Component } from "react";
import w_api from "./weatherAPI";
import Forecast from './Forecast'


class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      weekly_forecast: null,
      clicked: false
    };
  }

  componentWillMount() {
    w_api
      .weather_data()
      .then(res => {
        this.setState({
          data: res.data.response,
          weekly_forecast: res.data.response[0].periods
        });
      })
      .catch(err => {
        console.log("Error Fetching Data: ", err);
      });
  }

  render() {
    const { data, weekly_forecast, clicked } = this.state;
    console.log("Data Collected", weekly_forecast, clicked);
    return (
      <div className="weather_app">
      <div className='btn'>
        <button id='btn' onClick={() => this.setState({clicked: !clicked})}>{clicked ? "Fahrenheit" : "Celsius"}</button>
      </div>
      {weekly_forecast ? <Forecast values={weekly_forecast} scale={clicked} /> : ''} 
      </div>
    );
  }
}

export default WeatherApp;




/**
 * 
 * 
 * 
 * 
 * 
 *  <div className="day1_container">
          <span className="dataTimeISO">
            {weekly_forecast ? weekly_forecast[0].dateTimeISO : ""}
          </span>
          <div className="forecast_img_container">
            <img
              src={
                weekly_forecast
                  ? require(`./icons/${weekly_forecast[0].icon}`)
                  : ""
              }
              className="forecast_img"
            />
          </div>
          <div className='temp_data'>
              High: {weekly_forecast ? weekly_forecast[0].maxTempF : ""}<br/>
              Low: {weekly_forecast ? weekly_forecast[0].minTempF : ""}
          </div>
        </div>
 */
