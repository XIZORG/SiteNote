import {sendAuthToServer} from "../../DAL/auth_api";

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
    console.log('Works!');
    sendAuthToServer(email,password);
}

