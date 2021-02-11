import React from 'react';
import s from "../../../Styles/SCSS/ProfileMenu/profile_menu.module.css";

export const ProfileInput = ({input, meta: {touched, error, warning}, type, ...props}) => {
    let isError = () => {
        return error ? error : '';
    }
    return (
        <div className={s.profile_input_item}>
            <div className={s.profile_input_item_title}>{props.title}</div>
            <input {...input} type={type}/>
            <div className={s.error_wrapper}>
                <div className={s.error}>{isError()}</div>
            </div>
        </div>
    );
}