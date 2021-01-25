import React from 'react';
import s from '../../../Styles/SCSS/main_navigation.module.css';
import {NavLink} from "react-router-dom";

const MainNavigation = (props) => {

    let generateStyleForNav = (pageName) => {
        if (props.currentPage === pageName) return s.underboard_active;
        return '';
    }

    let goToPage = (pageName) => {
        if (pageName && props.currentPage !== pageName) {
            props.setCurrentPage(pageName);
        }
    }

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
                    <li
                        onClick={() => {
                            goToPage('main')
                        }} className={generateStyleForNav('main')}>
                        <NavLink to={'/'}>Menu</NavLink>
                    </li>
                    <li onClick={() => {
                        goToPage('')
                    }} className={generateStyleForNav('settings')}>Settings
                    </li>
                    <li onClick={() => {
                        goToPage('creators')
                    }} className={generateStyleForNav('creators')}>
                        <NavLink to={'/creators'}>Creators</NavLink>
                    </li>
                    <li onClick={() => {
                        goToPage('')
                    }} className={generateStyleForNav('about')}>About
                    </li>
                </ul>
            </nav>
            <div className={s.buttons_handler}>
                <NavLink to="/register">
                    <button>
                        Зарегистрируйся!
                    </button>
                </NavLink>
                <NavLink to="/login">
                    <button onClick={() => {goToPage("LoginMenu")}}>
                        Логин
                    </button>
                </NavLink>
            </div>

        </div>
    );

}

export default MainNavigation;