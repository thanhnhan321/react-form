/* eslint-disable react/prop-types */
import React from "react";
import { CheckIcon } from "../../assets";
import { Text } from "../../components";
import "./style.css";

const CheckBox = (props) => {
  //checked: Thuộc tính này xác định trạng thái của hộp kiểm (checkbox). Nếu true, hộp kiểm sẽ được đánh dấu.
  const { checked, label, onClick } = props;

  return (
    <div className="Container-check">
       {/* Nếu checked là true, hộp kiểm sẽ được đánh dấu, và nếu người dùng nhấp vào hộp kiểm, hàm onClick sẽ được gọi. */}
      <div className={checked ? "Check-Box fill" : "Check-Box"} onClick={onClick}>
        {checked && <CheckIcon />}
      </div>
      <Text color={"#495057"} fontWeight={400}>
        {label}
      </Text>
    </div>
  );
};

export default CheckBox;
