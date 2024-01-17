/* eslint-disable react/prop-types */
import React from "react";
import { AddIcon, ImageIcon } from "../../../assets";
import "./style.css";

//field: là một object chứa các thông tin của field đó
//addQuestion: là một function, được truyền từ component cha xuống
//style: là một object, chứa các thuộc tính css
const FloatButton = ({ field, addQuestion, style }) => {
  //Khi người dùng click vào nút thêm câu hỏi, hàm này sẽ được gọi
  const handleAddQuestion = () => {
    //Gọi hàm addQuestion, truyền vào itemID của field đó
    addQuestion(field.itemID);
  };

  //Khi người dùng click vào nút thêm ảnh, hàm này sẽ được gọi
  const handleAddImage = () => {
    console.log("Add image");
  };

  return (
    // Render 2 nút thêm câu hỏi và thêm ảnh
    <div className="Float-button-container" style={style}>
      {/* Khi người dùng click vào nút thêm câu hỏi, hàm handleAddQuestion sẽ được gọi */}
      <div className="Icon-add" title="Add question" onClick={handleAddQuestion}>
        {/* Render icon thêm câu hỏi */}
        <AddIcon />
      </div>
      <div className="Icon-image" title="Add image" onClick={handleAddImage}>
        {/* Render icon thêm ảnh */}
        <ImageIcon />
      </div>
    </div>
  );
};

export default FloatButton;
