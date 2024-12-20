import { AuthPage } from "../components/authPage";
import { TodoPannel } from "../components/todoPannel";

export const Home = () => {
    return (
        <div className="home_container">
            {localStorage.getItem("isAuthenticated") ? (
                <TodoPannel status="todos" />
            ) : (
                <AuthPage />
            )}
        </div>
    );
};
