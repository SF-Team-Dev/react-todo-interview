import React from "react";
import NavBar from "./components/NavB";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


// Dispatch des components

function App() {
  return (
    <div className='m-5'>
      <NavBar></NavBar>
      <TaskInput></TaskInput>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
