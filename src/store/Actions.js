import {
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
    LOG_IN,
    LOG_OUT,
    ON_START,
    ADD_TASK,
    GET_TODOS,
    DELETE_TASK,
    GIVE_GET_STAR,
    ADD_LIST,
    ADD_LIST_TASK,
    COMPLETE_TASK,
    DELETE_LIST,
    SELECT_LIST,
    CHANGE_NAME_LIST,
    RENAME_LIST,
} from "./Types";

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

export const logIn = (email, password) => {
    return {
        type: LOG_IN,
        payload: {
            email,
            password,
        },
    };
};

export const logOut = () => {
    return { type: LOG_OUT };
};

export const onStart = () => {
    return { type: ON_START };
};

export const addTask = (title) => {
    return { type: ADD_TASK, name: title };
};

export const getTodos = () => {
    return { type: GET_TODOS };
};

export const completeTask = (taskId) => {
    return { type: COMPLETE_TASK, id: taskId };
};

export const deleteTask = (taskId) => {
    return { type: DELETE_TASK, id: taskId };
};

export const giveGetStar = (taskId) => {
    return { type: GIVE_GET_STAR, id: taskId };
};

export const addList = () => {
    return { type: ADD_LIST };
};

export const addListTask = (listId, taskName) => {
    return { type: ADD_LIST_TASK, id: listId, name: taskName };
};

export const deleteList = (listId) => {
    return { type: DELETE_LIST, id: listId };
};

export const selectList = (listTitle, listId) => {
    return { type: SELECT_LIST, title: listTitle, id: listId };
};

export const changeNameList = (title) => {
    return { type: CHANGE_NAME_LIST, name: title };
};

export const renameList = (listId, title) => {
    return { type: RENAME_LIST, id: listId, name: title };
};
