import "../styles/AuthPages.css";
import img from "../images/3.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const LogIn = () => {
    const [titleS, setTitleS] = useState(false);
    const [input2S, setInput2S] = useState(false);
    const [input3S, setInput3S] = useState(false);
    const [submitBtn, setSubmitBtn] = useState(false);
    const [shortLinkS, setShortLinkS] = useState(false);

    setInterval(() => {
        setTitleS(true);
    }, 200);

    setInterval(() => {
        setInput2S(true);
    }, 300);

    setInterval(() => {
        setInput3S(true);
    }, 400);

    setInterval(() => {
        setSubmitBtn(true);
    }, 500);

    setInterval(() => {
        setShortLinkS(true);
    }, 600);

    return (
        <div className="login_container">
            <div className="back_btn"></div>

            <div className="content left_content">
                <Link to={"/"}>
                    <div className="back_link">
                        <span>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>
                        
                        <div>Back</div>
                    </div>
                </Link>

                <form action={"#"}>
                    <div className={`title ${titleS ? "show" : ""}`}>
                        Log In
                    </div>

                    <div className={`input_box ${input2S ? "show" : ""}`}>
                        <div className="lable">Email</div>
                        <input type="email" />
                    </div>

                    <div className={`input_box ${input3S ? "show" : ""}`}>
                        <div className="lable">Password</div>
                        <input type="password" />
                    </div>

                    <button className={`${submitBtn ? "show" : ""}`}>
                        submit
                    </button>

                    <Link to={"#"} style={{ textDecoration: "none" }}>
                        <div
                            className={`short_link second_short_link ${
                                shortLinkS ? "show" : ""
                            }`}
                        >
                            Forgot the password ?
                        </div>
                    </Link>

                    <div className={`short_link ${shortLinkS ? "show" : ""}`}>
                        Not registered yet ?
                        <Link
                            to={"/sign-up"}
                            style={{ textDecoration: "none" }}
                        >
                            <div>Sign Up</div>
                        </Link>
                    </div>
                </form>
            </div>

            <div className="content right_content">
                <img src={img} alt="tower-pic" />
            </div>
        </div>
    );
};
