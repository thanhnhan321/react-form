/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Input,
  Text,
  CheckBox,
  Line,
  Button,
  Space,
  GoogleLoginButton,
  Modal,
} from "../../components";
import { UserIcon, FormLogo } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../actions";

//Module này dùng để tạo ra trang Login của app với các thuộc tính như email, password, invalidEmail, emptyEmail, 
//emptyPassword, checked, modalIsOpen

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientId = "96650021301-dsir3655p86a6gmkg40cdcihfjckg9v9.apps.googleusercontent.com";
  //email và password dùng để lưu giá trị của các input email và password
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  //Xét các lỗi của các input email và password
  const [isError, setIsError] = useState({
    invalidEmail: false,
    emptyEmail: false,
    emptyPassword: false,
  });
  const [checked, setChecked] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  //Hàm này dùng để load Google API
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  //Hàm này dùng để mở và đóng modal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //Hàm này dùng để xử lý sự kiện khi người dùng nhập vào các input email và password
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      invalidEmail: false,
      emptyEmail: false,
    }));
  };

  //Hàm này dùng để xử lý sự kiện khi người dùng nhập vào các input email và password
  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      emptyPassword: false,
    }));
  };

  //Hàm này dùng để kiểm tra xem email có hợp lệ hay không
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  //Hàm này dùng để xử lý sự kiện khi người dùng nhấn vào nút Đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;
    let wrongPass = false;

    if (values.email.trim() === "") {
      setIsError((values) => ({
        ...values,
        emptyEmail: true,
      }));

      error = true;
    }

    if (values.password.trim() === "") {
      setIsError((values) => ({
        ...values,
        emptyPassword: true,
      }));

      error = true;
    }

    if (!isEmailValid(values.email)) {
      setIsError((values) => ({
        ...values,
        invalidEmail: true,
      }));

      error = true;
    }

    if (values.email !== "user1@gmail.com" || values.password !== "a") {
      wrongPass = true;
    }

    if (!error && wrongPass) {
      toast.error("Tên đăng nhập hoặc mật khẩu không đúng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (error) {
      return;
    } else {
      dispatch(userLogin());
      navigate("/home");
    }
  };


  //Render các component của trang Login 
  return (
    <div className="App">
      <div className="Gradient-border">
        <div className="Box-Container">
          <div className="Header-container">
            <img src={FormLogo} className="App-logo" alt="Form logo" />
            <Space height={14} />
            <Text size={24.5}>Chào mừng bạn đến với React form</Text>
            <Space height={14} />
            <Text color={"#495057"}>Đăng nhập để tiếp tục</Text>
            <Space height={28} />
          </div>

          <div className="Login-container">
            <Input value={values} isError={isError} onChangeEmail={handleEmailInputChange} />
            <Input
              isPassword={true}
              value={values}
              isError={isError}
              OnchangePassword={handlePasswordInputChange}
            />

            <div className="Forget-password">
              <CheckBox
                label={"Ghi nhớ mật khẩu"}
                onClick={() => setChecked(!checked)}
                checked={checked}
              />
              <Text color={"#6366F1"} cursor={"pointer"} onClick={openModal}>
                Quên mật khẩu
              </Text>
            </div>
            <Space height={20} />

            <div
              style={{
                padding: "0px 7px 0px 7px",
              }}
            >
              <Button haveIcon={false} onClick={handleSubmit}>
                Đăng nhập
              </Button>
            </div>
          </div>
          <Space height={20} />

          <div className="Divider">
            <Line />
            <Text color={"#495057"} fontWeight={400} width={"100%"}>
              hoặc sử dụng
            </Text>
            <Line />
          </div>
          <Space height={20} />

          <GoogleLoginButton>Đăng nhập bằng tài khoản Google</GoogleLoginButton>
          <Space height={16} />
          <Button
            haveIcon={true}
            Icon={<UserIcon />}
            onClick={() => alert("Feature is under development")}
          >
            Đăng nhập bằng tài khoản MobiFone
          </Button>
          <Space height={30} />

          <div>
            <Text color={"#495057"} fontWeight={400}>
              {/* &nbsp; is the space*/}
              Bạn chưa có tài khoản? &nbsp;
            </Text>
            <Text
              color={"#6366F1"}
              fontWeight={400}
              cursor={"pointer"}
              onClick={() => console.log("Sign")}
            >
              Đăng ký tại đây
            </Text>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default LoginPage;
