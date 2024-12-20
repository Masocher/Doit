import { combineReducers } from "redux";
import axios from "axios";
import toast from "react-hot-toast";

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
} from "./Types";

import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";

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

const isAuthenticated = false;

const signUpReducer = (state = isAuthenticated, action) => {
    switch (action.type) {
        case SIGN_UP:
            axios
                .post("https://doit.liara.run/api/auth/users/register/", {
                    nickname: action.payload.nickname,
                    email: action.payload.email,
                    password: action.payload.password,
                    password2: action.payload.password2,
                })
                .then((response) => {
                    console.log("you are signing up ...");
                    toast.success("با موفقیت عضو شدید");
                    console.log("you signed up !");
                    setTimeout(() => {
                        window.location.replace("/log-in");
                    }, 1000);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        if (error.response.data.detail) {
                            toast.error(error.response.data.detail);
                        } else if (error.response.data.nickname) {
                            toast.error(
                                "Nickname : " + error.response.data.nickname
                            );
                        } else if (error.response.data.email) {
                            toast.error("Email : " + error.response.data.email);
                        } else if (error.response.data.password) {
                            error.response.data.password.map((err) =>
                                toast.error("Password : " + err)
                            );
                        } else if (error.response.data.password2) {
                            error.response.data.password2.map((err) =>
                                toast.error("Confirm password : " + err)
                            );
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log("error message : " + error.message);
                    }
                });
            return state;

        default:
            return state;
    }
};

const keepUser = (token, state) => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.setItem("token", token);
    state = true;
    localStorage.setItem("isAuthenticated", state);
};

const logInReducer = (state = isAuthenticated, action) => {
    switch (action.type) {
        case LOG_IN:
            axios.defaults.headers.common["Authorization"] = "";
            axios
                .post("https://doit.liara.run/api/auth/token/login/", {
                    email: action.payload.email,
                    password: action.payload.password,
                })
                .then((response) => {
                    keepUser(response.data.access, state);
                    console.log("you are logging in ...");
                    localStorage.setItem("refreshToken", response.data.refresh);
                    toast.success("با موفقیت وارد شدید");
                    console.log("you logged in !");
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 1000);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        if (error.response.data.detail) {
                            toast.error(error.response.data.detail);
                        } else if (error.response.data.email) {
                            toast.error("Email : " + error.response.data.email);
                        } else if (error.response.data.password) {
                            toast.error(
                                "Password : " + error.response.data.password
                            );
                        }
                    } else if (error.request) {
                        console.log("request error : " + error.request);
                    } else {
                        console.log("error message : " + error.message);
                    }
                });
            return state;

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    blackBoxReducer,
    userBoxReducer,
    backgroundsReducer,
    updateBackgroundReducer,
    themeReducer,
    listSettingsReducer,
    signUpReducer,
    logInReducer,
});
