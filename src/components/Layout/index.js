/* eslint-disable react/prop-types */
import React from "react";
import { Menu } from "../../components";

// Trong đoạn mã trên, bạn đang tạo một thành phần React có tên là Layout. Thành phần này nhận một prop là children, 
// đại diện cho các thành phần con mà bạn muốn hiển thị trong Layout. Nó cũng sử dụng thành phần Menu từ thư mục "../../components".
const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
