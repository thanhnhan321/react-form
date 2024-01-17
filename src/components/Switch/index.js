/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

//Module Switch này dùng để tạo ra một toggle switch là một công tắc có thể bật hoặc tắt dùng để chọn một trong hai giá trị 
//true hoặc false để trả lời cho một câu hỏi nào đó trong form
const Switch = ({ label, itemID, changeRequired }) => {
  const handleClick = (itemID) => {
    changeRequired(itemID);
  };

  return (
    <label className="toggle">
      <span className="toggle-label">{label}</span>
      <input className="toggle-checkbox" type="checkbox" onClick={() => handleClick(itemID)} />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Switch;
