import React from 'react';
import App from "./App";
import {connect} from "react-redux";
import {getBasePages} from './Redux/Reducers/main-reducer';

const AppContainer = (props) => {
    return <App {...props} getBasePages={getBasePages}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        currentPage: state.mainPage.currentPage
    };
}

export default connect(
    mapStateToProps
)(AppContainer);