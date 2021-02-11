import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import ProfileCalendarRight from "./ProfileCalendarRight";
import ProfileCalendarLeft from "./ProfileCalendarLeft";
import {useState} from "react";
import {monthToCase} from "../../../../Utils/Helpers/date-helper";

const ProfileCalendar = (props) => {
    let [selectedMonth, setSelectedMonth] = useState({month: "February", year: 2021});
    let [selectedDate, setSelectedDate] = useState(['', '']);

    let selectCell = (month) => (date, events) => {
        if (('' + date).length !== 2) date = '0' + date;
        setSelectedDate([monthToCase(month), date]);
        if (events) setEventsOfCurrentDay(events);
        else setEventsOfCurrentDay([]);
        console.log('Cell selected!');
        console.log(eventsOfCurrentDay);
    }

    let [eventsOfCurrentDay, setEventsOfCurrentDay] = useState([]);

    let month = {
        month: "February",
        year: 2021,
        days: [
            {
                date: 1,
                events: [{
                    priority: 5,
                    name: 'Поздравить Артёма с др'
                }],
                day: 'Wednesday'
            },
            {
                date: 2,
                events: [],
                day: 'Thursday'
            },
            {
                date: 3,
                events: [],
                day: 'Friday'
            },
            {
                date: 4,
                events: [],
                day: 'Saturday'
            },
            {
                date: 5,
                events: [],
                day: 'Sunday'
            },
            {
                date: 6,
                events: [],
                day: 'Monday'
            },
            {
                date: 7,
                events: [],
                day: 'Tuesday'
            },
            {
                date: 8,
                events: [],
                day: 'Wednesday'
            },
            {
                date: 9,
                events: [],
                day: 'Thursday'
            },
            {
                date: 10,
                events: [],
                day: 'Friday'
            },
            {
                date: 11,
                events: [],
                day: 'Saturday'
            },
            {
                date: 12,
                events: [],
                day: 'Sunday'
            },
            {
                date: 13,
                events: [],
                day: 'Monday'
            },
            {
                date: 14,
                events: [],
                day: 'Tuesday'
            },
            {
                date: 15,
                events: [],
                day: 'Wednesday'
            },
            {
                date: 16,
                events: [],
                day: 'Thursday'
            },
            {
                date: 17,
                events: [],
                day: 'Friday'
            },
            {
                date: 18,
                events: [],
                day: 'Saturday'
            },
            {
                date: 19,
                events: [],
                day: 'Sunday'
            },
            {
                date: 20,
                events: [],
                day: 'Monday'
            },
            {
                date: 21,
                events: [],
                day: 'Tuesday'
            },
            {
                date: 22,
                events: [{name: "Do this"}],
                day: 'Wednesday'
            },
            {
                date: 23,
                events: [],
                day: 'Thursday'
            },
            {
                date: 24,
                events: [],
                day: 'Friday'
            },
            {
                date: 25,
                events: [],
                day: 'Saturday'
            },
            {
                date: 26,
                events: [],
                day: 'Sunday'
            },
            {
                date: 27,
                events: [{name: "Do this"}],
                day: 'Monday'
            },
            {
                date: 28,
                events: [{name: "Do this"}],
                day: 'Tuesday'
            }
        ]
    }

    return (
        <div className={s.profile_calendar}>
            <div className={s.title}>Календарь</div>
            <div className={s.calendar}>
                <div className={s.calendar_left_part}>
                    <ProfileCalendarLeft selectedDate={selectedDate} eventsOfCurrentDay={eventsOfCurrentDay}/>
                </div>
                <div className={s.calendar_right_part}>
                    <ProfileCalendarRight month={month} selectCell={selectCell}
                                          setEventsOfCurrentDay={setEventsOfCurrentDay}/>
                </div>
            </div>
            <div className={s.calendar_month_swiper}>
                <button className={s.btn_cal + ' ' + s.btn_cal_left}>&lt;</button>
                <div className={s.btn_current_month}>{month.month + " " + month.year}</div>
                <button className={s.btn_cal + ' ' + s.btn_cal_left}>&gt;</button>
            </div>
        </div>
    );
}
export default ProfileCalendar;