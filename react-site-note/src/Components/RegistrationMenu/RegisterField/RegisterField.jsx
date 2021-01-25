import React from 'react';
import s from '../../../Styles/SCSS/Menus/login_and_reg_menu.module.css';

export const RegisterField = ({input, meta: {touched, error, warning}, type, ...props}) => {
    let isError = () => {
        return error ? error : '';
    }
    return (
        <>
            <input {...input} type={type}/>
            <div className={s.error_wrapper}>
                <div className={s.error}>{isError()}</div>
            </div>
        </>
    );
}