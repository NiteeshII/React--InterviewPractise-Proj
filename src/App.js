import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import { taskList as TaskData } from "./Data/TaskData";
import Button from "./Components/Button";
import { ReactComponent as AddIcon } from "../src/Icons/add.svg";
import "./App.css";
import AddEditTaskForm from "./Components/AddTaskCardForm/AddEditTaskForm";
import DeleteModal from "./Components/DeleteModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditPressed, setIsEditPressed] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [editTask, setEditTask] = useState(null);
  const [taskData, setTaskData] = useState(TaskData);

  const handleButtonClick = () => {
    setShowModal(true);
    setIsEditPressed(false); // Ensure isEditPressed is false when adding a new task
  };

  const handleEditButton = (bool, data) => {
    setShowModal(true);
    setIsEditPressed(bool);
    setEditTask(data);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setIsEditPressed(false);
    setEditTask({});
  };

  const handledeleteClick = () => {
    const updatedData = [...taskData];
    const updated = updatedData.filter((item) => item.id !== deleteId);
    setTaskData(updated);
    setShowDeleteModal(false);
  };
  const handlestatusClick = (index) => {
    const data = [...taskData];
    const task = data[index];
    if (task.status === "To Do") {
      task.status = "In Progress";
      task.progress = "50";
    } else if (task.status === "In Progress") {
      task.status = "Done";
      task.progress = "100";
    } else {
      task.status = "To Do";
      task.progress = "0";
    }

    setTaskData((prev) => {
      const newdata = [...prev];
      newdata[index] = task;
      return newdata;
    });
  };

  const onAddEditClick = (title, priortiy, id, isEditPressed) => {
    let data = [...taskData];
    if (isEditPressed && id !== undefined) {
      let Index = data.findIndex((item) => item.id === id);
      data[Index].title = title;
      data[Index].priority = priortiy;
      setTaskData(data);
      handleCloseClick();
      return;
    }

    console.log(priortiy);

    let newtask = {
      title: title,
      priority: priortiy,
      status: "To Do",
      progress: 0,
      id: new Date().getTime(),
    };

    data = [newtask, ...taskData];
    setTaskData(data);
    handleCloseClick();
  };

  return (
    <div className="TaskList-container">
      <div className="TaskList-wrapper">
        <div className="TaskList-title">
          <h2>Task List</h2>
          <Button
            onHandleClick={handleButtonClick}
            title="Add Task"
            icon={<AddIcon />}
          />
        </div>
        <div className="List-container">
          {taskData?.map((item, index) => {
            return (
              <TaskList
                key={item.id}
                task={item}
                onHandleEditClick={handleEditButton}
                onHandlestatusClick={() => handlestatusClick(index)}
                onHandleDeleteClick={() => {
                  setDeleteId(item.id);
                  setShowDeleteModal(true);
                }}
              />
            );
          })}
        </div>
      </div>
      {showModal && (
        <AddEditTaskForm
          onHideModal={handleCloseClick}
          isEditPressed={isEditPressed}
          editTask={editTask}
          onAddEditClick={onAddEditClick}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          onCancelClick={() => setShowDeleteModal(false)}
          onDeleteClick={handledeleteClick}
        />
      )}
    </div>
  );
}

export default App;
