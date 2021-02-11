import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";

const ProfileCalendarRightCols = (props) => {
    let cells = props.cell_row.map((item) => {
        let isEmpty = !item.date;

        return <div className={s.cr_cell} onClick={() => {
            if (!isEmpty) {
                props.selectCell(item.date)
            }
        }

        }>
            {item.date
                ? <p data-event={item.dayData ? 1 : ''}>
                    {item.date}
                </p>
                : ''}
        </div>
    })
    return (
        <div className={s.cr_row}>
            {cells}
        </div>
    );
}
export default ProfileCalendarRightCols;