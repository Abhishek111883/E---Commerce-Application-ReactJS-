import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CategoryProvider from "./context/Categorycontext.jsx";
import DarkModeProvider from "./context/DarkModecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
