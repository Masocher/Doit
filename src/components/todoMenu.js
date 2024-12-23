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
import {
    addList,
    closeMenu,
    openSettings,
    openUserBox,
} from "../store/Actions";
import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const TodoMenu = () => {
    let location = useLocation();

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

    const [lists, setLists] = useState([]);

    const listsReducer = async () => {
        try {
            let response = await axios.get("https://doit.liara.run/api/lists/");
            setLists(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            listsReducer();
        }, 1000);
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
                <Link to="/importants" style={{ textDecoration: "none" }}>
                    <div
                        className={`important_todos ${
                            location.pathname === "/importants" ? "show" : ""
                        }`}
                    >
                        <span>
                            <FontAwesomeIcon icon={faStar} />
                        </span>

                        <div>Importants</div>
                    </div>
                </Link>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <div
                        className={`home_todos ${
                            location.pathname === "/" ? "show" : ""
                        }`}
                    >
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
                    {lists ? (
                        lists.map((list) => (
                            <Link
                                to={`/lists/${list.id}`}
                                style={{ textDecoration: "none" }}
                                key={list.id}
                            >
                                <div className="todo_list">
                                    <span>
                                        <FontAwesomeIcon icon={faBars} />
                                    </span>

                                    <div>
                                        {list.name
                                            ? `${list.name}`
                                            : `List ${list.id}`}
                                    </div>

                                    <div className="list_edit_btn">
                                        <FontAwesomeIcon
                                            icon={faGear}
                                            onClick={() =>
                                                dispatch(openSettings())
                                            }
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no_lists">There is no list !</div>
                    )}
                </div>

                <div
                    className="create_list_btn"
                    onClick={() => dispatch(addList())}
                >
                    <span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>

                    <div>New list</div>
                </div>
            </div>
        </div>
    );
};
