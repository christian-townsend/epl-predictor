import "../styles/App.css";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players.json";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function PlayerTable() {
    // The columns we will render. The value will be used in the Overlay.
  const columns = [
    { header: "Name", definition: "Player's name" },
    { header: "Pos", definition: "Player's position" },
    { header: "Squad", definition: "Player's squad" },
    {
      header: "Starts",
      definition: "How many times the player started this season",
    },
    { header: "Gls", definition: "Goals scored" },
    { header: "Ast", definition: "Assists" },
    { header: "G+A", definition: "Goals + Assists per 90 minutes" },
    { header: "xG", definition: "Expected goals" },
    { header: "xA", definition: "Expected assists" },
    {
      header: "xG+xA",
      definition: "Expected Goals + Expected Assists per 90 minutes",
    },
  ];

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  const Overlay = () =>
    columns.map((key, value) => {
      return (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(key.definition)}
        >
          <th>{key.header}</th>
        </OverlayTrigger>
      );
    });

  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="test">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <Overlay />
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => {
              return (
                <tr>
                  <td>{player.Player}</td>
                  <td>{player.Pos}</td>
                  <td>{player.Squad}</td>
                  <td>{player.Starts}</td>
                  <td>{player.Gls}</td>
                  <td>{player.Ast}</td>
                  <td>{player["G+A"]}</td>
                  <td>{player.xG}</td>
                  <td>{player.xA}</td>
                  <td>{player["xG+xA"]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PlayerTable;
