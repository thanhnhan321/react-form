/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
// import { Dropdown, Line, Switch, OptionInput, FloatButton, Text } from "../../components";
// import { BinIcon, ImageIcon, CopyIcon, DragIcon } from "../../assets";
import "./style.css";
import { Switch, Text } from "../../components";
import { Link } from "react-router-dom";


const Response = () => {

  const [isRequired, setIsRequired] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Bản tóm tắt");

  // Hàm thay đổi thuộc tính "required"
  const changeRequired = () => {
    setIsRequired((prevIsRequired) => !prevIsRequired);
  };

  const menuAs = [
    { label: "Bản tóm tắt", path: "/response"},
    { label: "Cá nhân", path: "/response"},
  ];

  // Các hàm xử lý thay đổi mục được chọn
  const handleMenuItemClick = (label) => {
    setSelectedMenuItem(label);
  };

  // useEffect(() => {
  //   // Dữ liệu biểu đồ tròn
  //   const data = {
  //     labels: ['Dữ liệu 1', 'Dữ liệu 2', 'Dữ liệu 3'],
  //     datasets: [{
  //       data: [30, 50, 20],
  //       backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
  //       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
  //       borderWidth: 1
  //     }]
  //   };

  //   // Tùy chọn biểu đồ tròn
  //   const options = {
  //     responsive: true,
  //     maintainAspectRatio: false
  //   };

  //   // Lấy tham chiếu của canvas
  //   const ctx = document.getElementById('myPieChart').getContext('2d');

  //   // Vẽ biểu đồ tròn
  //   new Chart(ctx, {
  //     type: 'pie',
  //     data: data,
  //     options: options
  //   });
  // }, []);
  
  
  return (
    <>
      <div className="Response-container">
        <div className="Response-number"> 
          <p>1 câu trả lời</p>
        </div>
        <div className="switch">
          <Switch label="Chấp nhận phản hồi" itemID={''} changeRequired={changeRequired} />
        </div>

        <div className="menuA-container">
          <ul className="horizontal-menuA">
            {menuAs.map((menuA, index) => (
              <li key={index} className="menuA-item">
                <Link
                  to={menuA.path}
                  className={`menuA-link ${selectedMenuItem === menuA.label ? "selected" : ""}`}
                  onClick={() => handleMenuItemClick(menuA.label)}
                >
                  <Text size={18} color={"#374957"} fontWeight={700} cursor={"pointer"}>
                    {menuA.label}
                  </Text>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div>
        <h1>Biểu đồ Tròn React</h1>
        <canvas id="myPieChart" width="400" height="200"></canvas>
      </div> */}

    </>
  );
};

export default Response;

