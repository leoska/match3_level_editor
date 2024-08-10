import React, { CSSProperties, ReactElement } from "react";
import type * as CSS from 'csstype';
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
}: ICellProps): ReactElement {
  const style: CSSProperties = {};
  if (gemName) {
    style.backgroundImage = `url(assets/gems/${gemName}.png)` as CSS.Property.BackgroundImage;
  }

  return (
    <div
      className={cn("cell", { cell__light: light, cell__shadow: !light })}
      style={style}
      onClick={onClick}
    />
  );
}
