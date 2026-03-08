import axios from "axios"
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all"
const baseURLCountry = "https://studies.cs.helsinki.fi/restcountries/api/name"

const getAllCountries = () => {
    return axios.get(baseURL).then(response => response.data)
}

const getCountryDetails = (name) => {
    return axios.get(`${baseURLCountry}/${name}`).then(response => response.data)
}

export default {
    getAllCountries, getCountryDetails
}