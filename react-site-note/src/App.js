import React from 'react';
import Header from "./Components/Header/Header";
import './Styles/CSS/minify.css';
import './Styles/CSS/fonts.css';
import './Styles/CSS/base.css'
import './Styles/SCSS/app.css'
import {getData} from "./DAL/DAL_API";
import {Route} from "react-router-dom";
import MainPage from "./Components/MainNavigationHandler/MainNavigationContainer";
import CreatorsPage from "./Components/ContentPages/CreatorsPage/CreatorsPage";
import LoginMenuContainer from "./Components/LoginMenu/LoginMenuContainer";
import RegistrationMenuContainer from "./Components/RegistrationMenu/RegistrationMenuContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Route path="/" render={() => <MainPage/>}/>
                <Route path="/main" render={() => <MainPage/>}/>
                <Route path="/creators" render={() => <CreatorsPage/>}/>
                <Route path="/login" render={() => <LoginMenuContainer/>}/>
                <Route path="/register" render={() => <RegistrationMenuContainer/>}/>
            </div>
        </div>
    );
}
export default App;
