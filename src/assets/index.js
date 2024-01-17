/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Hide } from "./icons/eye_hide.svg";
import { ReactComponent as Show } from "./icons/eye_show.svg";
import { ReactComponent as Check } from "./icons/check.svg";
import { ReactComponent as Google } from "./icons/google.svg";
import { ReactComponent as Close } from "./icons/close.svg";
import { ReactComponent as Home } from "./icons/home.svg";
import { ReactComponent as User } from "./icons/user.svg";
import { ReactComponent as About } from "./icons/about.svg";
import { ReactComponent as Blog } from "./icons/blog.svg";
import { ReactComponent as Add } from "./icons/add.svg";
import { ReactComponent as Paragraph } from "./icons/paragraph.svg";
import { ReactComponent as Radio } from "./icons/radio.svg";
import { ReactComponent as Checkbox } from "./icons/checkbox.svg";
import { ReactComponent as Dropdown } from "./icons/dropdown.svg";
import { ReactComponent as Circle } from "./icons/circle.svg";
import { ReactComponent as Bin } from "./icons/bin.svg";
import { ReactComponent as Triangle } from "./icons/triangle.svg";
import { ReactComponent as Rectangle } from "./icons/rectangle.svg";
import { ReactComponent as Image } from "./icons/image.svg";
import { ReactComponent as Copy } from "./icons/copy.svg";
import { ReactComponent as Drag } from "./icons/drag.svg";
import Logo from "./images/logo.png";
import NotFound from "./images/404.jpg";

export const FormLogo = Logo;
export const NotFoundImage = NotFound;

// Mỗi biểu tượng là một component React được định nghĩa dựa trên các hình ảnh SVG.
// Các biểu tượng bao gồm: HideIcon, ShowIcon, CheckIcon, GoogleIcon, CloseIcon...
// Mỗi biểu tượng có thể nhận vào các prop như width và height để điều chỉnh kích thước.

export const HideIcon = ({ width = 20, height = 20 }) => {
  return <Hide width={width} height={height} />;
};

export const ShowIcon = ({ width = 20, height = 20 }) => {
  return <Show width={width} height={height} />;
};

export const CheckIcon = ({ width = 14, height = 14 }) => {
  return <Check width={width} height={height} />;
};

export const GoogleIcon = ({ width = 20, height = 20 }) => {
  return <Google width={width} height={height} />;
};

export const CloseIcon = ({ width = 14, height = 14 }) => {
  return <Close width={width} height={height} />;
};

export const HomeIcon = ({ width = 18, height = 18 }) => {
  return <Home width={width} height={height} />;
};

export const UserIcon = ({ width = 18, height = 18 }) => {
  return <User width={width} height={height} />;
};

export const AboutIcon = ({ width = 18, height = 18 }) => {
  return <About width={width} height={height} />;
};

export const BlogIcon = ({ width = 18, height = 18 }) => {
  return <Blog width={width} height={height} />;
};

export const AddIcon = ({ width = 22, height = 22 }) => {
  return <Add width={width} height={height} />;
};

export const ParagraphIcon = ({ width = 24, height = 24 }) => {
  return <Paragraph width={width} height={height} />;
};

export const RadioIcon = ({ width = 24, height = 24 }) => {
  return <Radio width={width} height={height} />;
};

export const CheckboxIcon = ({ width = 24, height = 24 }) => {
  return <Checkbox width={width} height={height} />;
};

export const DropdownIcon = ({ width = 24, height = 24 }) => {
  return <Dropdown width={width} height={height} />;
};

export const CircleIcon = ({ width = 20, height = 20 }) => {
  return <Circle width={width} height={height} />;
};

export const BinIcon = ({ width = 24, height = 24 }) => {
  return <Bin width={width} height={height} />;
};

export const TriangleIcon = ({ width = 8, height = 8 }) => {
  return <Triangle width={width} height={height} />;
};

export const RectangleIcon = ({ width = 20, height = 20 }) => {
  return <Rectangle width={width} height={height} />;
};

export const ImageIcon = ({ width = 22, height = 22 }) => {
  return <Image width={width} height={height} />;
};

export const CopyIcon = ({ width = 22, height = 22 }) => {
  return <Copy width={width} height={height} />;
};

export const DragIcon = ({ width = 18, height = 18 }) => {
  return <Drag width={width} height={height} />;
};