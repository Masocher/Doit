import { combineReducers } from "redux";

import { LOG_OUT } from "./Types";

const authStatus = true;

const reducer_1 = (state = authStatus, action) => {
    switch (action.type) {
        case LOG_OUT:
            return (state = false);

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    reducer_1,
});
