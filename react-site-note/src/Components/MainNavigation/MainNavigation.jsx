import React from 'react';
import s from './../../Styles/SCSS/main_navigation.module.css';

const MainNavigation = () => {
    return (
        <div className={s.main_navigation}>
            <div className={s.logo}>
                {/*<img src={s_logo} alt="Logo"/>*/}
                <div>
                    <span>note</span>
                    <span className={s.logo_letter_pink}>f</span>
                    <span className={s.logo_letter_green}>o</span>
                    <span className={s.logo_letter_purple}>r</span>
                    <span>.me</span>
                </div>

            </div>
            <nav className={s.nav}>
                <ul>
                    <li>Button</li>
                    <li>Button</li>
                    <li>Button</li>
                    <li>Button</li>
                </ul>
            </nav>
            <div className={s.buttons_handler}>
                <button>Click!</button>
                <button>Click!</button>
            </div>

        </div>
    );

}

export default MainNavigation;