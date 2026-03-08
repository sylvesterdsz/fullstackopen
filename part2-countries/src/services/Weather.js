import axios from "axios"

const getWeatherDetails = (lat, lon) => {
    const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    return axios.get(baseURL).then(response => response)
}

export default {
    getWeatherDetails
}