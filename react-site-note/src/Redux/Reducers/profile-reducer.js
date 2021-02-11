import {sendNewUserEvent} from "../../DAL/profile_api";
import {reset, stopSubmit} from "redux-form";

const ADD_HOLIDAY = "ADD_HOLIDAY";
const ADD_PERSON = "ADD_PERSON";
const SET_ADD_HOLIDAY_SUCCESS = "SET_ADD_HOLIDAY_SUCCESS";
const SET_IS_ADD_EVENT_FETCHING = "SET_IS_ADD_EVENT_FETCHING";

let initialState = {
    holidays: [
        {
            holiday_name: "День Благодарения",
            holiday_date: "25.02.2021"
        },
        {
            holiday_name: "Ещё какой-то день",
            holiday_date: "14.03.2021"
        }
    ],
    people: [
        {
            person_name: "Jack",
        }
    ],
    addHolidaySuccess: false,
    isAddEventFetching: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOLIDAY: {
            return {...state, holidays: [...state.holidays, {holiday_name: action.name, holiday_date: action.date}]}
        }
        case ADD_PERSON: {
            return {...state, people: [...state.people, {person_name: action.name}]}
        }
        case SET_ADD_HOLIDAY_SUCCESS: {
            return {...state, addHolidaySuccess: action.success}
        }
        case SET_IS_ADD_EVENT_FETCHING: {
            return {...state, isAddEventFetching: action.is}
        }
        default: return state;
    }
}

export const addHoliday = (name,date) => {
    return {type: ADD_HOLIDAY, name,date}
}

export const addPerson = (name) => {
    return {type: ADD_PERSON, name}
}

export const setAddHolidaySuccess = (success) => {
    return {type: SET_ADD_HOLIDAY_SUCCESS, success}
}

export const setIsAddEventFetching = (is) => {
    return {type: SET_IS_ADD_EVENT_FETCHING, is}
}

export const tryToAddEventOnServer = (name,date) => (dispatch) => {

    if (!name || !date) {
        dispatch(stopSubmit("ProfileNewEvent", {_error: "Ошибка! Поля ввода не должны быть пустыми!"}));
    } else {
        dispatch(setIsAddEventFetching(true));
        sendNewUserEvent(name,date, window.store.getState().auth.userData.id).then(response => {
            if(response.data.success) {
                dispatch(addHoliday(name, date));
                dispatch(setAddHolidaySuccess(true));
                dispatch(reset("ProfileNewEvent"));
            }
            else {
                dispatch(stopSubmit("ProfileNewEvent", {_error: response.data.error_message}));
            }
        });
        dispatch(setIsAddEventFetching(false));
    }

}

export default profileReducer;
