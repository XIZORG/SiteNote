import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import ProfileCalendarRightCols from "./ProfileCalendarRightCols";
import React from 'react';
import ProfileCalendarRightCells from "./ProfileCalendarRightCells";
import {dayToNumber} from "../../../../Utils/Helpers/date-helper";
const ProfileCalendarRight = (props) => {

    let month = {
        month: "February",
        days: [
            {
                date: 1,
                actions: null,
                day: 'Wednesday'
            },
            {
                date: 2,
                actions: null,
                day: 'Thursday'
            },
            {
                date: 3,
                actions: null,
                day: 'Friday'
            },
            {
                date: 4,
                actions: null,
                day: 'Saturday'
            },
            {
                date: 5,
                actions: null,
                day: 'Sunday'
            },
            {
                date: 6,
                actions: null,
                day: 'Monday'
            },
            {
                date: 7,
                actions: null,
                day: 'Tuesday'
            },
            {
                date: 8,
                actions: null,
                day: 'Wednesday'
            },
            {
                date: 9,
                actions: null,
                day: 'Thursday'
            },
            {
                date: 10,
                actions: null,
                day: 'Friday'
            },
            {
                date: 11,
                actions: null,
                day: 'Saturday'
            },
            {
                date: 12,
                actions: null,
                day: 'Sunday'
            },
            {
                date: 13,
                actions: null,
                day: 'Monday'
            },
            {
                date: 14,
                actions: null,
                day: 'Tuesday'
            },
            {
                date: 15,
                actions: null,
                day: 'Wednesday'
            },
            {
                date: 16,
                actions: null,
                day: 'Thursday'
            },
            {
                date: 17,
                actions: null,
                day: 'Friday'
            },
            {
                date: 18,
                actions: null,
                day: 'Saturday'
            },
            {
                date: 19,
                actions: null,
                day: 'Sunday'
            },
            {
                date: 20,
                actions: null,
                day: 'Monday'
            },
            {
                date: 21,
                actions: null,
                day: 'Tuesday'
            },
            {
                date: 22,
                actions: 'Do this',
                day: 'Wednesday'
            },
            {
                date: 23,
                actions: null,
                day: 'Thursday'
            },
            {
                date: 24,
                actions: null,
                day: 'Friday'
            },
            {
                date: 25,
                actions: null,
                day: 'Saturday'
            },
            {
                date: 26,
                actions: null,
                day: 'Sunday'
            },
            {
                date: 27,
                actions: 'Do this',
                day: 'Monday'
            },
            {
                date: 28,
                actions: null,
                day: 'Tuesday'
            }
        ]
    }

    let insertShells = () => {
        let startShells = [], endShells = [];
        for(let i = 1; i <= dayToNumber(month.days[0].day)-1; ++i) {
            startShells.push({date: 0, actions: null, day: ''});
        }
        for(let i = 1; i <= 7 - dayToNumber(month.days[month.days.length-1].day); ++i) {
            endShells.push({date: 0, actions: null, day: ''});
        }
        month.days = [...startShells, ...month.days, ...endShells];
    }

    let dates = () => {
        let dates = [];
        let days = month.days;
        let confirmedDays = 0;
        for(let i = 0; i < days.length / 7; ++i) {
            let cell_row = [];
            for(let j = 0; j < 7; ++j) {
                let cell_row_elem = {};
                if(!days[i*7 + j].date) {

                }
                else {
                    cell_row_elem.date = days[i*7 + j].date;
                    cell_row_elem.dayData = !!days[i * 7 + j].actions;
                }
                cell_row.push(cell_row_elem);
            }
            dates.push(<ProfileCalendarRightCells cell_row={cell_row} selectCell={props.selectCell(month.month)}/>);
        }
        return dates;
    };



    let test_cell_row = [
        {
        },
        {
        },
        {
        },

        {
            date: 1,
            dayData: true
        },
        {
            date: 2,
            dayData: true
        },
        {
            date: 3,
            dayData: true
        },
        {
            date: 4,
            dayData: true
        },
    ];

    insertShells();
    return (<>
        <ProfileCalendarRightCols/>
        {dates()}
    </>);
}
export default ProfileCalendarRight;