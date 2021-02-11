import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";

const ProfileCalendarLeft = (props) => {

    return (<>
        <button className={s.calendar_left_part_add_button}>
            Добавить Событие +
        </button>
        <div className={s.calendar_left_part_title}>
            {props.selectedDate[1] + " " + props.selectedDate[0]}
        </div>
        <div className={s.calendar_left_part_events}>
            <div className={s.calendar_event}>
                День Фламинго
            </div>
            <div className={s.calendar_event}>
                День Фламинго
            </div>
            <div className={s.calendar_event}>
                День Фламинго
            </div>
        </div>
    </>);
}
export default ProfileCalendarLeft;