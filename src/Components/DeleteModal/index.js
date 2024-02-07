import React from "react";
import Button from "../Button";
import Modal from "../Modals";

function DeleteModal({ onDeleteClick, onCancelClick }) {
  return (
    <Modal>
      <div className="deleteModal-container">
        <p>Are you Sure you want to delete ?</p>
        <div className="delete-actions">
          <Button title="Delete" onHandleClick={onDeleteClick} />
          <Button title="Cancel" onHandleClick={onCancelClick} />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
