import {sendAuthToServer, sendRegisterToServer} from "../../DAL/auth_api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
}

//Thunks
export const tryToLogin = (email,password) => (dispatch) => {
    sendAuthToServer(email,password).then(response => {
       console.log(response);
    });
}
export const tryToRegister = (login, password, email, number) => (dispatch) => {
    sendRegisterToServer(login, password, email, number).then(response => {
       console.log(response);
    });
}

