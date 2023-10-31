import React from "react";
import "./css/Button.css";
function Button({ size, title, onClick }) {
  return (
    <button className={size} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
