import "../styles/components/user.css";
import img1 from "../images/1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
    closeUserBox,
    selectBackground,
    updateBackground,
    changeTheme,
} from "../store/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faMoon } from "@fortawesome/free-solid-svg-icons";

export const User = () => {
    const userBoxStatus = useSelector(
        (rootReducer) => rootReducer.userBoxReducer
    );

    const backgrounds = useSelector(
        (rootReducer) => rootReducer.backgroundsReducer
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

                <div className="user_information_section">
                    <div className="user_profile_img">
                        <img src={img1} alt="user-profile-image" />
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
                                    src={img.src}
                                    alt="background-img"
                                    onClick={() => {
                                        dispatch(selectBackground(img.id));
                                        dispatch(updateBackground(img.id));
                                        dispatch(closeUserBox());
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
