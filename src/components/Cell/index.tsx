import React from "react";
import cn from "classnames";
import "./index.css";

export declare interface ICellProps {
  light: boolean;
  gemName?: string;
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export default function Cell({
  light,
  gemName,
  onClick,
}: ICellProps): JSX.Element {
  const style = {};
  if (gemName) style["backgroundImage"] = `url(assets/gems/${gemName}.png)`;

  return (
    <div
      className={cn("cell", { cell__light: light, cell__shadow: !light })}
      style={style}
      onClick={onClick}
    ></div>
  );
}
