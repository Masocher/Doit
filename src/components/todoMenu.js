import "../styles/components/todoMenu.css";
import img1 from "../images/1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faHome,
    faBars,
    faGear,
    faPlus,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/Actions";

export const TodoMenu = () => {
    const menuStatus = useSelector(
        (rootReducer) => rootReducer.blackBoxReducer
    );

    const dispatch = useDispatch();

    const tabletSize = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <div className={`todo_menu_container ${menuStatus ? "show" : ""}`}>
            <div>
                {tabletSize && (
                    <div
                        className="menu_close_icon"
                        onClick={() => dispatch(closeMenu())}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                )}
            </div>

            <div className="todo_logo">Doit</div>

            <div className="user_inf">
                <div className="user_profile_image">
                    <img src={img1} alt="user-profile-image" />
                </div>

                <div className="user_name_email">
                    <div className="user_name_box">Masocher</div>
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

                        <div>List 2</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 3</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list show">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 4</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 4</div>

                        <div className="list_edit_btn">
                            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className="todo_list">
                        <span>
                            <FontAwesomeIcon icon={faBars} />
                        </span>

                        <div>List 4</div>

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
