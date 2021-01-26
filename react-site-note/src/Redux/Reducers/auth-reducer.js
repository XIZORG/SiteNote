import {sendAuthToServer, sendRegisterToServer} from "../../DAL/auth_api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    isAuth: false,
    userData: {
        login: null,
        email: null,
        phone: null
    }
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, isAuth: true, userData: {...action.data}}
        }
        default:
            return state;
    }
}

export const setUserData = (data) => {
    return {type: SET_USER_DATA, data}
}

//Thunks
export const tryToLogin = (email, password) => (dispatch) => {
    sendAuthToServer(email, password).then(response => {
        console.log("Response from server: ");
        console.log(response);
        if(response.data.success === false) {
            dispatch(stopSubmit("LoginForm", {password: "Неверный логин или пароль!"}));
        }
        else {
            dispatch(setUserData(response.data.userData));
        }
    });
}
export const tryToRegister = (login, password, email, number) => (dispatch) => {

    sendRegisterToServer(login, password, email, number).then(response => {
        console.log(response);
        //Error appends
        if (response.data.comment) {
            let errors = {};
            if (response.data.comment === "login duplicate") {
                errors.login = "Ошибка! Данный логин уже существует!"
            }
            if (response.data.comment === "email duplicate") {
                errors.email = "Ошибка! Данный email уже зарегистрирован!"
            }
            if (response.data.comment === "phone duplicate") {
                errors.phone = "Ошибка! Данный номер телефона уже зарегистрирован!."
            }
            if (response.data.comment === "unknown error") {
                errors.phone = "Произошла неизвестная ошибка"
            }
            dispatch(stopSubmit("RegisterForm", errors))
        } else if (response.data.success === true) {
            dispatch(setUserData(response.data.userData));
        }
    });
}

