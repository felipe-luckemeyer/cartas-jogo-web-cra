import React from "react";
import * as s from "./styled-menu-button";

const MenuButton = ({ text, path, disabled }) => {
  return <s.Button to={path}>{text}</s.Button>;
};

export default MenuButton;
