import React from "react";

const Button = ({ title, type = "primary", size, width, ...props }) => {
  return (
    <button
      style={{ fontSize: size, width: width ? width : 'auto' }}
      {...props}
      className={"mi-button " + "mi-button-" + type}
    >
      {title}
    </button>
  );
};

export default Button;
