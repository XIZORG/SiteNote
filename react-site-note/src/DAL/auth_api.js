import axios_in from './DAL_API';

export const sendAuthToServer = (login, password) => {
    return axios_in.post('login', {
        login: login,
        password: password
    })
}

export const sendRegisterToServer = (login, password, email, phone) => {
    let obj = {
        login,
        password,
        email,
        phone
    }
    console.log("Data from react: ");
    console.log(obj);
    return axios_in.post('registration', obj);
}


