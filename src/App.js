import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/" element={<Layout />} /> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};
