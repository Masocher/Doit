import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todos = () => {
    return (
        <div className="todos_container">
            <div className="todo_box">
                <div className="todo_left_section">
                    <div className="done_btn">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className="todo_title">Complete the Doit project</div>
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
        </div>
    );
};
