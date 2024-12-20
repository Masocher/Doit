import "../styles/components/todoMenu.css";
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
import { closeMenu, openSettings, openUserBox } from "../store/Actions";
import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";
import { Link } from "react-router-dom";

export const TodoMenu = () => {
    const menuStatus = useSelector(
        (rootReducer) => rootReducer.blackBoxReducer
    );

    const backgroundNumber = useSelector(
        (rootReducer) => rootReducer.updateBackgroundReducer
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
                <div
                    className="user_box_icon"
                    onClick={() => dispatch(openUserBox())}
                >
                    <FontAwesomeIcon icon={faGear} />
                </div>

                <div className="user_profile_image">
                    <img
                        src={
                            backgroundNumber === 0
                                ? img1
                                : backgroundNumber === 1
                                ? img2
                                : backgroundNumber === 2
                                ? img3
                                : backgroundNumber === 3
                                ? img4
                                : backgroundNumber === 4
                                ? img5
                                : img6
                        }
                        alt="user-profile-image"
                    />
                </div>

                <div className="user_name_email">
                    <div className="user_name_box">Masocher</div>
                    <div className="user_email">Masocherr@gmail.com</div>
                </div>
            </div>

            <div className="menu_options">
                <Link to="important" style={{ textDecoration: "none" }}>
                    <div className="important_todos">
                        <span>
                            <FontAwesomeIcon icon={faStar} />
                        </span>

                        <div>Important</div>
                    </div>
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="home_todos show">
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                        </span>

                        <div>Tasks</div>
                    </div>
                </Link>

                <div className="todo_lists">
                    <div>Lists</div>
                </div>

                <div className="lists_container">
                    <Link to={`/lists/0`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 1</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/1`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 2</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/2`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 3</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/3`} style={{ textDecoration: "none" }}>
                        <div className="todo_list show">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 4</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/4`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 5</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/5`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 6</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/6`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 7</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>

                    <Link to={`/lists/7`} style={{ textDecoration: "none" }}>
                        <div className="todo_list">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>

                            <div>List 8</div>

                            <div className="list_edit_btn">
                                <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() => dispatch(openSettings())}
                                />
                            </div>
                        </div>
                    </Link>
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
