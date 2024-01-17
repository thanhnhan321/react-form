/* eslint-disable react/prop-types */
import React from "react";

//Hàm Space nhận vào props là height và width và trả về một thẻ div với style là marginBottom và marginRight
const Space = (props) => {
  const { height, width } = props;

  const spaceStyle = {
    //marginBottom là khoảng cách từ phía dưới của thẻ div đến phía dưới của thẻ div tiếp theo
    //marginRight là khoảng cách từ phía bên phải của thẻ div đến phía bên phải của thẻ div tiếp theo
    marginBottom: height || "0px",
    marginRight: width || "0px",
  };

  return <div style={spaceStyle}></div>;
};

export default Space;
