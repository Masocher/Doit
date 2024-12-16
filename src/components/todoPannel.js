import "../styles/components/todoPannel.css";
import { TodoMenu } from "./todoMenu";
import { Todos } from "./todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TodoPannel = () => {
    return (
        <div className="todo_pannel">
            <TodoMenu />

            <div className="todo_content">
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
};
