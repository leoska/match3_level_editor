import React from "react";
import Cell from "../../components/Cell";
import { useAppSelector } from "../../store/hooks";
import { boardSlice } from "../../store/reducers/BoardSlice";
import { useAppDispatch } from "../../store/hooks";
import gemsConfig from "../../config/gems.json";
import IGem from "../../types/IGem";
import type { CellPayload } from "../../store/reducers/BoardSlice";
import "./index.css";

interface ICellData {
  x: number;
  y: number;
  gemName: string;
}

export default function Board() {
  const { subTool } = useAppSelector((state) => state.toolReducer);
  const { height, width, layers } = useAppSelector(
    (state) => state.boardReducer,
  );
  const { setCell } = boardSlice.actions;
  const dispatch = useAppDispatch();

  const gemCache: { [key: number]: string } = {};
  gemsConfig.forEach(({ id, name }: IGem) => (gemCache[id] = name));

  const rows: ICellData[][] = [];

  for (let y = 0; y < height; ++y) {
    const row: ICellData[] = [];
    for (let x = 0; x < width; ++x) {
      const yPos = y * width;

      row.push({
        x,
        y,
        gemName: gemCache[layers.gems[yPos + x]],
      });
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
            {row.map(({ x, y, gemName }: ICellData) => {
              light = !light;
              return (
                <Cell
                  key={`board_elem_${x}_${y}`}
                  light={light}
                  gemName={gemName}
                  onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    dispatch(
                      setCell({
                        pos: y * width + x,
                        value: e.shiftKey ? 0 : subTool?.id ?? 0,
                      } as CellPayload),
                    );
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
