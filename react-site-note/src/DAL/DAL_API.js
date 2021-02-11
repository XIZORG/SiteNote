import * as axios from 'axios';

const axios_instance = axios.create({
    baseURL: "http://localhost:8080/api/main/"
});
export const axios_instance_event = axios.create({
    baseURL: "http://localhost:8080/api/ivent/"
});
export const axios_in = axios.create({
    baseURL: "http://localhost:8080/api/"
});
export default axios_instance;


