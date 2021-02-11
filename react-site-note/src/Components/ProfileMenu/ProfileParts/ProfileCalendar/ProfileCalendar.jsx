import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import ProfileCalendarRight from "./ProfileCalendarRight";
import ProfileCalendarLeft from "./ProfileCalendarLeft";
import {useState} from "react";
import {monthToCase} from "../../../../Utils/Helpers/date-helper";
const ProfileCalendar = (props) => {

    let [selectedDate, setSelectedDate] = useState(['', '']);

    let selectCell = (month) => (date) => {
        if((''+date).length !== 2) date = '0' + date;
        setSelectedDate([monthToCase(month), date]);
        console.log('Cell selected!');
    }

    return (
        <div className={s.profile_calendar}>
            <div className={s.title}>Календарь</div>
            <div className={s.calendar}>
                <div className={s.calendar_left_part}>
                    <ProfileCalendarLeft selectedDate={selectedDate}/>
                </div>
                <div className={s.calendar_right_part}>
                    <ProfileCalendarRight selectCell={selectCell}/>
                </div>
            </div>
        </div>
    );
}
export default ProfileCalendar;