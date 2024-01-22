import React from "react";

function Cell({ filled, onClick, isDisabled }) {
  return (
    <button
      type="button"
      className={filled ? " cell cell-activated" : "cell"}
      onClick={onClick}
      disabled={isDisabled}
    />
  );
}

export default Cell;
