import React, {Component} from 'react'
import axios from "axios"

const getWeatherData = () => axios
    .get(`https://api.aerisapi.com/forecasts/NYC,NY?&format=json&filter=day&limit=7&client_id=PSJw6pug7aGwL0WESbOyK&client_secret=LylqXKAm8c12hTkuGfk9R1E9k7pmrcUCOtq0VfGi`)




export default {
    weather_data: getWeatherData
}