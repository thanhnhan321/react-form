/* eslint-disable react/prop-types */
import React from "react";
import ReactModal from "react-modal";
import "./style.css";
import { Text, Input, Button } from "../../components";
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

const Modal = ({ modalIsOpen, closeModal }) => {
  return (
    <ReactModal
      //Nếu modalIsOpen là true, modal sẽ được mở.
      isOpen={modalIsOpen}
      //Hàm này sẽ được gọi khi người dùng muốn đóng modal
      onRequestClose={closeModal}
      contentLabel="Forget Password Modal"
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
            Quên mật khẩu
          </Text>
          <div className="Modal-Icon" onClick={() => closeModal()}>
            <CloseIcon />
          </div>
        </div>

        <Input value={2} isError={false} />
        <div style={{ padding: "7px" }}>
          <Button>Khôi phục</Button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
