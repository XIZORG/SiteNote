import * as axios from 'axios';

export const getData = () => {
    axios.get('http://localhost:8080/api/allUsers').then(response => {
       console.log(response);
    });
}