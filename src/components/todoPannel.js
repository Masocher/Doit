import "../styles/components/todoPannel.css";
import { TodoMenu } from "./todoMenu";
import { Todos } from "./todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { BlackBox } from "./blackBox";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { addTask, openMenu, addListTask } from "../store/Actions";
import { User } from "./user";
import { ListSettings } from "./listSettings";
import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { ListTodos } from "./listTodos";
import { ImportantTodos } from "./importantTodos";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

export const TodoPannel = ({ status }) => {
    let { listUrlSlug } = useParams();
    let location = useLocation();

    const dispatch = useDispatch();

    const menuStatus = useSelector(
        (rootReducer) => rootReducer.blackBoxReducer
    );

    const tabletSize = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const backgroundNumber = useSelector(
        (rootReducer) => rootReducer.updateBackgroundReducer
    );

    const [todoTitle, setTodoTitle] = useState("");

    const addTaskFunction = (title) => {
        if (title === "") {
            toast.error("Please write something.");
        } else {
            console.log("added todo");
            dispatch(addTask(title));
            setTodoTitle("");
        }
    };

    const addListTaskFunction = (title) => {
        if (title === "") {
            toast.error("Please write something.");
        } else {
            console.log("added todo");
            dispatch(addListTask(listUrlSlug, title));
            setTodoTitle("");
        }
    };

    const [tasksStatus, setTasksStatus] = useState(false);

    const [homeTasks, setHomeTasks] = useState([]);

    const homeTasksReducer = async () => {
        try {
            let response = await axios.get("https://doit.liara.run/api/tasks/");
            let data = await response.data;
            setHomeTasks(data);
            setTasksStatus(true);
        } catch (error) {
            console.log(error);
        }
    };

    const updateTasks = () => {
        setTimeout(async () => {
            await homeTasksReducer();
        }, 500);
    };

    if (tasksStatus === false) {
        setTimeout(async () => {
            await homeTasksReducer();
        }, 500);
    }

    useEffect(() => {
        homeTasksReducer();
    }, []);

    const [listsTasksStatus, setListsTasksStatus] = useState(false);

    const [listTasks, setListTasks] = useState([]);

    const listTasksReducer = async () => {
        if (location.pathname.includes("/lists")) {
            try {
                let response = await axios.get(
                    `https://doit.liara.run/api/lists/${listUrlSlug}/`
                );
                let data = await response.data;
                setListTasks(data);
                setListsTasksStatus(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            return;
        }
    };

    const updateListsTasks = () => {
        setTimeout(async () => {
            await listTasksReducer();
        }, 500);
    };

    if (listsTasksStatus === false) {
        setTimeout(async () => {
            await listTasksReducer();
        }, 500);
    }

    useEffect(() => {
        listTasksReducer();
    }, []);

    const [listsStatus, setListsStatus] = useState(false);

    const [lists, setLists] = useState([]);

    const listsReducer = async () => {
        try {
            let response = await axios.get("https://doit.liara.run/api/lists/");
            let data = await response.data;
            setLists(data);
            setListsStatus(true);
        } catch (error) {
            console.log(error);
        }
    };

    const updateLists = () => {
        setTimeout(async () => {
            await listsReducer();
        }, 500);
    };

    if (listsStatus === false) {
        setTimeout(async () => {
            await listsReducer();
        }, 500);
    }

    useEffect(() => {
        listsReducer();
    }, []);

    const getDate = () => {
        let today = new Date();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = today.getDate();
        return `${month} - ${date} - ${year}`;
    };

    const getTime = () => {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        return { hour: hours, min: minutes };
    };

    const [date, setDate] = useState(getDate());
    const [time, setTime] = useState(getTime());

    const updateDate = () => {
        setTimeout(() => {
            getDate();
            getTime();
            setDate(getDate());
            setTime(getTime());
        }, 100);
    };

    useEffect(() => {
        updateDate();
    });

    return (
        <div className="todo_pannel">
            <div className="menu_open_icon_wrapper">
                {tabletSize && (
                    <div
                        className="menu_open_icon"
                        onClick={() => dispatch(openMenu())}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                )}
            </div>

            <BlackBox status={menuStatus} />

            <TodoMenu
                lists={lists}
                updateLists={updateLists}
                updateListsTasks={updateListsTasks}
            />

            <User />

            <ListSettings
                updateLists={updateLists}
                updateListsTasks={updateListsTasks}
            />

            <div className="todo_content">
                {status === "todos" ? (
                    <img
                        className="background_image_box"
                        src={
                            backgroundNumber === 0
                                ? img1
                                : backgroundNumber === 1
                                ? img2
                                : backgroundNumber === 2
                                ? img3
                                : backgroundNumber === 3
                                ? img4
                                : backgroundNumber === 4
                                ? img5
                                : img6
                        }
                        alt="background-img"
                    />
                ) : status === "list" ? (
                    <div className="background_color_box"></div>
                ) : status === "important_todos" ? (
                    <div className="background_color_box background_color_box_2"></div>
                ) : (
                    <div className="background_color_box"></div>
                )}

                <div
                    className={`tasks_title ${
                        status === "important_todos" ? "show" : ""
                    }`}
                >
                    <div>
                        <span>
                            {status === "todos"
                                ? "Tasks"
                                : status === "list"
                                ? "List Tasks"
                                : status === "important_todos"
                                ? "Important Tasks"
                                : "Tasks"}
                        </span>

                        <div className="just_date">{date}</div>
                    </div>

                    <div className="tasks_title_right_content">
                        <div className="time">
                            <div className="time_wrapper">
                                <div className="hours">
                                    {time.hour < 10 ? "0" : ""}
                                    {time.hour}
                                </div>
                                <span>:</span>
                                <div className="minutes">
                                    {time.min < 10 ? "0" : ""}
                                    {time.min}
                                </div>
                            </div>

                            <div className="am_pm">AM</div>
                        </div>
                    </div>
                </div>

                {status === "todos" ? (
                    <Todos updateTasks={updateTasks} homeTasks={homeTasks} />
                ) : status === "list" ? (
                    <ListTodos
                        updateListsTasks={updateListsTasks}
                        listTasks={listTasks}
                    />
                ) : status === "important_todos" ? (
                    <ImportantTodos updateTasks={updateTasks} />
                ) : (
                    <Todos updateTasks={updateTasks} homeTasks={homeTasks} />
                )}

                {status === "todos" ? (
                    <form
                        className="add_todo"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            value={todoTitle}
                            placeholder="Add a new task"
                            onChange={(e) => setTodoTitle(e.target.value)}
                        />

                        <span
                            onClick={() => {
                                addTaskFunction(todoTitle);
                                updateTasks();
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </form>
                ) : status === "list" ? (
                    <form
                        className="add_todo"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            value={todoTitle}
                            placeholder="Add a new task"
                            onChange={(e) => setTodoTitle(e.target.value)}
                        />

                        <span
                            onClick={() => {
                                addListTaskFunction(todoTitle);
                                updateListsTasks();
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </form>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
