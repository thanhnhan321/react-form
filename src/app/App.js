import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, HomePage, UserPage, BlogPage, AboutPage, NotFound, ResponsePage } from "../pages";
import { ProtectedRoute } from "../components";

function App() {
  return (
    // Component này cung cấp routing cho ứng dụng của bạn dựa trên URL hiện tại.
    <BrowserRouter>
      {/* Component này định nghĩa tập hợp các Route và các thành phần mà chúng sẽ hiển thị dựa trên URL hiện tại. */}
      <Routes>
        {/* Public Routes*/}
        {/* Định nghĩa một Route dành cho URL "/login" và hiển thị <LoginPage /> khi đường dẫn này được truy cập. */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes: Đây có vẻ như là một component tự định nghĩa để đảm bảo rằng các Routes con của nó chỉ 
        hiển thị khi người dùng đã đăng nhập.*/}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/response" element={<ResponsePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// được sử dụng để xuất App component để có thể import và sử dụng nó ở các file khác trong ứng dụng của bạn.
export default App;
