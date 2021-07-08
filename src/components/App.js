import logo from "../../src/logo.png";
import "../styles/App.css";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import scores from "./scores.json";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {Object.keys(scores).map((item, index) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.keys(scores).map((item, index) => {
            return (
              <tr>
                {Object.keys(scores).map((item, index) => {
                  return <th>{item}</th>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
