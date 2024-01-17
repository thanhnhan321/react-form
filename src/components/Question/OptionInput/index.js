/* eslint-disable react/prop-types */
import React from "react";
import { CircleIcon, CloseIcon, RectangleIcon } from "../../../assets";
import { Text, Line, Space } from "../../../components";
import "./style.css";

//ô nhập câu trả lời
const ActiveParagraph = () => {
  return <textarea rows={4} placeholder="Long answer text" disabled className="Paragraph-input" />;
};

//hiển thị nội dung khi trường câu trả lời chưa được chọn
const InactiveParagraph = () => {
  return (
    <>
      <Space height={15} />
      <Text size={16} fontWeight={400} color="#757575">
        Long answer text
      </Text>
      <Space height={5} />
      <Line />
    </>
  );
};

//hiển thị nội dung khi trường câu trả lời được chọn
const AddOption = ({ type, options, handleAddOption, itemID }) => {
  return (
    <div className="Add-option">
      {type === "multiple-choice" ? (
        <CircleIcon />
      ) : type === "checkbox" ? (
        <RectangleIcon />
      ) : (
        //hiển thị số thứ tự cho trường câu trả lời kiểu dropdown
        <div className="Dropdown-text-index">{options.length + 1}.</div>
      )}
      <input
        type="text"
        title="Add option"
        placeholder="Add option"
        className="Add-option-text"
        onClick={() => handleAddOption(itemID)}
      />
    </div>
  );
};

//Dùng function component nhận các props từ Question/index.js
const OptionInput = ({ field, isActive, addOption, removeOption, changeTextOption }) => {
  //Sử dụng destructuring để lấy các props từ field và gán cho các biến 'type', 'options', 'itemID'
  const [type, options, itemID] = [field.type, field.options, field.itemID];

  //Hàm xử lý khi click vào nút 'Add option'
  const handleAddOption = (itemID) => {
    addOption(itemID);
  };

  //Hàm xử lý khi click vào nút 'Remove'
  const handleRemoveOption = (itemID, optionID) => {
    removeOption(itemID, optionID);
  };

  //Hàm xử lý khi thay đổi nội dung của trường câu trả lời
  const handleOptionTextChange = (event, itemID, optionID) => {
    changeTextOption(itemID, optionID, event.target.value);
  };

  return (
    //Kiểm tra loại câu trả lời để hiển thị nội dung tương ứng
    <>
      {type === "paragraph" ? (
        isActive === itemID ? (
          <ActiveParagraph />
        ) : (
          <InactiveParagraph />
        )
      ) : (
        <div className="Multiple-input-container">
          {/* map qua mảng các option để hiển thị nội dung tương ứng với từng option  */}
          {options.map((option, index) => (
            <div key={option.optionID} className="Multiple-input">
              {type === "multiple-choice" ? (
                <CircleIcon />
              ) : type === "checkbox" ? (
                <RectangleIcon />
              ) : (
                <div className="Dropdown-text-index">{index + 1}.</div>
              )}
              <input
                type="text"
                placeholder="your option"
                value={option.content}
                className={
                  isActive === itemID ? "Multiple-input-text" : "Inactive-multiple-input-text"
                }
                //autoFocus để tự động focus vào trường nhập liệu khi được chọn
                //focus là để chọn toàn bộ nội dung trong trường nhập liệu khi được chọn
                autoFocus
                //select là để chọn toàn bộ nội dung trong trường nhập liệu khi được chọn
                onFocus={(event) => event.target.select()}
                //onChange là để xử lý khi thay đổi nội dung của trường nhập liệu
                onChange={(event) => handleOptionTextChange(event, itemID, option.optionID)}
              />

              {/* Kiểm tra xem có nhiều hơn 1 option hay không, nếu có thì hiển thị nút 'Remove' */}
              {options.length > 1 && isActive === itemID ? (
                <div
                  className="Remove-icon"
                  title="Remove"
                  onClick={() => handleRemoveOption(itemID, option.optionID)}
                >
                  <CloseIcon />
                </div>
              ) : (
                <div className="Placeholder-icon" />
              )}
            </div>
          ))}
          {/* Kiểm tra xem trường câu trả lời có được chọn hay không, nếu có thì hiển thị nút 'Add option' */}
          {/* Dấu && là kiểm tra điều kiện, nếu điều kiện đúng thì hiển thị nội dung sau dấu &&, 
          nếu sai thì không hiển thị nội dung sau dấu && */}
          {isActive === itemID && (
            <AddOption
              type={type}
              options={options}
              //truyền hàm handleAddOption vào component AddOption để xử lý khi click vào nút 'Add option'
              handleAddOption={handleAddOption}
              itemID={itemID}
            />
          )}
        </div>
      )}
    </>
  );
};

export default OptionInput;
