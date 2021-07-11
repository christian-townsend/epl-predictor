import logo from "../../src/logo.png";
import "../styles/App.css";
import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players.json";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>
        Example heading <Badge variant="primary">Players</Badge>
      </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Appearances</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Penalty Goals</th>
            <th>Penalty Misses</th>
            <th>Goals involved in per 90</th>
            <th>Assists involved in per 90</th>
            <th>Goals per 90</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => {
            return (
              <tr>
                <td>{player.full_name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>{player.appearances_overall}</td>
                <td>{player.goals_overall}</td>
                <td>{player.assists_overall}</td>
                <td>{player.penalty_goals}</td>
                <td>{player.penalty_misses}</td>
                <td>{player.goals_involved_per_90_overall}</td>
                <td>{player.assists_per_90_overall}</td>
                <td>{player.goals_per_90_overall}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
