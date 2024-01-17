/* eslint-disable react/prop-types */
import React from "react";
import { GoogleLogin } from "react-google-login";
import { Text } from "../../components";
import { GoogleIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import "./style.css";

const GoogleLoginButton = (props) => {
  //useNavigate là một hook của thư viện React Router, được sử dụng để điều hướng (navigate) giữa các trang trong ứng dụng React Router
  const navigate = useNavigate();

  const clientId = "96650021301-dsir3655p86a6gmkg40cdcihfjckg9v9.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success! Response:", response);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  const onFailure = (response) => {
    console.log("Login Failed! Response:", response.error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login demo"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      // không kiểm tra xem người dùng đã đăng nhập Google hay chưa.
      isSignedIn={false}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="Button">
          <GoogleIcon />
          <div className="Label">
            <Text color={"black"} fontWeight={400} size={14} cursor={"pointer"}>
              {props.children}
            </Text>
          </div>
        </button>
      )}
    />
  );
};

export default GoogleLoginButton;
