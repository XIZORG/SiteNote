import {combineReducers, createStore} from "redux";
import mainReducer from "./Reducers/main-reducer";
import {authReducer} from "./Reducers/auth-reducer";
import {reducer as formReducer} from 'redux-form';
let reducers = combineReducers({
    mainPage: mainReducer,
    auth: authReducer,
    form: formReducer
});

export const store = createStore(reducers);
