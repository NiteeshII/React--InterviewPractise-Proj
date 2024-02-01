import React from "react";

function InputChck(props) {
  return (
    <div className="chckbox">
      <input
        type="checkbox"
        value={props.title}
        onChange={props.handleChange}
        checked={props.isChecked}
      />
      <label>{props.title}</label>
    </div>
  );
}

export default InputChck;
