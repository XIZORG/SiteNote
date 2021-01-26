import React from 'react';
import {connect} from "react-redux";
import RegistrationMenu from "./RegistrationMenu";
import {reduxForm, stopSubmit} from "redux-form";
import {tryToRegister} from "../../Redux/Reducers/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const RegistrationMenuContainer = (props) => {
    if(props.isAuth) {
        props.history.push('/');
    }

    let onSubmit = (data) => {
        props.tryToRegister(data.login, data.password, data.email, data.phone);
    }

    return !props.isAuth ? <A {...props} onSubmit={onSubmit}/> : <></>;
}
let A = reduxForm({form: "RegisterForm"})(RegistrationMenu)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.userData.login
});

export default compose(
    connect(mapStateToProps, {
        tryToRegister
    }),
    withRouter
)(RegistrationMenuContainer);
