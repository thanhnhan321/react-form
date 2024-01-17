/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { Dropdown, Line, Switch, OptionInput, FloatButton, Text } from "../../components";
import { BinIcon, ImageIcon, CopyIcon, DragIcon } from "../../assets";
import "./style.css";

//Hàm xử lý khi click vào nút 'Add option'
const Question = ({
  formContent,
  changeQuestionType,
  changeRequired,
  addQuestion,
  removeQuestion,
  changeTitle,
  changeDescription,
  duplicateQuestion,
  addOption,
  removeOption,
  changeTextOption,
}) => {
  const [isActive, setIsActive] = useState("0000");
  const [isHover, setIsHover] = useState("0000");
  //khởi tạo giá trị ban đầu cho biến 'buttonTop' là null
  const [buttonTop, setButtonTop] = useState(null); // initial value
  //tạo biến 'questionRef' để lưu trữ giá trị của thẻ div có className là 'Question'
  const questionRef = useRef(null);

  //Hàm xử lý khi click vào câu hỏi
  const handleItemClick = (itemID, event) => {
    setIsActive(itemID);
    
    //curentTarget: trả về thẻ mà event được gắn vào
    const questionElement = event.currentTarget;
    //getBoundingClientRect(): trả về kích thước của thẻ và vị trí của nó
    const rect = questionElement.getBoundingClientRect();
    //lấy giá trị top của thẻ div có className là 'Question' và gán cho biến 'absoluteTop' 
    let absoluteTop = rect.top;

    //nếu giá trị top của thẻ div có className là 'Question' lớn hơn 656 thì gán giá trị 656 cho biến 'absoluteTop'
    //nếu giá trị top của thẻ div có className là 'Question' nhỏ hơn 178 thì gán giá trị 178 cho biến 'absoluteTop'
    //absoluteTop: giá trị top của thẻ div có className là 'Question'
    if (absoluteTop > 656) absoluteTop = 656;
    if (absoluteTop < 178) absoluteTop = 178;

    //gán giá trị của biến 'absoluteTop' cho biến 'buttonTop'
    setButtonTop(absoluteTop);
  };

  //Hàm xử lý khi scroll chuột
  const handleScroll = () => {
    //Lấy tham chiếu đến phần tử DOM mà questionRef đang trỏ tới
    //DOM (Document Object Model): là một giao diện lập trình ứng dụng (API) cho phép các chương trình có thể truy cập 
    //vào các thành phần của trang web
    const questionElement = questionRef.current;
    //Lấy ra kích thước của thẻ div có className là 'Question' và vị trí của nó và gán cho biến 'rect' 
    const rect = questionElement.getBoundingClientRect();
    //Lưu giá trị top trong đối tượng 'rect' vào biến 'absoluteTop'
    let absoluteTop = rect.top;

    if (absoluteTop > 656) absoluteTop = 656;
    if (absoluteTop < 178) absoluteTop = 178;

    setButtonTop(absoluteTop);
  };

  //Hàm xử lý khi hover vào câu hỏi
  const handleItemHover = (itemID) => {
    setIsHover(itemID);
  };

  //Hàm xử lý khi thay đổi kiểu câu hỏi
  const handleTypeChange = (itemID, selectedOption) => {
    changeQuestionType(itemID, selectedOption);
  };

  //Hàm xử lý khi click vào nút 'Delete'
  const handleRemoveQuestion = (itemID) => {
    removeQuestion(itemID);
  };

  //Hàm xử lý khi thay đổi tiêu đề câu hỏi
  const handleTitleChange = (event, itemID) => {
    changeTitle(itemID, event.target.value);
  };

  //Hàm xử lý khi thay đổi mô tả câu hỏi
  const handleDescriptionChange = (event, itemID) => {
    changeDescription(itemID, event.target.value);
  };

  //Hàm xử lý khi click vào nút 'Duplicate'
  const handleDuplicate = (field) => {
    duplicateQuestion(field.itemID, field.title, field.type, field.options, field.required);
  };

  //Hàm xử lý khi click vào nút 'Add question'
  return (
    //onScroll: sự kiện xảy ra khi scroll chuột
    <div className="Form-container" onScroll={handleScroll}>
      {/* field: là một object trong mảng 'formContent'  */}
      {formContent.map((field) => {
        return (
          <div key={field.itemID} className="Item-container">
            {/* field.type: kiểu câu hỏi */}
            {field.type === "form-title" ? (
              <div
                className={`Title-container ${isActive === field.itemID ? "active" : ""}`}
                onClick={(event) => handleItemClick(field.itemID, event)}
                //Sử dụng ref để theo dõi phần tử khi nó được render
                ref={isActive === field.itemID ? questionRef : null}
              >
                <input
                  value={field.title}
                  placeholder="Form title"
                  className={
                    isActive === field.itemID
                      ? "Active-title-container Title-container-title"
                      : "Title-container-title"
                  }
                  onChange={(event) => handleTitleChange(event, field.itemID)}
                />
                <input
                  value={field.description}
                  placeholder="Form description"
                  className={
                    isActive === field.itemID
                      ? "Active-title-container Title-container-description"
                      : "Title-container-description"
                  }
                  onChange={(event) => handleDescriptionChange(event, field.itemID)}
                />
              </div>
            ) : (
              <div
                className={`Question ${isActive === field.itemID ? "active" : ""}`}
                onClick={(event) => handleItemClick(field.itemID, event)}
                //onMouseEnter: sự kiện xảy ra khi hover vào câu hỏi
                onMouseEnter={() => handleItemHover(field.itemID)}
                //onMouseLeave: sự kiện xảy ra khi hover ra khỏi câu hỏi
                onMouseLeave={() => handleItemHover(null)}
                ref={isActive === field.itemID ? questionRef : null}
              >
                {/* Kiểm tra nếu isActive === field.itemID thì hiển thị nút kéo thả */}
                {isActive === field.itemID || isHover === field.itemID ? (
                  <div className="Drag-icon">
                    <DragIcon />
                  </div>
                ) : (
                  <div className="Inactive-drag-icon" />
                )}
                
                {/* iểm tra nếu isActive !== field.itemID thì hiển thị tiêu đề câu hỏi */}
                {isActive !== field.itemID ? (
                  <Text size={18} color="#202124" fontWeight={400}>
                    {field.title}
                  </Text>
                ) : (
                  <div className="Question-header">
                    <input
                      placeholder="Question"
                      value={field.title}
                      className="Question-title"
                      onChange={(event) => handleTitleChange(event, field.itemID)}
                      onFocus={(event) => event.target.select()}
                    />
                    <div className="Add-image-icon">
                      <ImageIcon />
                    </div>
                    <Dropdown
                      onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
                    />
                  </div>
                )}
                {/* Kiểm tra nếu isActive !== field.itemID thì hiển thị mô tả câu hỏi */}
                <div
                  className={isActive === field.itemID ? "Question-main" : "Inactive-question-main"}
                >
                  <OptionInput
                    field={field}
                    isActive={isActive}
                    addOption={addOption}
                    removeOption={removeOption}
                    changeTextOption={changeTextOption}
                  />
                </div>
                {/* Kiểm tra nếu isActive === field.itemID thì hiển thị nút 'Delete' và nút 'Required' */}
                {isActive === field.itemID && (
                  <>
                    <Line />
                    <div className="Question-footer">
                      <div className="Duplicate-icon" onClick={() => handleDuplicate(field)}>
                        <CopyIcon />
                      </div>
                      <div
                        className="Delete-icon"
                        onClick={() => handleRemoveQuestion(field.itemID)}
                      >
                        <BinIcon />
                      </div>
                      <Line height={32} width={1} />
                      <Switch
                        label="Required"
                        itemID={field.itemID}
                        changeRequired={changeRequired}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
            {/* Kiểm tra nếu isActive === field.itemID thì hiển thị nút 'Add question' */}
            {isActive === field.itemID && (
              <FloatButton field={field} addQuestion={addQuestion} style={{ top: buttonTop }} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Question;
