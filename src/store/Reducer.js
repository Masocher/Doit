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
    LOG_OUT,
    ON_START,
    ADD_TASK,
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
                    toast.success("Successfully signed up !");
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
                    toast.success("Successfully logged in !");
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

const logOutReducer = (state = isAuthenticated, action) => {
    switch (action.type) {
        case LOG_OUT:
            const refreshToken = localStorage.getItem("refreshToken");
            axios
                .post("https://otanix-api.liara.run/api/auth/token/logout/", {
                    refresh: refreshToken,
                })
                .then((response) => {
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("isAuthenticated");
                    axios.defaults.headers.common["Authorization"] = "";
                    toast.success("Successfully logged out !");
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 1000);
                })
                .catch((error) => {
                    console.log(
                        "error while removig refresh token : " + error.response
                    );
                });
            return state;

        default:
            return state;
    }
};

const logOutFunction = (state = isAuthenticated) => {
    const refreshToken = localStorage.getItem("refreshToken");
    axios
        .post("https://doit.liara.run/api/auth/token/logout/", {
            refresh: refreshToken,
        })
        .then((response) => {
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("token");
            localStorage.setItem("isAuthenticated", false);
            axios.defaults.headers.common["Authorization"] = "";
            toast.error(
                "You have been logged out of your account due to a problem !"
            );
            setTimeout(() => {
                window.location.replace("/");
            }, 1000);
        })
        .catch((error) => {
            console.log(
                "error while removig refresh token : " + error.response.data
            );
        });
    return state;
};

const onStart = (state = isAuthenticated, action) => {
    switch (action.type) {
        case ON_START:
            if (
                localStorage.getItem("isAuthenticated") &&
                localStorage.getItem("token")
            ) {
                const accessToken = localStorage.getItem("token");
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + accessToken;
                axios
                    .get("https://doit.liara.run/api/auth/users/me/")
                    .then((response) => {
                        keepUser(accessToken, state);
                        localStorage.setItem("user", response.data.username);
                        console.log("access token is valid : " + accessToken);
                    })
                    .catch((error) => {
                        console.log("error response : " + error);
                        if (error.response.data.code === "token_not_valid") {
                            const refreshToken = localStorage.getItem(
                                "refreshToken"
                            );
                            axios
                                .post(
                                    "https://doit.liara.run/api/auth/token/refresh/",
                                    {
                                        refresh: refreshToken,
                                    }
                                )
                                .then((response) => {
                                    keepUser(response.data.access, state);
                                    console.log(
                                        "access token was not valid so , access token is refreshed ! " +
                                            response.data.access
                                    );
                                })
                                .catch((error) => {
                                    localStorage.setItem(
                                        "isAuthenticated",
                                        false
                                    );
                                });
                        } else {
                            logOutFunction();
                            console.log(
                                "sending refresh token error : " + error
                            );
                        }
                    });
            } else {
                localStorage.removeItem("isAuthenticated");
            }
            return state;

        default:
            return state;
    }
};

const tasksState = [];

const addTaskReducer = (state = tasksState, action) => {
    switch (action.type) {
        case ADD_TASK:
            axios
                .post("https://doit.liara.run/api/tasks/", {
                    name: action.name,
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
            return state;

        default:
            return state;
    }
};

const completeTaskReducer = (state = tasksState, action) => {
    switch (action.type) {
        case COMPLETE_TASK:
            axios
                .get(`https://doit.liara.run/api/tasks/${action.id}/set_done/`)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

            return state;

        default:
            return state;
    }
};

const deleteTaskReducer = (state = tasksState, action) => {
    switch (action.type) {
        case DELETE_TASK:
            axios
                .delete(`https://doit.liara.run/api/tasks/${action.id}/`)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
            return state;

        default:
            return state;
    }
};

const giveGetStarReducer = (state = tasksState, action) => {
    switch (action.type) {
        case GIVE_GET_STAR:
            axios
                .get(
                    `https://doit.liara.run/api/tasks/${action.id}/add_important/`
                )
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
            return state;

        default:
            return state;
    }
};

const addListReducer = (state = tasksState, action) => {
    switch (action.type) {
        case ADD_LIST:
            axios
                .get("https://doit.liara.run/api/lists/add_list/")
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));
            return state;

        default:
            return state;
    }
};

const addTaskListReducer = (state = tasksState, action) => {
    switch (action.type) {
        case ADD_LIST_TASK:
            axios
                .post(
                    `https://doit.liara.run/api/lists/${action.id}/add_task/`,
                    {
                        name: action.name,
                    }
                )
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
            return state;

        default:
            return state;
    }
};

const deleteListReducer = (state = tasksState, action) => {
    switch (action.type) {
        case DELETE_LIST:
            axios
                .delete(`https://doit.liara.run/api/lists/${action.id}/`)
                .then((response) => console.log(response))
                .catch((error) => console.log(error));

            return state;

        default:
            return state;
    }
};

const selectedListId = null;

const selectListReducer = (state = selectedListId, action) => {
    switch (action.type) {
        case SELECT_LIST:
            state = action.id;
            console.log(state);

            return state;

        default:
            return state;
    }
};

const selectedListName = null;

const changeNameListReducer = (state = selectedListName, action) => {
    switch (action.type) {
        case CHANGE_NAME_LIST:
            state = action.name;
            console.log(state);

            return state;

        default:
            return state;
    }
};

const submitListName = (state = selectedListName, action) => {
    switch (action.type) {
        case RENAME_LIST:
            axios
                .patch(`https://doit.liara.run/api/lists/${action.id}/`, {
                    name: action.name,
                })
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
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
    logOutReducer,
    onStart,
    addTaskReducer,
    deleteTaskReducer,
    giveGetStarReducer,
    addListReducer,
    addTaskListReducer,
    completeTaskReducer,
    deleteListReducer,
    selectListReducer,
    changeNameListReducer,
    submitListName,
});
