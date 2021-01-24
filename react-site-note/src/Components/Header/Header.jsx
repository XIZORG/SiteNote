import React from 'react';
import s from '../../Styles/SCSS/header.module.css';
import s_logo from './../../Styles/Images/logo.svg'
const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>

                <div className={s.middle}>

                </div>
                <nav className={s.nav}>
                    <ul>
                        <li>Button1</li>
                        <li>Button2</li>
                        <li>Button3</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;