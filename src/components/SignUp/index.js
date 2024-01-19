/* eslint-disable react/prop-types */
import React, {useState} from "react";
import ReactModal from "react-modal";
import "./style.css";
import { Text, Input, Button } from "..";
import { CloseIcon } from "../../assets";

//Quên mật khẩu

const customStyles = {
  overlay: {
    //Màu xanh lá
    backgroundColor: "rgba(0, 128, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    // Màu hồng
    backgroundColor: "#f99",
    borderRadius: "6px",
  },
};

const SignUp = ({ signUpIsOpen, closeSignUp }) => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    invalidEmail: false,
    emptyEmail: false,
    emptyPassword: false,
  });

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

  return (
    <ReactModal
      //Nếu modalIsOpen là true, modal sẽ được mở.
      isOpen={signUpIsOpen}
      //Hàm này sẽ được gọi khi người dùng muốn đóng modal
      onRequestClose={closeSignUp}
      contentLabel="Sign Up Modal"
      //Không cho phép user tương tác với các phần tử bên dưới modal
      ariaHideApp={false}
      //Không đóng modal khi click vào overlay (phần xám bên ngoài modal)
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      {/*Nội dung của modal */}
      <div className="Modal-container">
        <div className="Modal-Header">
          <Text size={17.5} color={"#343A40"} fontWeight={700}>
            Đăng ký
          </Text>
          <div className="Modal-Icon" onClick={() => closeSignUp()}>
            <CloseIcon />
          </div>
        </div>

        {/* <Input value={2} isError={false} /> */}
        {/* Nhập email và password của bạn để đăng ký */}

        <div className="SignUp-container">
            <Input value={values} isError={isError} onChangeEmail={handleEmailInputChange} />
            <Input
              isPassword={true}
              value={values}
              isError={isError}
              OnchangePassword={handlePasswordInputChange}
            />
        </div>

        <div style={{ padding: "7px" }}>
          <Button>Đăng ký</Button>
        </div>
      </div>
    </ReactModal>
  );
};

export default SignUp;
