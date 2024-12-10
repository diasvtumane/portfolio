import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import SmoothScroll from "smooth-scroll";

new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
