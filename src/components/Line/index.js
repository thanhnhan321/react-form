/* eslint-disable react/prop-types */
import React from "react";

// Trong đoạn mã trên, bạn đang tạo một thành phần React có tên là Line. Thành phần này nhận các prop như height 
// (chiều cao của đường line), width (chiều rộng), color (màu sắc), và margin (khoảng cách lề).

const Line = (props) => {
  const { height, width, color, margin } = props;

  const lineStyle = {
    height: height || "1px",
    width: width || "100%",
    backgroundColor: color || "#ced4da",
    margin: margin,
    border: "0px solid",
  };

  return <hr style={lineStyle} />;
};

export default Line;
