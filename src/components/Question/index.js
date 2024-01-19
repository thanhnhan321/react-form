/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import { Dropdown, Line, Switch, OptionInput, FloatButton, Text } from "../../components";
import { BinIcon, ImageIcon, CopyIcon, DragIcon } from "../../assets";
import "./style.css";

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
  const [activeItemID, setActiveItemID] = useState(null);
  const [isHover, setIsHover] = useState(null);

  // Sử dụng đối tượng để lưu trữ hình ảnh cho mỗi câu hỏi
  const [avatars, setAvatars] = useState({});

  const fileInputRef = useRef(null);

  const handleChooseFile = (itemID) => {
    fileInputRef.current.click();
    setActiveItemID(itemID);
  };

  const handlePreviewAvartar = (e, itemID) => {
    const file = e.target.files[0];
    file.prevew = URL.createObjectURL(file);

    setAvatars((prevAvatars) => ({
      ...prevAvatars,
      [itemID]: file,
    }));
  };

  const [buttonTop, setButtonTop] = useState(null);
  const questionRef = useRef(null);

  const handleItemClick = (itemID, event) => {
    setActiveItemID(itemID);

    const questionElement = event.currentTarget;
    let absoluteTop = questionElement.getBoundingClientRect().top;

    if (absoluteTop > 656) absoluteTop = 656;
    if (absoluteTop < 178) absoluteTop = 178;

    setButtonTop(absoluteTop);
  };

  const handleScroll = () => {
    if (questionRef.current) {
      const questionElement = questionRef.current;
      let absoluteTop = questionElement.getBoundingClientRect().top;

      if (absoluteTop > 656) absoluteTop = 656;
      if (absoluteTop < 178) absoluteTop = 178;

      setButtonTop(absoluteTop);
    }
  };

  const handleItemHover = (itemID) => {
    setIsHover(itemID);
  };

  const handleTypeChange = (itemID, selectedOption) => {
    changeQuestionType(itemID, selectedOption);
  };

  const handleTitleChange = (event, itemID) => {
    changeTitle(itemID, event.target.value);
  };

  const handleDescriptionChange = (event, itemID) => {
    changeDescription(itemID, event.target.value);
  };

  const handleRemoveQuestion = (itemID) => {
    const questionToRemove = formContent.find((question) => question.itemID === itemID);

    if (questionToRemove && questionToRemove.avartar && questionToRemove.avartar.prevew) {
      URL.revokeObjectURL(questionToRemove.avartar.prevew);
    }

    removeQuestion(itemID);
    setAvatars((prevAvatars) => {
      const { [itemID]: _, ...newAvatars } = prevAvatars;
      return newAvatars;
    });
    setActiveItemID(null);
  };


  const handleDuplicate = (field) => {
    duplicateQuestion(field.itemID, field.title, field.type, field.options, field.required);
  };

  return (
    <div className="Form-container" onScroll={handleScroll}>
      {formContent.map((field) => (
        <div key={field.itemID} className="Item-container">
          {field.type === "form-title" ? (
            <div
              className={`Title-container ${activeItemID === field.itemID ? "active" : ""}`}
              onClick={(event) => handleItemClick(field.itemID, event)}
              ref={activeItemID === field.itemID ? questionRef : null}
            >
              <input
                value={field.title}
                placeholder="Form title"
                className={
                  activeItemID === field.itemID
                    ? "Active-title-container Title-container-title"
                    : "Title-container-title"
                }
                onChange={(event) => handleTitleChange(event, field.itemID)}
              />
              <input
                value={field.description}
                placeholder="Form description"
                className={
                  activeItemID === field.itemID
                    ? "Active-title-container Title-container-description"
                    : "Title-container-description"
                }
                onChange={(event) => handleDescriptionChange(event, field.itemID)}
              />
            </div>
          ) : (
            <div
              className={`Question ${activeItemID === field.itemID ? "active" : ""}`}
              onClick={(event) => handleItemClick(field.itemID, event)}
              onMouseEnter={() => handleItemHover(field.itemID)}
              onMouseLeave={() => handleItemHover(null)}
              ref={activeItemID === field.itemID ? questionRef : null}
            >
              {activeItemID === field.itemID || isHover === field.itemID ? (
                <div className="Drag-icon">
                  <DragIcon />
                </div>
              ) : (
                <div className="Inactive-drag-icon" />
              )}

              {activeItemID !== field.itemID ? (
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
                  <div className="Add-image-icon" onClick={() => handleChooseFile(field.itemID)}>
                    <ImageIcon />
                    <input
                      type="file"
                      onChange={(e) => handlePreviewAvartar(e, field.itemID)}
                      style={{ display: "none" }}
                      ref={fileInputRef}
                    />
                  </div>
                  <Dropdown
                    onChange={(selectedOption) => handleTypeChange(field.itemID, selectedOption)}
                  />
                </div>
              )}

                  <div className="Image-container">
                    {avatars[field.itemID] && <img src={avatars[field.itemID].prevew} alt="" />}
                  </div>


              <div
                className={activeItemID === field.itemID ? "Question-main" : "Inactive-question-main"}
              >
                <OptionInput
                  field={field}
                  isActive={activeItemID}
                  addOption={addOption}
                  removeOption={removeOption}
                  changeTextOption={changeTextOption}
                />
              </div>

              {activeItemID === field.itemID && (
                <>
                  <div className="Question-footer">
                    <div className="Duplicate-icon" onClick={() => handleDuplicate(field)}>
                      <CopyIcon />
                    </div>
                    <div className="Delete-icon" onClick={() => handleRemoveQuestion(field.itemID)}>
                      <BinIcon />
                    </div>
                    <Line height={32} width={1} />
                    <Switch label="Required" itemID={field.itemID} changeRequired={changeRequired} />
                  </div>
                </>
              )}
            </div>
          )}

          {activeItemID === field.itemID && (
            <FloatButton field={field} addQuestion={addQuestion} style={{ top: buttonTop }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;
