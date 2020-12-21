import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";
import TaskDetail from "./TaskDetail";

// Component that handle the Edite part of the app

function EditableTaskName(props) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(props.task.name);
  const dispatch = useDispatch();

  return (
    <div>
      {Object.keys(props.task).length ? (
        <div className="mx-2 align-items-center">
          <div className="col sm={12}">
            <div className="row">
              <InputGroup className="col sm={9} ">
                {editable ? (
                  <FormControl
                    type="text"
                    placeholder="Enter new task name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <h4>{props.task.name}</h4> //name must change after editing but... it doesn't
                )}
              </InputGroup>
              <Button
                onClick={() => {
                  dispatch(
                    updateTask({
                      ...props.task,
                      name: name,
                    })
                  );
                  if (editable) {
                    setName(props.task.name);
                  }
                  setEditable(!editable);
                }}
                className="btn  mx-2 "
                variant="outline-primary"
              >
                {editable ? "Update" : "Edit"}
              </Button>
              <Button
                onClick={() => dispatch(deleteTask(props.task.id))}
                className="btn mx-2   "
                variant="outline-danger"
              >
                Delite{" "}
              </Button>
            </div>
          </div>
          <TaskDetail task={props.task} />
        </div>
      ) : (
        <h3>Select a task to edit!</h3>
      )}
    </div>
  );
}

export default EditableTaskName;
