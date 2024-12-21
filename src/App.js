import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { List } from "./pages/List";
import { Toaster } from "react-hot-toast";
import { onStart } from "./store/Actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const App = () => {
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        dispatch(onStart());
    }, [location.pathname]);

    return (
        <div className="App">
            <Routes>
                <Route path="/lists/:listUrlSlug" element={<List />} />
                <Route path="/" element={<Home />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>

            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};
