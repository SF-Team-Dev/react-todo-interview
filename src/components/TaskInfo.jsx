import React from "react";

// Component child of the TaskList component

function TaskInfo(props) {
  return (
    <div onClick={props.onClick}>
      <div className="row mx-2 align-items-center">
        <div className="col">
          <h4><span role="img" aria-label="">📋</span>{props.task.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default TaskInfo;
