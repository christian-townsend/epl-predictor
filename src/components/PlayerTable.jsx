import "../styles/App.css";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import players from "./players.json";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function PlayerTable() {
  const columns = {
    Name: "Player's name",
    Pos: "Player's position",
    Squad: "Player's squad",
    Starts: "How many times the player started this season",
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props}
    </Tooltip>
  );

  const Overlay = () =>
    Object.entries(columns).map(([key, value]) => {
      return (
        <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(value)}
        >
          <th>{key}</th>
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
