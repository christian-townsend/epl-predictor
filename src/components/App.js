import logo from "../../src/logo.png";
import "../styles/App.css";
import React, { useState } from "react";
import {
  Table,
  InputGroup,
  Navbar,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players.json";
import PlayerTable from "./PlayerTable.jsx";

players.sort();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Players</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Clubs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Navbar.Brand href="#home">EPL Predictor</Navbar.Brand>
        </Nav>
      </Navbar>
      <PlayerTable />
    </div>
  );
}

export default App;
