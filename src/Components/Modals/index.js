import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const ModalOverlay = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal-content">{children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");

function Modal({ children }) {
  return (
    <Fragment>
      {createPortal(<ModalOverlay children={children} />, PortalElement)}
    </Fragment>
  );
}

export default Modal;
