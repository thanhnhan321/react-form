/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "../../components";
import "./style.css";

const Button = (props) => {
  //   Props:
    // haveIcon: Một biến boolean cho biết nút có biểu tượng hay không.
    // Icon: Component biểu tượng (nếu haveIcon là true).
    // onClick: Hàm xử lý sự kiện khi nút được nhấn.
    // children: Nội dung bên trong nút, có thể là văn bản hoặc các thành phần khác.
  const { haveIcon, Icon, onClick } = props;

  return (
    //Component Button trả về một thẻ <button> với các thuộc tính và lớp tùy thuộc vào việc có biểu tượng hay không.
    <button
      //Nếu có biểu tượng (haveIcon là true), component Icon sẽ được render trong thẻ button.
      className={haveIcon ? "Button-icon-container" : "Button-container"}
      onClick={onClick}
      type="button"
    >
      {haveIcon && Icon}
      {/* Một <div> được sử dụng để chứa văn bản và được đặt tên lớp là "Label". */}
      <div className="Label">
      {/* Component Text được sử dụng để render văn bản, các thuộc tính như màu sắc, độ đậm, kích thước và tính năng con trỏ 
      có thể được đặt thông qua props. */}
        <Text
          color={haveIcon ? "black" : "white"}
          fontWeight={haveIcon ? 400 : 600}
          size={haveIcon ? 14 : 17.5}
          cursor={"pointer"}
        >
          {/* được sử dụng để hiển thị nội dung bên trong thẻ <Button>. Khi bạn sử dụng component <Button>, 
          bất kỳ nội dung nào bạn đặt giữa thẻ mở và thẻ đóng của <Button> sẽ được đặt vào đây. */}
          {props.children}
        </Text>
      </div>
    </button>
  );
};

export default Button;
