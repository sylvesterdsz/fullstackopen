import axios from "axios"
const baseURL = "http://localhost:3001/persons"

const getAllPersons = () => {
    return axios.get(baseURL).then(response => response.data);
}

const createPerson = (personObj) => {
    return axios.post(baseURL, personObj).then(response => response.data)
}

const deletePerson = (id) => {
    const newIdURL = `${baseURL}/${id}`
    return axios.delete(newIdURL).then(response => response.data)
}

export default {
    getAllPersons, createPerson, deletePerson
}