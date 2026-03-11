import axios from "axios"
const baseURL = "/api/persons"

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

const updatePerson = (id, personObj) => {
    const newIdURL = `${baseURL}/${id}`
    return axios.put(newIdURL,personObj).then(response => response.data)
}

export default {
    getAllPersons, createPerson, deletePerson, updatePerson
}