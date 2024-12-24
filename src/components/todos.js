import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { completeTask, deleteTask, giveGetStar } from "../store/Actions";
import { useDispatch } from "react-redux";

export const Todos = ({ updateTasks, homeTasks }) => {
    const dispatch = useDispatch();

    return (
        <div className="todos_container">
            {homeTasks.length > 0 ? (
                homeTasks.map((task) => (
                    <div className="todo_box" key={task.id}>
                        <div className="todo_left_section">
                            <div
                                className={`done_btn ${
                                    task.is_done ? "completed" : ""
                                }`}
                                onClick={() => {
                                    dispatch(completeTask(task.id));
                                    updateTasks();
                                }}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </div>

                            <div
                                className={`todo_title ${
                                    task.is_done ? "completed" : ""
                                }`}
                            >
                                {task.name}
                            </div>
                        </div>

                        <div className="todo_right_section">
                            <div
                                className={`star_btn ${
                                    task.is_important ? "stared_btn" : ""
                                }`}
                                onClick={() => {
                                    dispatch(giveGetStar(task.id));
                                    updateTasks();
                                }}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </div>

                            <div
                                className="delete_btn"
                                onClick={() => {
                                    dispatch(deleteTask(task.id));
                                    updateTasks();
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no_task">Waiting for tasks !</div>
            )}
        </div>
    );
};
