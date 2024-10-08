import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./fixed/index.jsx";
import App from "./dynamic/index.jsx";
// import App from "./variable/index.jsx";
import "./app.css";
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// 注册pwa页面
if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/dist/service-worker.js")
            .then((registration) => {
                console.log("SW registered: ", registration);
            })
            .catch((registrationError) => {
                console.log("SW registration failed: ", registrationError);
            });
    });
}
