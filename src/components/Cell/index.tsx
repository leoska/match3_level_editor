import React from "react";
import cn from "classnames";
import "./index.css";

export declare interface ICellProps {
  light: boolean;
  onClick: () => void;
}

export default function Cell({ light, onClick }: ICellProps): JSX.Element {
  return (
    <div
      className={cn("cell", { cell__light: light, cell__shadow: !light })}
      onClick={onClick}
    ></div>
  );
}
