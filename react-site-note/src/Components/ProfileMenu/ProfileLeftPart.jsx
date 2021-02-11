import s from "../../Styles/SCSS/ProfileMenu/profile_menu.module.css";
import avatar from "../../Styles/Images/matthew.png";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";

const ProfileLeftPart = (props) => {

    let [isBirthdayHintActive, setBirthdayHint] = useState(false);

    let showBirthdayHint = () => {
        setBirthdayHint(!isBirthdayHintActive);
    }

    return (
        <div className={s.left_part + " " + s.border_blue}>
            <div className={s.avatar}>
                <img src={avatar} alt="Avatar"/>
                <div className={s.profile_name}>
                    {props.userName}
                </div>
            </div>

            <div className={s.birthday_data} onClick={() => showBirthdayHint()}>
                <div className={s.birthday_data_day}>
                    {props.birthdayDay || "??"}
                </div>
                <div className={s.birthday_data_month}>
                    {props.birthdayMonth || "??"}
                </div>
                <div className={s.birthday_data_year}>
                    {props.birthdayYear || "??"}
                </div>
            </div>
            <div className={isBirthdayHintActive ? s.birthday_hint  : (s.birthday_hint  + " " + s.birthday_hint_hidden)}>
                Вы можете изменить дату рождения во вкладке Редактировать Профиль!
            </div>
            <div className={s.profile_nav}>
                <div className={s.profile_nav_item}>
                    <NavLink to="/profile">
                        Профиль
                    </NavLink>
                </div>
                <div className={s.profile_nav_item}>
                    <NavLink to="/profile/edit">
                        Редактировать профиль
                    </NavLink>
                </div>
                <div className={s.profile_nav_item}>
                    <NavLink to="/profile/calendar">
                        Календарь
                    </NavLink>
                </div>
                <div className={s.profile_nav_item}>
                    <NavLink to="/profile/new_event">
                        Новое Событие
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default ProfileLeftPart;