import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { giveGetStar, completeTask } from "../store/Actions";

export const ImportantTodos = () => {
    const dispatch = useDispatch();

    const [homeTasks, setHomeTasks] = useState([]);

    const [tasksStatus, setTasksStatus] = useState(false);

    const homeTasksReducer = async () => {
        try {
            let response = await axios.get(
                "https://doit.liara.run/api/tasks/importants/"
            );
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
                        </div>
                    </div>
                ))
            ) : (
                <div className="no_task">Waiting for tasks !</div>
            )}
        </div>
    );
};
