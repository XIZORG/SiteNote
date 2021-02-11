import React from 'react';
import s from '../../Styles/SCSS/header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {

    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>

                <NavLink to="/" className={s.logo_link} onClick={() => props.setCurrentPage('main')}>
                    <div className={s.letters_wrapper}>
                        <span>N</span>
                        <span>F</span>
                        <span>M</span>
                    </div>
                </NavLink>

                <div className={s.middle}>

                </div>
                <nav className={s.nav}>
                    <ul>
                        <li>Button1</li>
                        <li>Button2</li>
                        <li onClick={() => props.setCurrentPage('profile')}>
                            <NavLink to="/profile" >Profile</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;