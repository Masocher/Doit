import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export const NotFound = () => {
    return (
        <div className="not_found_container">
            <div className="title_box">404</div>
            <div className="mini_title_box">Not Found !</div>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="back_home_btn">Back to home</div>
            </Link>
        </div>
    );
};
