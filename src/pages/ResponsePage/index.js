import React, { useState } from "react";
import { Layout, Button, Question, Text, Response } from "../../components";
import "./style.css";
import { Link } from "react-router-dom";

// Module này dùng để tạo ra trang Home của app với các câu hỏi trong form và các thuộc tính của chúng như title, 
// description, type, options, required

// initial state for form content


//Module này dùng để tạo ra trang Home của app với các câu hỏi trong form và các thuộc tính của chúng như title,
const ResponsePage = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState("Câu trả lời");

  const menuQAs = [
    { label: "Câu hỏi", path: "/home"},
    { label: "Câu trả lời", path: "/response"},
  ];

  // Các hàm xử lý thay đổi mục được chọn
  const handleMenuItemClick = (label) => {
    setSelectedMenuItem(label);
  };

  // render form content to the screen with Question component and its props
  return (
    <>
    <Layout>
      <main className="Home-main">
      <div className="menuQA-container">
          <ul className="horizontal-menuQA">
            {menuQAs.map((menuQA, index) => (
              <li key={index} className="menuQA-item">
                <Link
                  to={menuQA.path}
                  className={`menuQA-link ${selectedMenuItem === menuQA.label ? "selected" : ""}`}
                  onClick={() => handleMenuItemClick(menuQA.label)}
                >
                  <Text size={18} color={"#374957"} fontWeight={700} cursor={"pointer"}>
                    {menuQA.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Response/>

      </main>
    </Layout>
    </>
  );
};

export default ResponsePage;
