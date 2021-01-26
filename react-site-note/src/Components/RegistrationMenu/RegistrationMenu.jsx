import s from '../../Styles/SCSS/Menus/login_and_reg_menu.module.css';
import {useState} from "react";
import {Field} from "redux-form";
import React from 'react';
import N_logo from "./../../Styles/Images/N_logo.svg";
import {NavLink} from "react-router-dom";
import {RegisterField} from "./RegisterField/RegisterField";
import {
    maxLength,
    checkEmail,
    checkLatinAndNumbersAndCharacters,
    minLength
} from "../../Utils/Validators/register_validators";

let maxLength30 = maxLength(30);
let maxLength18 = maxLength(18);
let minLength4 = minLength(4);
let minLength6 = minLength(6);


const RegistrationMenu = (props) => {

    let [loginSelect, setLoginSelect] = useState(false);
    let [passwordSelect, setPasswordSelect] = useState(false);
    let [emailSelect, setEmailSelect] = useState(false);
    let [phoneSelect, setPhoneSelect] = useState(false);

    let loginField = React.createRef();
    let passwordField = React.createRef();
    let emailField = React.createRef();
    let phoneField = React.createRef();

    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.login_menu_wrapper + " " + s.register}>
                <div className={s.login_menu}>
                    <div className={s.title}>Регистрация</div>
                    <div className={s.logo}>
                        <img src={N_logo} alt="logo"/>
                    </div>
                    <div className={s.input_login + " " + s.input_field}
                         onClick={() => {
                             setLoginSelect(true)
                         }}
                         onBlur={(e) => {
                             if (!loginField.current.value) {
                                 setLoginSelect(false);
                             }
                         }}>
                        <span className={loginSelect ? s.active : ''}>
                           <Field name="login" component={RegisterField}
                                  validate={[maxLength30, checkLatinAndNumbersAndCharacters, minLength4]} type="text"
                                  ref={loginField}/>
                        </span>
                    </div>
                    <div className={s.input_password + " " + s.input_field}
                         onClick={() => {
                             setPasswordSelect(true);
                         }}
                         onBlur={() => {
                             if (!passwordField.current.value) {
                                 setPasswordSelect(false);
                             }
                         }}>
                        <span className={passwordSelect ? s.active : ''}>
                            <Field name="password" type="password" component={RegisterField}
                                   validate={[maxLength30, checkLatinAndNumbersAndCharacters, minLength6]}
                                   ref={passwordField}
                            />
                        </span>
                    </div>

                    <div className={s.input_email + " " + s.input_field}
                         onClick={() => {
                             setEmailSelect(true);
                         }}
                         onBlur={() => {
                             if (!emailField.current.value) {
                                 setEmailSelect(false);
                             }
                         }}>
                        <span className={emailSelect ? s.active : ''}>
                            <Field name="email" type="text" component={RegisterField} validate={[checkEmail]}
                                   ref={emailField}
                            />
                        </span>
                    </div>

                    <div className={s.input_phone + " " + s.input_field}
                         onClick={() => {
                             setPhoneSelect(true);
                         }}
                         onBlur={() => {
                             if (!phoneField.current.value) {
                                 setPhoneSelect(false);
                             }
                         }}>
                        <span className={phoneSelect ? s.active : ''}>
                            <Field name="phone" type="text" component={RegisterField} validate={[maxLength18]}
                                   ref={phoneField}/>
                        </span>
                    </div>

                    <div className={s.button}>
                        <button>Зарегистрироваться</button>
                    </div>
                    <div className={s.footer}>
                        <span>
                            Уже есть аккаунт? &nbsp;
                            <NavLink to="/login">Вход.</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default RegistrationMenu;