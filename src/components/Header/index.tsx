import React from "react";
import { Button } from "@gravity-ui/uikit";
import "./index.css";

export default function Header(): JSX.Element {
  return (
    <header>
      <h1>Match 3 Level Editor</h1>
      <div className="header-buttons">
        <Button
          view="outlined-action"
          width="auto"
          size="l"
          title="Reset current level data"
        >
          Reset Level
        </Button>
        <Button
          view="outlined-info"
          width="auto"
          size="l"
          title="Load level data from file"
        >
          Load Level
        </Button>
        <Button
          view="outlined-success"
          width="auto"
          size="l"
          title="Save level data to file"
        >
          Save Level
        </Button>
      </div>
    </header>
  );
}
