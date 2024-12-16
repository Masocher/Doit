import { combineReducers } from "redux";

const authStatus = false;

const reducer_1 = (state = authStatus) => {
    return state;
};

export const rootReducer = combineReducers({
    reducer_1,
});
