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
    SIGN_UP,
} from "./Types";

export const logOut = () => {
    return { type: LOG_OUT };
};

export const openMenu = () => {
    return { type: OPEN_MENU };
};

export const closeMenu = () => {
    return { type: CLOSE_MENU };
};

export const openUserBox = () => {
    return { type: OPEN_USER_BOX };
};

export const closeUserBox = () => {
    return { type: CLOSE_USER_BOX };
};

export const selectBackground = (id) => {
    return { type: SELECT_BACKGROUND, payload: id };
};

export const updateBackground = (num) => {
    return { type: UPDATE_BACKGROUND, payload: num };
};

export const changeTheme = () => {
    return { type: CHANGE_THEME };
};

export const openSettings = () => {
    return { type: OPEN_SETTINGS };
};

export const closeSettings = () => {
    return { type: CLOSE_SETTINGS };
};

export const signUp = (nickname, email, password, password2) => {
    return {
        type: SIGN_UP,
        payload: {
            nickname,
            email,
            password,
            password2,
        },
    };
};
