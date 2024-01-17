/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

//kiểm tra xem người dùng đã đăng nhập hay chưa
const isLoggedIn = () => {
  const logged = localStorage.getItem("isLoggedIn");
  if (logged === "true") {
    return true;
  } else {
    return false;
  }
};

//Nếu người dùng đã đăng nhập, trả về Outlet (các component con của ProtectedRoute)
//Outlet là một component đặc biệt của react-router-dom, nó sẽ render các component con của ProtectedRoute
//Nếu người dùng chưa đăng nhập, trả về Navigate (điều hướng) đến trang /login
const ProtectedRoute = () => {
  const auth = isLoggedIn();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
