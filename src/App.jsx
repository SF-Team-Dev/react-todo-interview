import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";

// Should have been the TaskManager maybe

function App() {
  return (
    <div className="App m-5">
      <Form>
      <Header />
      <div>
        <div>
          <TaskInput />
        </div>
        <div>
          <div>
            <TaskList />
          </div>
        </div>
      </div>
      </Form>
    </div>
  );
}

export default App;
