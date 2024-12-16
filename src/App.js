import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<Layout />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </div>
    );
};
