import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { giveGetStar } from "../store/Actions";

export const ImportantTodos = () => {
    const dispatch = useDispatch();

    const [homeTasks, setHomeTasks] = useState([]);

    const homeTasksReducer = async () => {
        try {
            let response = await axios.get(
                "https://doit.liara.run/api/tasks/importants/"
            );
            setHomeTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            homeTasksReducer();
        }, 1000);
    });

    return (
        <div className="todos_container">
            {homeTasks.length > 0 ? (
                homeTasks.map((task) => (
                    <div className="todo_box" key={task.id}>
                        <div className="todo_left_section">
                            <div className="done_btn">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>

                            <div className="todo_title">{task.name}</div>
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
                        </div>
                    </div>
                ))
            ) : (
                <div className="no_task">Waiting for tasks !</div>
            )}
        </div>
    );
};
