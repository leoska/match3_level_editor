import React from "react";
import ToolBar from "../ToolBar";
import Canvas from "../Canvas";
import "./index.css";

export default function Editor(): JSX.Element {
  return (
    <div className="editor">
      <ToolBar />
      <Canvas />
    </div>
  );
}
