import React from 'react';
import Header from "./Components/Header/Header";
import './Styles/CSS/minify.css';
import './Styles/SCSS/app.css'
import MainNavigation from "./Components/MainNavigation/MainNavigation";
import {getData} from "./DAL/DAL_API";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <MainNavigation/>
            </div>
        </div>
    );
}
getData();
export default App;
