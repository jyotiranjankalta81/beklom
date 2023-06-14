import axios from "axios";


const JsonURL = "http://localhost:5000/";
const headers = {
    'Content-Type': 'application/json',
}

const backendURL = "http://localhost:8000/api/"
// const backendURL = "https://backlom.techjainsupport.co.in/api/"

export const axiosInstance = axios.create({
    baseURL: backendURL,
    headers: headers
})

export const axiosInstances = axios.create({
    baseURL: JsonURL,
    headers: headers
});


