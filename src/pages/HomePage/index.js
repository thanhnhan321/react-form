import React, { useState } from "react";
import { Layout, Button, Question, Text } from "../../components";
import "./style.css";
import { Link } from "react-router-dom";

// Module này dùng để tạo ra trang Home của app với các câu hỏi trong form và các thuộc tính của chúng như title, 
// description, type, options, required

// initial state for form content
const initialState = [
  {
    itemID: "0000",
    title: "Form title",
    description: "",
    type: "form-title",
  },
  {
    itemID: "0001",
    title: "Question 1",
    type: "paragraph",
    //optionID là một chuỗi có dạng "itemID_optionIndex" để phân biệt các option của các câu hỏi khác nhau
    options: [{ optionID: "0001_0000", content: "Option 1" }],
    required: false,
  },
];

// itemIndex và optionIndex dùng để tạo ra các itemID và optionID cho các câu hỏi và các option
let itemIndex = 1;
let optionIndex = 0;

//Hàm này dùng để tạo ra các itemID cho các câu hỏi
function generateQuestionID(number) {
  return String(number).padStart(4, "0").slice(-4);
}

//Hàm này dùng để tạo ra các optionID cho các option
function generateOptionID(itemID, optionIndex) {
  return `${itemID}_${String(optionIndex).padStart(4, "0")}`;
}

//Module này dùng để tạo ra trang Home của app với các câu hỏi trong form và các thuộc tính của chúng như title,
const ResponsePage = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState("Câu hỏi");

  // formContent là một mảng các câu hỏi trong form
  const [formContent, setFormContent] = useState(initialState);

  // các hàm dùng để thay đổi các thuộc tính của các câu hỏi
  const changeQuestionType = (itemID, selectedOption) => {
    setFormContent((prevFormContent) => {
      return prevFormContent.map((question) => {
        if (question.itemID === itemID) {
          return { ...question, type: selectedOption };
        } else {
          return question;
        }
      });
    });
  };

  // hàm dùng để thay đổi thuộc tính required của các câu hỏi
  const changeRequired = (itemID) => {
    setFormContent((prevFormContent) => {
      return prevFormContent.map((question) => {
        if (question.itemID === itemID) {
          return { ...question, required: !question.required };
        } else {
          return question;
        }
      });
    });
  };

  // hàm dùng để thêm câu hỏi mới vào form
  const addQuestion = (itemID) => {
    itemIndex++;
    let qID = generateQuestionID(itemIndex);
    let index = formContent.findIndex((item) => item.itemID === itemID);

    // thêm câu hỏi mới vào form
    setFormContent(() => {
      // nếu câu hỏi được thêm vào là câu hỏi cuối cùng thì thêm câu hỏi vào cuối mảng
      if (index !== -1) {
        return [
          ...formContent.slice(0, index + 1),
          {
            itemID: qID,
            title: `Question ${formContent.length}`,
            type: "paragraph",
            options: [{ optionID: generateOptionID(qID, optionIndex), content: "Option 1" }],
            required: false,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  // hàm dùng để xóa câu hỏi
  const removeQuestion = (itemID) => {
    setFormContent(() => {
      return formContent.filter((question) => question.itemID !== itemID);
    });
  };

  // hàm dùng để thay đổi title của các câu hỏi
  const changeTitle = (itemID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) return { ...question, title: text };
        else return question;
      });
    });
  };

  // hàm dùng để thay đổi description của các câu hỏi
  const changeDescription = (itemID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) return { ...question, description: text };
        else return question;
      });
    });
  };

  // hàm dùng để duplicate câu hỏi
  const duplicateQuestion = (itemID, title, type, options, required) => {
    itemIndex++;
    let qID = generateQuestionID(itemIndex);
    let index = formContent.findIndex((item) => item.itemID === itemID);

    setFormContent(() => {
      if (index !== -1) {
        return [
          ...formContent.slice(0, index + 1),
          {
            itemID: qID,
            title: title,
            type: type,
            options: options,
            required: required,
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  // hàm dùng để thêm option vào câu hỏi
  const addOption = (itemID) => {
    optionIndex++;
    let index = formContent.findIndex((item) => item.itemID === itemID);
    // use for default option's label
    let option_number = formContent[index].options.length + 1;

    setFormContent(() => {
      if (index !== -1) {
        return [
          ...formContent.slice(0, index),
          {
            ...formContent[index],
            options: [
              ...formContent[index].options,
              {
                optionID: generateOptionID(itemID, optionIndex),
                content: `Option ${option_number}`,
              },
            ],
          },
          ...formContent.slice(index + 1),
        ];
      }
      return formContent;
    });
  };

  // hàm dùng để xóa option
  const removeOption = (itemID, optionID) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID) {
          return {
            ...question,
            options: question.options.filter((option) => option.optionID !== optionID),
          };
        }
        return question;
      });
    });
  };

  // hàm dùng để thay đổi text của option
  const changeTextOption = (itemID, optionID, text) => {
    setFormContent(() => {
      return formContent.map((question) => {
        if (question.itemID === itemID)
          return {
            ...question,
            options: question.options.map((option) => {
              if (option.optionID === optionID) return { ...option, content: text };
              return option;
            }),
          };
        return question;
      });
    });
  };

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

        <div className="Form-header">
          <input
            placeholder=""
            className="Form-title"
            value={formContent[0].title}
            onChange={(event) => changeTitle("0000", event.target.value)}
          />

          <div className="Button-send">
            <Button>Send</Button>
          </div>
        </div>
        <Question
          formContent={formContent}
          changeQuestionType={changeQuestionType}
          changeRequired={changeRequired}
          addQuestion={addQuestion}
          removeQuestion={removeQuestion}
          changeTitle={changeTitle}
          changeDescription={changeDescription}
          duplicateQuestion={duplicateQuestion}
          addOption={addOption}
          removeOption={removeOption}
          changeTextOption={changeTextOption}
        />
      </main>
    </Layout>
  );
};

export default ResponsePage;
