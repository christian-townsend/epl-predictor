import "../styles/App.css";
import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerTable from "./PlayerTable.jsx";
import Footer from "./footer.jsx";

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
      <div style={{ position: "fixed", bottom: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
