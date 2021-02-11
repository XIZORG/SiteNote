import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setCurrentPage} from "../../Redux/Reducers/main-reducer";

const HeaderContainer = (props) => {
    return <Header {...props}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(
    mapStateToProps,
    {
        setCurrentPage
    }
)(HeaderContainer);
