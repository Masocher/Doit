import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, giveGetStar, completeTask } from "../store/Actions";
import { useDispatch } from "react-redux";

export const ListTodos = ({ updateListsTasks, listTasks, setTaskTodosStatus }) => {
    const dispatch = useDispatch();

    return (
        <div className="todos_container">
            {listTasks.tasks ? (
                listTasks.tasks.map((task) => (
                    <div className="todo_box" key={task.id}>
                        <div className="todo_left_section">
                            <div
                                className={`done_btn ${
                                    task.is_done ? "completed" : ""
                                }`}
                                onClick={() => {
                                    dispatch(completeTask(task.id));
                                    updateListsTasks();
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
                                    updateListsTasks();
                                }}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </div>

                            <div
                                className="delete_btn"
                                onClick={() => {
                                    dispatch(deleteTask(task.id));
                                    updateListsTasks();
                                }}
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="no_task">This list does not exist !</div>
            )}
        </div>
    );
};
