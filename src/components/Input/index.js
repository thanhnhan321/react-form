/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./style.css";
import { Text } from "../../components";
import { HideIcon, ShowIcon } from "../../assets";

const Input = ({ isPassword = false, value, onChangeEmail, OnchangePassword, isError }) => {
  const [showPass, setShowPass] = useState(true);

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="Container">
      <Text size={17.5}>
        {isPassword ? "Mật khẩu" : "Tài khoản"}
        {/* Một dấu * hiển thị bên cạnh văn bản nếu set nó là bắt buộc */}
        <span className="Form-required">*</span>
      </Text>
      {/* tạo một div không có nội dung và có một khoảng cách dưới (margin-bottom) là 7px */}
      <div style={{ marginBottom: "7px" }}></div>

      {isPassword ? (
        <>
          {/* Nếu isPassword là true, component sẽ render một ô nhập liệu (<input>) cho mật khẩu với khả năng hiển thị 
          hoặc ẩn mật khẩu dựa trên giá trị của biến showPass */}
          <div className="Input-container">
            <input
              className="Input"
              placeholder="Password"
              type={showPass ? "password" : "text"}
              name="password"
              value={value.password}
              onChange={OnchangePassword}
            />
            <div className="Icon" onClick={handleShow}>
              {showPass ? <ShowIcon /> : <HideIcon />}
            </div>
          </div>
          {isError.emptyPassword && (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Mật khẩu không được để trống
            </Text>
          )}
        </>
      ) : (
        <>
          <div className="Input-container">
            <input
              type="email"
              className="Input"
              placeholder="Email"
              name="email"
              value={value.email}
              onChange={onChangeEmail}
            />
          </div>
          {isError.emptyEmail ? (
            <Text size={12} color={"#b32b23"} fontWeight={400}>
              Tài khoản không được để trống
            </Text>
          ) : (
            isError.invalidEmail && (
              <Text size={12} color={"#b32b23"} fontWeight={400}>
                Email không đúng định dạng
              </Text>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Input;