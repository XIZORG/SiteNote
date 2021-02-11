import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";

const ProfileCalendarRightCols = (props) => {

    let findMaxPriority = (objects) => {
        let max = 1;
        for (let i = 0; i < objects.length; ++i) {
            if (objects[i].priority > max) {
                max = objects[i].priority;
            }
        }
        return max;
    }

    let cells = props.cell_row.map((item) => {
        let isEmpty = !item.date;
        if (isEmpty) {
            return <div className={s.cr_cell}>
            </div>
        } else {
            let isEvents = !!item.events.length;
            let events = isEvents ? {"data-event-priority": findMaxPriority(item.events)} : '';
            return <div className={s.cr_cell} onClick={() => {
                props.selectCell(item.date, item.events)
            }}>
                <p {...events}>
                    {item.date}
                </p>
            </div>
        }
    })
    return (
        <div className={s.cr_row}>
            {cells}
        </div>
    );
}
export default ProfileCalendarRightCols;