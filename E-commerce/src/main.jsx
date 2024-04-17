import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CategoryProvider from "./context/Categorycontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
);
