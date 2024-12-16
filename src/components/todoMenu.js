import "../styles/components/todoMenu.css";
import img1 from "../images/1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faHome,
    faBars,
    faGear,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const TodoMenu = () => {
    return (
        <div className="todo_menu_container">
            <div className="todo_logo">Doit</div>

            <div className="user_inf">
                <div className="user_profile_image">
                    <img src={img1} alt="user-profile-image" />
                </div>

                <div className="user_name_email">
                    <div>Masocher</div>
                    <div className="user_email">Masocherr@gmail.com</div>
                </div>
            </div>

            <div className="menu_options">
                <div className="important_todos">
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                    </span>

                    <div>Important</div>
                </div>

                <div className="home_todos show">
                    <span>
                        <FontAwesomeIcon icon={faHome} />
                    </span>

                    <div>Tasks</div>
                </div>

                <div className="todo_lists">
                    <div>Lists</div>
                </div>

                <div className="lists_container">
                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 1</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 1</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 1</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list show">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 1</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>

                <div className="create_list_btn">
                    <span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>

                    <div>New list</div>
                </div>
            </div>
        </div>
    );
};
