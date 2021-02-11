import React, {useState} from 'react';
import s from './../../Styles/SCSS/ProfileMenu/profile_menu.module.css';
import avatar from './../../Styles/Images/matthew.png'
import {NavLink, Route, withRouter} from "react-router-dom";
import ProfileLeftPart from "./ProfileLeftPart";
import ProfileMain from "./ProfileParts/ProfileMain";
import ProfileNewEvent from "./ProfileParts/ProfileNewEvent";
import ProfileCalendar from "./ProfileParts/ProfileCalendar/ProfileCalendar";

const ProfileMenu = (props) => {

    // let right_render_part;
    // switch(props.profilePart) {
    //     case "main": {
    //         right_render_part = <ProfileMain/>;
    //         break;
    //     }
    //     default: {
    //         right_render_part = <ProfileMain/>;
    //         break;
    //     }
    // }

    return (
        <div className={s.profile_menu}>
            <ProfileLeftPart userName={props.userName} birthdayDay={props.birthdayDay}
                             birthdayMonth={props.birthdayMonth} birthdayYear={props.birthdayYear}/>

            <div className={s.right_part}>
                <Route exact path={"/profile"} render={() => <ProfileMain holidays={props.holidays}/>}/>
                <Route exact path={"/profile/new_event"}
                       render={() => <ProfileNewEvent onSubmit={props.onNewEventSubmit}
                                                      success={props.addHolidaySuccess}
                                                      setAddHolidaySuccess={props.setAddHolidaySuccess}
                                                      isAddEventFetching={props.isAddEventFetching}/>}
                />
                <Route exact path={"/profile/calendar"} render={() => <ProfileCalendar/>}/>
            </div>
        </div>
    );
}
export default withRouter(ProfileMenu);