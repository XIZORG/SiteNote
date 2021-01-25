import axios_in from './DAL_API';

export const sendAuthToServer = (login, password) => {
    return axios_in.post('login', {
        login: login,
        password: password
    })
}

export const sendRegisterToServer = (login, password, email, number) => {
    return axios_in.post('registration', {
        login,
        password,
        email,
        number
    })
}


