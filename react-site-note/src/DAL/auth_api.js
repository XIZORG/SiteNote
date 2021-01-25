import axios_in from './DAL_API';

export const sendAuthToServer = (login, password) => {
    axios_in.post('addUser', {
        login: login,
        password: password
    }).then(response => {
        console.log(response);
    })
}