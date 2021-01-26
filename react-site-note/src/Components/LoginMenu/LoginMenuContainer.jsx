import React from 'react';
import {connect} from "react-redux";
import LoginMenu from "./LoginMenu";
import {compose} from "redux";
import {reduxForm, stopSubmit} from "redux-form";
import {sendAuthToServer} from "../../DAL/auth_api";
import {tryToLogin} from "../../Redux/Reducers/auth-reducer";
import {withRouter} from "react-router-dom";

const LoginMenuContainer = (props) => {

    if(props.isAuth) {
        props.history.push('/');
    }

    let onSubmit = (data) => {
        props.tryToLogin(data.login, data.password);
    }

    let A = reduxForm({form: "LoginForm"})(LoginMenu);
    return <A {...props} onSubmit={onSubmit}/>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {
        tryToLogin
    }),
    withRouter
)
(LoginMenuContainer)