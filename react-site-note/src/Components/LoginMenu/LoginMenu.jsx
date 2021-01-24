import s from './../../Styles/SCSS/Menus/login_menu.css';
import {useState} from "react";
import {Field} from "redux-form";

const LoginMenu = (props) => {

    let [emailSelect, setEmailSelect] = useState(false);

    return (
        <div className={s.login_menu_wrapper}>
            <div className={s.login_menu}>
                <div className={s.title}>Welcome</div>
                <div className={s.logo}>
                    <img src="" alt="logo"/>
                </div>
                <Field name="login" component="input"/>
            </div>
        </div>

    );
}
export default LoginMenu;