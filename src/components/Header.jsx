import React from "react";
import { Navbar } from "react-bootstrap";
import Counter from "./Counter";
import "./style/Header.css";

// The navbar

function Header() {
  return (
    <div>
      <Navbar className="row navbar__header" variant="light">
        <Navbar.Brand className="col sm={8}" href="#home">
          TO DO LIST
        </Navbar.Brand>
        <Counter className="col sm={4} " />
      </Navbar>
    </div>
  );
}

export default Header;
