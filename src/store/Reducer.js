import { combineReducers } from "redux";

import {
    LOG_OUT,
    OPEN_MENU,
    CLOSE_MENU,
    OPEN_USER_BOX,
    CLOSE_USER_BOX,
    SELECT_BACKGROUND,
    UPDATE_BACKGROUND,
    CHANGE_THEME,
    OPEN_SETTINGS,
    CLOSE_SETTINGS,
} from "./Types";

import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";

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

const userBoxStatus = false;

const userBoxReducer = (state = userBoxStatus, action) => {
    switch (action.type) {
        case OPEN_USER_BOX:
            return (state = true);

        case CLOSE_USER_BOX:
            return (state = false);
        default:
            return state;
    }
};

let backgrounds = [
    { id: 0, src: img1, selected: false },
    { id: 1, src: img2, selected: true },
    { id: 2, src: img3, selected: false },
    { id: 3, src: img4, selected: false },
    { id: 4, src: img5, selected: false },
    { id: 5, src: img6, selected: false },
];

const backgroundsReducer = (state = backgrounds, action) => {
    switch (action.type) {
        case SELECT_BACKGROUND:
            state.map((backg) => (backg.selected = false));
            state[action.payload].selected = true;
            return state;

        default:
            return state;
    }
};

const backgroundNumber = 1;

const updateBackgroundReducer = (state = backgroundNumber, action) => {
    switch (action.type) {
        case UPDATE_BACKGROUND:
            return (state = action.payload);

        default:
            return state;
    }
};

const themeStatus = false;

const themeReducer = (state = themeStatus, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return (state = !state);

        default:
            return state;
    }
};

const listSettingsStatus = false;

const listSettingsReducer = (state = listSettingsStatus, action) => {
    switch (action.type) {
        case OPEN_SETTINGS:
            return (state = true);

        case CLOSE_SETTINGS:
            return (state = false);

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    authStatusReducer,
    blackBoxReducer,
    userBoxReducer,
    backgroundsReducer,
    updateBackgroundReducer,
    themeReducer,
    listSettingsReducer,
});
