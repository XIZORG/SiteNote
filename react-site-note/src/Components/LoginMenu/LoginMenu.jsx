import s from '../../Styles/SCSS/Menus/login_menu.module.css';
import {useEffect, useState} from "react";
import {Field} from "redux-form";
import React from 'react';
import N_logo from "./../../Styles/Images/N_logo.svg";
import {NavLink} from "react-router-dom";

const LoginMenu = (props) => {

    let [emailSelect, setEmailSelect] = useState(false);
    let [passwordSelect, setPasswordSelect] = useState(false);

    let emailField = React.createRef();
    let passwordField = React.createRef();

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.login_menu_wrapper}>
                <div className={s.login_menu}>
                    <div className={s.title}>Welcome</div>
                    <div className={s.logo}>
                        <img src={N_logo} alt="logo"/>
                    </div>
                    <div className={s.input_login}
                         onClick={() => {
                             setEmailSelect(true)
                         }}
                         onBlur={(e) => {
                             if (!emailField.current.value) {
                                 setEmailSelect(false);
                             }
                         }}>
                        <span className={emailSelect ? s.active : ''}>
                           <Field name="login" component={'input'} type="text" ref={emailField}/>
                        </span>
                    </div>
                    <div className={s.input_password}
                         onClick={() => {
                             setPasswordSelect(true);
                         }}
                         onBlur={() => {
                             if (!passwordField.current.value) {
                                 setPasswordSelect(false);
                             }
                         }}>
                        <span className={passwordSelect ? s.active : ''}>
                            <Field name="password" type="password" component={'input'} ref={passwordField}
                            />
                        </span>
                    </div>
                    <div className={s.button}>
                        <button>Submit</button>
                    </div>
                    <div className={s.footer}>
                        <span>
                            Нет аккаунта? &nbsp;
                            <NavLink to="/register">Зарегистрируйся.</NavLink>
                        </span>
                    </div>
                </div>
            </div>
            {props.error}
        </form>
    );
}
export default LoginMenu;