import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import store from "./app/store";
import { Provider } from "react-redux";

// Module này dùng để tạo ra trang Home của app với các câu hỏi trong form và các thuộc tính của chúng như title,
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
