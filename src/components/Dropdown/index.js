/* eslint-disable react/prop-types */
import React from "react";
import Select from "react-select";
import { ParagraphIcon, RadioIcon, CheckboxIcon, DropdownIcon, TriangleIcon } from "../../assets";
import "./style.css";

const Dropdown = ({ onChange }) => {
  const options = [
    { value: "paragraph", label: "Paragraph", icon: <ParagraphIcon /> },
    { value: "multiple-choice", label: "Multiple choice", icon: <RadioIcon /> },
    { value: "checkbox", label: "Checkboxes", icon: <CheckboxIcon /> },
    { value: "dropdown", label: "Dropdown", icon: <DropdownIcon /> },
  ];

  // CustomOption: Component tùy chỉnh để hiển thị mỗi lựa chọn trong dropdown. Nó hiển thị icon và label của mỗi lựa chọn.
  const CustomOption = (props) => {
    const { data, innerProps, label } = props;
    return (
      <div {...innerProps} className="Dropdown-item">
        {data.icon}
        {label}
      </div>
    );
  };

  return (
    // sử dụng thư viện react-select để tạo một component dropdown.
    <Select
      options={options}
      components={{ Option: CustomOption, IndicatorsContainer: TriangleIcon }}
      defaultValue={options[0]}
      onChange={(event) => onChange(event.value)}
      isSearchable={false}
      menuPlacement="auto"
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          paddingRight: 10,
          width: 180,
          height: 45,
          cursor: "pointer",
          userSelect: "none",
        }),
      }}
    />
  );
};

export default Dropdown;
