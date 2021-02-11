const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    currentPage: 'main'
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        default: return state;
    }
}

export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, page: page}
}

export default mainReducer;
//-----------------------------
export const getBasePages = () => {
    return ['main', 'creators'];
}