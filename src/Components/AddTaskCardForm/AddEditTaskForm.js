import React, { useState } from "react";
import Modal from "../Modals";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";
import Button from "../Button";
import classNames from "classnames";

function AddEditTaskForm({
  onHideModal,
  isEditPressed,
  editTask,
  onAddEditClick,
}) {
  const { id, title: editTitle, priority: editPriority } = editTask || {};

  const [Addtitle, setAddTtitle] = useState(editTitle || "");
  const [AddPriortiy, setAddPriority] = useState(editPriority || "low");

  return (
    <Modal>
      <div className="AddEdit-container">
        <div className="AddEdit-wrapper">
          <div className="AddEdit-header">
            <span>{!isEditPressed ? "Add Task" : "Edit Task"}</span>
            <span>
              <CloseIcon onClick={onHideModal} />
            </span>
          </div>
          <div className="Input-container">
            <span className="task-label">Task</span>
            <span className="task-Input">
              <input
                type="text"
                placeholder="Type your task here..."
                value={Addtitle}
                onChange={(e) => setAddTtitle(e.target.value)}
              />
            </span>
          </div>
          <div className="Priority-container">
            <span className="priority-label">Priority</span>
            <ul className="priority-buttons">
              {["low", "medium", "high"].map((priority) => {
                return (
                  <li
                    key={priority}
                    onClick={() => setAddPriority(priority)}
                    className={classNames(
                      `${
                        AddPriortiy === priority
                          ? `${AddPriortiy}-selected`
                          : ``
                      }`,
                      priority
                    )}
                  >
                    {priority}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button
              title={isEditPressed ? "Edit" : "Add"}
              onHandleClick={() =>
                onAddEditClick(Addtitle, AddPriortiy, id, isEditPressed)
              }
              isDisabled={Addtitle === ""}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddEditTaskForm;
