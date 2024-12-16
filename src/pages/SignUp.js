import "../styles/Login.css";
import img from "../images/3.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const SignUp = () => {
    const [titleS, setTitleS] = useState(false);
    const [input1S, setInput1S] = useState(false);
    const [input2S, setInput2S] = useState(false);
    const [input3S, setInput3S] = useState(false);
    const [submitBtn, setSubmitBtn] = useState(false);
    const [shortLinkS, setShortLinkS] = useState(false);

    setInterval(() => {
        setTitleS(true);
    }, 200);

    setInterval(() => {
        setInput1S(true);
    }, 600);

    setInterval(() => {
        setInput2S(true);
    }, 900);

    setInterval(() => {
        setInput3S(true);
    }, 1200);

    setInterval(() => {
        setSubmitBtn(true);
    }, 1500);

    setInterval(() => {
        setShortLinkS(true);
    }, 1800);

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
                        Sign Up
                    </div>

                    <div className={`input_box ${input1S ? "show" : ""}`}>
                        <div className="lable">Nickname</div>
                        <input type="text" />
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

                    <div className={`short_link ${shortLinkS ? "show" : ""}`}>
                        Have you already registered ?
                        <Link to={"/log-in"} style={{ textDecoration: "none" }}>
                            <div>Log In</div>
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
