import React from "react";
import "./Button.css";
function Button({ size, title, onClick }) {
  return (
    <button className={size} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
