import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import ProfileCalendarRightCols from "./ProfileCalendarRightCols";
import React from 'react';
import ProfileCalendarRightCells from "./ProfileCalendarRightCells";
import {dayToNumber} from "../../../../Utils/Helpers/date-helper";
const ProfileCalendarRight = (props) => {

    let insertShells = () => {
        let startShells = [], endShells = [];
        for(let i = 1; i <= dayToNumber(props.month.days[0].day)-1; ++i) {
            startShells.push({date: 0, events: [], day: ''});
        }
        for(let i = 1; i <= 7 - dayToNumber(props.month.days[props.month.days.length-1].day); ++i) {
            endShells.push({date: 0, events: [], day: ''});
        }
        props.month.days = [...startShells, ...props.month.days, ...endShells];
    }

    let dates = () => {
        let dates = [];
        let days = props.month.days;
        let confirmedDays = 0;
        for(let i = 0; i < days.length / 7; ++i) {
            let cell_row = [];
            for(let j = 0; j < 7; ++j) {
                let cell_row_elem = {};
                if(!days[i*7 + j].date) {

                }
                else {
                    cell_row_elem.date = days[i*7 + j].date;
                    cell_row_elem.events = days[i * 7 + j].events;
                }
                cell_row.push(cell_row_elem);
            }
            dates.push(<ProfileCalendarRightCells cell_row={cell_row} selectCell={props.selectCell(props.month.month)}/>);
        }
        debugger;
        return dates;
    };

    insertShells();
    return (<>
        <ProfileCalendarRightCols/>
        {dates()}
    </>);
}
export default ProfileCalendarRight;