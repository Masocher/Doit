import "../styles/components/todoMenu.css";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/Actions";
import { useMediaQuery } from "react-responsive";

export const BlackBox = ({ status }) => {
    const dispatch = useDispatch();

    const tabletSize = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <div
            className={`black_box ${status && tabletSize ? "show" : ""}`}
            onClick={() => dispatch(closeMenu())}
        ></div>
    );
};
