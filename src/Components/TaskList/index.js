import React from "react";
import CircularProgressBar from "../CircularSvg";
import { ReactComponent as EditIcon } from "../../Icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../Icons/delete.svg";
import Button from "../Button";
import "./style.css";
import classNames from "classnames";

const TaskList = ({
  task,
  onHandleEditClick,
  onHandlestatusClick,
  onHandleDeleteClick,
}) => {
  const { id, title, priority, status, progress } = task;

  return (
    <div className="List-Card">
      <div className="task-group">
        <span>Task</span>
        <span>{title}</span>
      </div>
      <div className="priority-group">
        <span>Priority</span>
        <span className={classNames(`${priority}-priority`, "priority")}>
          {priority}
        </span>
      </div>
      <div className="status-group">
        <Button
          title={status}
          className="status"
          onHandleClick={onHandlestatusClick}
        />
      </div>
      <div className="circular-svg">
        <CircularProgressBar
          sqSize="24"
          percentage={progress}
          strokeWidth={2}
        />
      </div>
      <div className="actions">
        <EditIcon onClick={() => onHandleEditClick(true, task)} />
        <DeleteIcon onClick={() => onHandleDeleteClick(task)} />
      </div>
    </div>
  );
};

export default TaskList;
