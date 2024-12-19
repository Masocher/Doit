import "../styles/components/todoPannel.css";
import { TodoMenu } from "./todoMenu";
import { Todos } from "./todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { BlackBox } from "./blackBox";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../store/Actions";
import { User } from "./user";
import { ListSettings } from "./listSettings";
import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";

export const TodoPannel = ({ status }) => {
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

    if (status === "list") {
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
                    <div className="background_color_box"></div>

                    <div className="tasks_title">
                        <div>
                            <span>Tasks</span>

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

                    <Todos />

                    <form action={"#"} className="add_todo">
                        <input type="text" placeholder="Add a new task" />

                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </form>
                </div>
            </div>
        );
    } else if (status === "todos") {
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

                    <div className="tasks_title">
                        <div>
                            <span>Tasks</span>

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

                    <Todos />

                    <form action={"#"} className="add_todo">
                        <input type="text" placeholder="Add a new task" />

                        <span>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </form>
                </div>
            </div>
        );
    }
};
