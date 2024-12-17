import { combineReducers } from "redux";

import { LOG_OUT, OPEN_MENU, CLOSE_MENU } from "./Types";

const authStatus = true;

const authStatusReducer = (state = authStatus, action) => {
    switch (action.type) {
        case LOG_OUT:
            return (state = false);

        default:
            return state;
    }
};

const blackBoxStatus = false;

const blackBoxReducer = (state = blackBoxStatus, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return (state = true);

        case CLOSE_MENU:
            return (state = false);

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    authStatusReducer,
    blackBoxReducer,
});
