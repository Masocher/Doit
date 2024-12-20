import "../styles/AuthPages.css";
import img from "../images/3.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signUp } from "../store/Actions";

export const SignUp = () => {
    const [titleS, setTitleS] = useState(false);
    const [input1S, setInput1S] = useState(false);
    const [input2S, setInput2S] = useState(false);
    const [input3S, setInput3S] = useState(false);
    const [input4S, setInput4S] = useState(false);
    const [submitBtn, setSubmitBtn] = useState(false);
    const [shortLinkS, setShortLinkS] = useState(false);

    setInterval(() => {
        setTitleS(true);
    }, 200);

    setInterval(() => {
        setInput1S(true);
    }, 300);

    setInterval(() => {
        setInput2S(true);
    }, 400);

    setInterval(() => {
        setInput3S(true);
    }, 500);

    setInterval(() => {
        setInput4S(true);
    }, 600);

    setInterval(() => {
        setSubmitBtn(true);
    }, 700);

    setInterval(() => {
        setShortLinkS(true);
    }, 800);

    const dispatch = useDispatch();

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const submitForm = (nickname, email, password, password2) => {
        dispatch(signUp(nickname, email, password, password2));
    };

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

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={`title ${titleS ? "show" : ""}`}>
                        Sign Up
                    </div>

                    <div className={`input_box ${input1S ? "show" : ""}`}>
                        <div className="lable">Nickname</div>
                        <input
                            type="text"
                            onChange={(e) => setNickname(e.target.value)}
                        />
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

                    <div className={`input_box ${input4S ? "show" : ""}`}>
                        <div className="lable">Confirm password</div>
                        <input
                            type="password"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>

                    <button
                        className={`${submitBtn ? "show" : ""}`}
                        onClick={() =>
                            submitForm(nickname, email, password, password2)
                        }
                    >
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
