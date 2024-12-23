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
import { useState } from "react";
import toast from "react-hot-toast";
import { ListTodos } from "./listTodos";
import { ImportantTodos } from "./importantTodos";
import { useParams } from "react-router-dom";

export const TodoPannel = ({ status }) => {
    let { listUrlSlug } = useParams();
    
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

            <TodoMenu />

            <User />

            <ListSettings />

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

                        <div className="just_date">01 - 01 - 2025</div>
                    </div>

                    <div className="tasks_title_right_content">
                        <div className="time">
                            <div className="time_wrapper">
                                <div className="hours">08</div>
                                <div className="minutes">00</div>
                            </div>

                            <div className="am_pm">AM</div>
                        </div>
                    </div>
                </div>

                {status === "todos" ? (
                    <Todos />
                ) : status === "list" ? (
                    <ListTodos />
                ) : status === "important_todos" ? (
                    <ImportantTodos />
                ) : (
                    <Todos />
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

                        <span onClick={() => addTaskFunction(todoTitle)}>
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

                        <span onClick={() => addListTaskFunction(todoTitle)}>
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
