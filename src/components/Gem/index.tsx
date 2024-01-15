import React from "react";
import cn from "classnames";
import { toolSlice } from "../../store/reducers/ToolsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./index.css";

export declare interface IGemProps {
  id: number;
  name: string;
}

export default function Gem({ id, name }: IGemProps): JSX.Element {
  const { subTool } = useAppSelector((state) => state.toolReducer);
  const { selectSubTool } = toolSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div
      id={`gem_${id}`}
      className={cn("gem", "noselect", { "gem-selected": id === subTool?.id })}
      style={{ backgroundImage: `url(assets/gems/${name}.png)` }}
      onClick={() => dispatch(selectSubTool(id))}
    />
  );
}
