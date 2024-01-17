import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { HomeIcon, UserIcon, AboutIcon, BlogIcon } from "../../assets";
import "./style.css";

const Menu = () => {
  const menuItems = [
    { label: "Home", path: "/home", icon: <HomeIcon /> },
    { label: "About", path: "/about", icon: <AboutIcon /> },
    { label: "Blog", path: "/blog", icon: <BlogIcon /> },
    { label: "User", path: "/user", icon: <UserIcon /> },
  ];

  return (
    <div className="menu-container">
      <ul className="horizontal-menu">
        {/* sử dụng hàm map để lặp qua mảng menuItems và tạo ra các phần tử <li> tương ứng cho mỗi mục trong menu. */}
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item">
            <Link to={menuItem.path} className="menu-link">
              {menuItem.icon}
              <Text size={18} color={"white"} fontWeight={400} cursor={"pointer"}>
                {menuItem.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
