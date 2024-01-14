import React, { useRef } from "react";
import "./index.css";

export default function Canvas(): JSX.Element {
  const canvasRef = useRef(null);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-editor__border-gradient"
      width="480"
      height="480"
    />
  );
}
