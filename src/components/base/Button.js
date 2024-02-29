import React from "react";

export const Button = ({ children, style, onClick, ...restProps }) => {
  return (
    <button style={style} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};
