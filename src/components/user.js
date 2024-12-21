import "../styles/components/user.css";
import { useDispatch, useSelector } from "react-redux";
import {
    closeUserBox,
    selectBackground,
    updateBackground,
    changeTheme,
    closeMenu,
    logOut,
} from "../store/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClose,
    faMoon,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../images/todo-background/1.jpg";
import img2 from "../images/todo-background/2.jpg";
import img3 from "../images/todo-background/3.jpg";
import img4 from "../images/todo-background/4.jpg";
import img5 from "../images/todo-background/5.jpg";
import img6 from "../images/todo-background/6.jpg";

export const User = () => {
    const userBoxStatus = useSelector(
        (rootReducer) => rootReducer.userBoxReducer
    );

    const backgrounds = useSelector(
        (rootReducer) => rootReducer.backgroundsReducer
    );

    const backgroundNumber = useSelector(
        (rootReducer) => rootReducer.updateBackgroundReducer
    );

    const themeStatus = useSelector((rootReducer) => rootReducer.themeReducer);

    const dispatch = useDispatch();

    return (
        <div className={`user_container ${userBoxStatus ? "show" : ""}`}>
            <div className="user_box">
                <div
                    className="user_close_btn"
                    onClick={() => dispatch(closeUserBox())}
                >
                    <FontAwesomeIcon icon={faClose} />
                </div>

                <div
                    className="user_close_btn log_out_btn"
                    onClick={() => dispatch(logOut())}
                >
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </div>

                <div className="user_information_section">
                    <div className="user_profile_img">
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

                    <div>
                        <div className="user_nickname">Masocher</div>

                        <div className="user_email_">Masocherr@gmail.com</div>

                        <div className="theme_btn">
                            <div
                                className={`theme_change_btn ${
                                    themeStatus ? "show" : ""
                                }`}
                                onClick={() => dispatch(changeTheme())}
                            >
                                <div></div>
                            </div>

                            <span>
                                <FontAwesomeIcon icon={faMoon} />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="gallery_section">
                    <div className="gallery_title">Change the background</div>

                    <div className="gallery_images">
                        {backgrounds.map((img) => (
                            <div
                                className={`gallery_img ${
                                    img.selected ? "selected" : ""
                                }`}
                                key={img.id}
                            >
                                <img
                                    loading="lazy"
                                    src={img.src}
                                    alt="background-img"
                                    onClick={() => {
                                        dispatch(selectBackground(img.id));
                                        dispatch(updateBackground(img.id));
                                        dispatch(closeUserBox());
                                        dispatch(closeMenu());
                                    }}
                                />
                                <div className="selected_title">Selected</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
