import React from "react";
import Cell from "../../components/Cell";
import { useAppSelector } from "../../store/hooks";
import "./index.css";

export default function Board() {
  const { subTool } = useAppSelector((state) => state.toolReducer);
  const { height, width } = useAppSelector((state) => state.boardReducer);

  const rows: [number, number][][] = [];

  for (let y = 0; y < height; ++y) {
    const row: [number, number][] = [];
    for (let x = 0; x < width; ++x) {
      row.push([x, y]);
    }
    rows.push(row);
  }

  let light = false;

  return (
    <div className="board" style={{ height: height * 50, width: width * 50 }}>
      {rows.map((row, index) => {
        if (width % 2 === 0) light = !light;

        return (
          <div key={`board_row_${index}`} className="board__row">
            {row.map(([x, y]) => {
              light = !light;
              return (
                <Cell
                  key={`board_elem_${x}_${y}`}
                  light={light}
                  onClick={() => {
                    console.log({ x, y });
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
