import * as axios from 'axios';

const axios_instance = axios.create({
    baseURL: "http://localhost:8080/api/"
});
export default axios_instance;

export const try_to_get = () => axios_instance.get('allUsers').then(response => console.log(response));