import s from "../../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";

const ProfileCalendarRightCols = () => {
    return (
        <div className={s.cr_row}>
            <div className={s.cr_col}>
                пн
            </div>
            <div className={s.cr_col}>
                вт
            </div>
            <div className={s.cr_col}>
                ср
            </div>
            <div className={s.cr_col}>
                чт
            </div>
            <div className={s.cr_col}>
                пт
            </div>
            <div className={s.cr_col}>
                сб
            </div>
            <div className={s.cr_col}>
                вс
            </div>
        </div>
    );
}
export default ProfileCalendarRightCols;