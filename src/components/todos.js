import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/Actions";
import { useState } from "react";

export const Todos = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState(false);

    setTimeout(() => {
        dispatch(getTodos());
        setStatus(true);
    }, 1000);

    const homeTasks = useSelector(
        (rootReducer) => rootReducer.homeTasksReducer
    );

    return (
        <div className="todos_container">
            {status ? (
                homeTasks ? (
                    homeTasks.map((task) => (
                        <div className="todo_box">
                            <div className="todo_left_section">
                                <div className="done_btn">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>

                                <div className="todo_title">{task.name}</div>
                            </div>

                            <div className="todo_right_section">
                                <div className="star_btn">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>

                                <div className="delete_btn">
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no_task">Add a new task !</div>
                )
            ) : (
                <div>Lading ...</div>
            )}
        </div>
    );
};
