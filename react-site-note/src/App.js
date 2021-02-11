import React from 'react';
import './Styles/CSS/minify.css';
import './Styles/CSS/fonts.css';
import './Styles/CSS/base.css'
import './Styles/SCSS/app.css'
import {Route} from "react-router-dom";
import MainNavigationContainer from "./Components/MainNavigationHandler/MainNavigationContainer";
import CreatorsPage from "./Components/ContentPages/CreatorsPage/CreatorsPage";
import LoginMenuContainer from "./Components/LoginMenu/LoginMenuContainer";
import RegistrationMenuContainer from "./Components/RegistrationMenu/RegistrationMenuContainer";
import ProfileMenuContainer from "./Components/ProfileMenu/ProfileMenuContainer";
import HeaderContainer1 from "./Components/Header/HeaderContainer1";

function App(props) {

    return (
        <div className="App">
            <HeaderContainer1/>
            <div className="container">
                {/*{props.getBasePages.some(i => i === props.currentPage)}*/}
                <Route exact path="/" render={() => <MainNavigationContainer/>}/>

                <Route path="/creators" render={() => {
                    return (
                        <>
                            <MainNavigationContainer/>
                            <CreatorsPage/>
                        </>
                    )
                }}/>
                <Route path="/login" render={() => {
                    return (
                        <>
                            <MainNavigationContainer/>
                            <LoginMenuContainer/>
                        </>
                    )
                }}/>
                <Route path="/register" render={() => {
                    return (
                        <>
                            <MainNavigationContainer/>
                            <RegistrationMenuContainer/>
                        </>
                    )
                }}/>
                {props.isAuth ? <Route path="/profile" render={() => <ProfileMenuContainer/>}/> : ""}
            </div>
        </div>
    );
}

export default App;
