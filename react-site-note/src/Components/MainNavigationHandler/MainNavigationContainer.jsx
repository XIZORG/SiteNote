import React from 'react';
import MainNavigation from "./MainNavigation/MainNavigation";
import {connect} from "react-redux";
import {getCurrentPage} from "../../Redux/Selectors/main-selectors";
import {setCurrentPage} from "../../Redux/Reducers/main-reducer";

const MainNavigationContainer = (props) => {
    console.log(props.currentPage);
    return (
        <div>
            <MainNavigation currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} isAuth={props.isAuth}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    setCurrentPage
})(MainNavigationContainer);