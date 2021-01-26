import React from 'react';
import {connect} from "react-redux";
import RegistrationMenu from "./RegistrationMenu";
import {reduxForm, stopSubmit} from "redux-form";
import {tryToRegister} from "../../Redux/Reducers/auth-reducer";

const RegistrationMenuContainer = (props) => {

    let onSubmit = (data) => {
        props.tryToRegister(data.login, data.password, data.email, data.phone);
    }

    let A = reduxForm({form: "RegisterForm"})(RegistrationMenu);
    return <A {...props} onSubmit={onSubmit}/>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    tryToRegister
})(RegistrationMenuContainer)