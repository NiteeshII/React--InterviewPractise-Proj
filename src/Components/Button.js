import React from "react";

function Button({ title, icon, className, onHandleClick, isDisabled = false }) {
  return (
    <button className={className} onClick={onHandleClick} disabled={isDisabled}>
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}

export default Button;
