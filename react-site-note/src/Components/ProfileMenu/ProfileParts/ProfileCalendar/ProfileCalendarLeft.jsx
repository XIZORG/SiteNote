import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import React from 'react';
const ProfileCalendarLeft = (props) => {

    let dayEvents = props.eventsOfCurrentDay.map(item => {
        return <div className={s.calendar_event}>
            {item.name}
        </div>
    });

    return (<>
        <button className={s.calendar_left_part_add_button}>
            Добавить Событие +
        </button>
        <div className={s.calendar_left_part_title}>
            {props.selectedDate[1] + " " + props.selectedDate[0]}
        </div>
        <div className={s.calendar_left_part_events}>
            {dayEvents}
        </div>
    </>);
}
export default ProfileCalendarLeft;