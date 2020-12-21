import React from "react";
import "./style/Header.css";
import { useSelector } from "react-redux";

// Conponent for that set the count

function Counter() {
  let tasks = useSelector((state) => state);
  return (
    <div className="counter__color my-4">
      <p>Number of Task :</p>
      <p className="counter__tab">{tasks.length}</p>
    </div>
  );
}

export default Counter;
