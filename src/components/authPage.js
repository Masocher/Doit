import "../styles/components/authPage.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export const AuthPage = () => {
    const [logoS, setLogoS] = useState(false);
    const [welcomeS, setWelcomeS] = useState(false);
    const [authbuttonsS, setAuthbuttonsS] = useState(false);

    setInterval(() => {
        setLogoS(true);
    }, 100);

    setInterval(() => {
        setWelcomeS(true);
    }, 600);

    setInterval(() => {
        setAuthbuttonsS(true);
    }, 800);

    return (
        <div className="container">
            <div id="particles-js"></div>

            <div className={`logo ${logoS ? "show" : ""}`}>Doit</div>

            <div className={`welcome_text ${welcomeS ? "show" : ""}`}>
                Welcome to Do it
            </div>

            <div className={`auth_buttons ${authbuttonsS ? "show" : ""}`}>
                <Link to={"/log-in"} style={{ textDecoration: "none" }}>
                    <div className="log_in_btn">Log in</div>
                </Link>

                <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
                    <div className="sign_up_btn">Sign up</div>
                </Link>
            </div>
        </div>
    );
};
