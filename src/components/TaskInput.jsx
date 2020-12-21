import React, { useState } from "react";
import { addTask } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

// The task input and the id generator uuid

function TaskInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter task name"
          type="text"
          className="col form-control sm={8}"
        />
        <Button
          onClick={() => {
            dispatch(
              addTask({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
          className=" btn {{ span: 2, offset: 2 }} mx-4"
          variant="outline-primary"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default TaskInput;
