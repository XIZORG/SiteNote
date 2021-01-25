import axios_in from './DAL_API';

export const sendAuthToServer = (login, password) => {
    return axios_in.post('addUser', {
        login: login,
        password: password
    })
}

export const sendRegisterToServer = (login, password, email, number) => {
    return axios_in.post('registerUser', {
        login,
        password,
        email,
        number
    })
}


