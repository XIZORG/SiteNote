import * as axios from 'axios';

const axios_instance = axios.create({
    baseURL: "http://localhost:8080/api/"
});
export default axios_instance;

