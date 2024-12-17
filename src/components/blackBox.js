import "../styles/components/todoMenu.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/Actions";
import { useMediaQuery } from "react-responsive";

export const BlackBox = () => {
    const dispatch = useDispatch();

    const status = useSelector((rootReducer) => rootReducer.blackBoxReducer);

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
