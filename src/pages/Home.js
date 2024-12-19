import { AuthPage } from "../components/authPage";
import { TodoPannel } from "../components/todoPannel";
import { useSelector } from "react-redux";

export const Home = () => {
    const authStatus = useSelector((rootReducer) => rootReducer.authStatusReducer);

    return (
        <div className="home_container">
            {authStatus ? <TodoPannel status="todos" /> : <AuthPage />}
        </div>
    );
};
