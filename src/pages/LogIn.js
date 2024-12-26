import "../styles/AuthPages.css";
import img from "../images/3.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logIn } from "../store/Actions";

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

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (email, password) => {
        dispatch(logIn(email, password));
    };

    return (
        <div className="login_container">
            <div className="back_btn"></div>

            <div className="content left_content">
                <Link to={"/home"}>
                    <div className="back_link">
                        <span>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </span>

                        <div>Back</div>
                    </div>
                </Link>

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={`title ${titleS ? "show" : ""}`}>
                        Log In
                    </div>

                    <div className={`input_box ${input2S ? "show" : ""}`}>
                        <div className="lable">Email</div>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={`input_box ${input3S ? "show" : ""}`}>
                        <div className="lable">Password</div>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className={`${submitBtn ? "show" : ""}`}
                        onClick={() => submitForm(email, password)}
                    >
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
