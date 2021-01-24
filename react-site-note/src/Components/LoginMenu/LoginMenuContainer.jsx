import React from 'react';
import {connect} from "react-redux";
import LoginMenu from "./LoginMenu";
import {compose} from "redux";
import {reduxForm} from "redux-form";
class LoginMenuContainer extends React.Component {
    render() {
        return <LoginMenu isAuth={this.props.isAuth}/>;
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {

    }),
    reduxForm({form: "login"})
)
(LoginMenuContainer)