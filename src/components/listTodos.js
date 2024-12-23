import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { deleteTask, giveGetStar, completeTask } from "../store/Actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const ListTodos = () => {
    let { listUrlSlug } = useParams();

    const dispatch = useDispatch();

    const [listTasks, setListTasks] = useState([]);

    const listTasksReducer = async () => {
        try {
            let response = await axios.get(
                `https://doit.liara.run/api/lists/${listUrlSlug}/`
            );
            setListTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            listTasksReducer();
        }, 1000);
    });

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
                                onClick={() => dispatch(completeTask(task.id))}
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
                                onClick={() => dispatch(giveGetStar(task.id))}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </div>

                            <div
                                className="delete_btn"
                                onClick={() => dispatch(deleteTask(task.id))}
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
