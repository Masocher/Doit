import { LOG_OUT, OPEN_MENU, CLOSE_MENU } from "./Types";

export const logOut = () => {
    return { type: LOG_OUT };
};

export const openMenu = () => {
    return { type: OPEN_MENU };
};

export const closeMenu = () => {
    return { type: CLOSE_MENU };
};
