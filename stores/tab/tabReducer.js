import * as tabActionType from './tabAction';


const initialStore = {
    selectedTab: ""
}


const tabReducer = (state = initialStore, action) => {
    switch (action.type) {
        case tabActionType.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default:
            return state
    }
}


export default tabReducer;