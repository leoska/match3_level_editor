import React from "react";
import ToolBar from "../ToolBar";
import Canvas from "../../components/Canvas";
import "./index.css";

export default function Editor(): JSX.Element {
  return (
    <div className="editor">
      <ToolBar />
      <div>
        <div className="editor-canvas__border-gradient">
          <Canvas />
        </div>
        <p className="editor__instructions">
          <strong>Click</strong> to paint.
          <strong>Shift+Click</strong> to remove.
        </p>
      </div>
    </div>
  );
}
