import "../styles/components/authPage.css";

import { useState } from "react";

export const AuthPage = () => {
    const [logoS, setLogoS] = useState(false);
    const [welcomeS, setWelcomeS] = useState(false);
    const [authbuttonsS, setAuthbuttonsS] = useState(false);

    setInterval(() => {
        setLogoS(true);
    }, 100);

    setInterval(() => {
        setWelcomeS(true);
    }, 800);

    setInterval(() => {
        setAuthbuttonsS(true);
    }, 1200);

    return (
        <div className="container">
            <div className={`logo ${logoS ? "show" : ""}`}>
                Do<div>it</div>
            </div>

            <div className={`welcome_text ${welcomeS ? "show" : ""}`}>
                Welcome to Doit
            </div>

            <div className={`auth_buttons ${authbuttonsS ? "show" : ""}`}>
                <div>Log in</div>
                <div>Sign up</div>
            </div>
        </div>
    );
};
