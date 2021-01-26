import s from '../../Styles/SCSS/Menus/login_and_reg_menu.module.css';
import {useState} from "react";
import {Field} from "redux-form";
import React from 'react';
import N_logo from "./../../Styles/Images/N_logo.svg";
import {NavLink} from "react-router-dom";
import {RegisterField} from "../RegistrationMenu/RegisterField/RegisterField";
import {
    checkLatinAndNumbersAndCharacters,
    maxLength,
    minLength
} from "../../Utils/Validators/register_validators";

let maxLength30 = maxLength(30);
let minLength4 = minLength(4);
let minLength6 = minLength(6);

const LoginMenu = (props) => {

    let [emailSelect, setEmailSelect] = useState(false);
    let [passwordSelect, setPasswordSelect] = useState(false);

    let emailField = React.createRef();
    let passwordField = React.createRef();

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.login_menu_wrapper}>
                <div className={s.login_menu}>
                    <div className={s.title}>Добро пожаловать</div>
                    <div className={s.logo}>
                        <img src={N_logo} alt="logo"/>
                    </div>
                    <div className={s.input_login}
                         onClick={() => {
                             setEmailSelect(true)
                         }}
                         onBlur={() => {
                             if (!emailField.current.value) {
                                 setEmailSelect(false);
                             }
                         }}>
                        <span className={emailSelect ? s.active : ''}>
                           <Field name="login" component={RegisterField} type="text" ref={emailField}
                                  validate={[checkLatinAndNumbersAndCharacters, maxLength30, minLength4]}/>
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
                            <Field name="password" type="password" component={RegisterField} ref={passwordField}
                                   validate={[checkLatinAndNumbersAndCharacters, maxLength30, minLength6]}
                            />
                        </span>
                    </div>
                    <div className={s.button}>
                        <button>Войти</button>
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