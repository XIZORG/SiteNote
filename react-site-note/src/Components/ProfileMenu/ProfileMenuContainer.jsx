import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import ProfileMenu from "./ProfileMenu";
import {
    addHoliday,
    setAddHolidaySuccess,
    setIsAddEventFetching,
    tryToAddEventOnServer
} from "../../Redux/Reducers/profile-reducer";
import {reset, stopSubmit} from 'redux-form';

const ProfileMenuContainer = (props) => {

    let onNewEventSubmit = (data) => {
        props.tryToAddEventOnServer(data.holiday_name, data.holiday_date)
    }

    return <ProfileMenu {...props} onNewEventSubmit={onNewEventSubmit} addHolidaySuccess={props.addHolidaySuccess}
                        setAddHolidaySuccess={props.setAddHolidaySuccess} isAddEventFetching={props.isAddEventFetching}/>
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userData.login,
        birthdayDay: state.auth.userData.birthday.day,
        birthdayMonth: state.auth.userData.birthday.month,
        birthdayYear: state.auth.userData.birthday.year,

        holidays: state.profilePage.holidays,
        addHolidaySuccess: state.profilePage.addHolidaySuccess,
        isAddEventFetching: state.profilePage.isAddEventFetching
    };
}

export default compose(
    connect(mapStateToProps, {
        addHoliday, setAddHolidaySuccess, setIsAddEventFetching, tryToAddEventOnServer
    })
)(ProfileMenuContainer);