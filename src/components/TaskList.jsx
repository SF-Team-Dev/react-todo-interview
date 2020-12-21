import React, { useState } from "react";
import TaskInfo from "./TaskInfo";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import EditableTaskName from "./EditableTaskName";


// Component that handle the map of the tasks list and parent of EditableTaskName component

function TaskList() {
  let tasks = useSelector((state) => state);
  const [currentTask, setCurrentTask] = useState({});

  return (
    <div className="my-4 row">
      <div className="col sm={4}">
        <h3>Tasks</h3>
        <ListGroup>
          {tasks.map((task) => {
            return (
              <ListGroup.Item className="row">
                <TaskInfo
                  onClick={() => setCurrentTask(task)}
                  key={task.id}
                  task={task}
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="col sm={8}">
        <EditableTaskName task={currentTask} />
      </div>
    </div>
  );
}

export default TaskList;
