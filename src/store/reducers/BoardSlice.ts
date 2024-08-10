import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Config from "../../config";
import type IGem from "../../types/IGem";

const DEFAULT_BOARD_WIDTH = 9;
const DEFAULT_BOARD_HEIGHT = 9;

const boardWidth = Config.defaultBoardWidth || DEFAULT_BOARD_WIDTH;
const boardHeight = Config.defaultBoardHeight || DEFAULT_BOARD_HEIGHT;

interface IBoardState {
    width: number;
    height: number;
    randomSeed?: number;
    gems: number[];
}

export interface CellPayload {
    pos: number;
    value: number;
}

const initialState: IBoardState = {
    width: boardWidth,
    height: boardHeight,
    gems: Array(boardWidth * boardHeight).fill(Config.defaultGemID),
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setWidth(state: IBoardState, action: PayloadAction<number>) {
            state.width = action.payload;
        },
        setHeight(state: IBoardState, action: PayloadAction<number>) {
            state.height = action.payload;
        },
        setGem(state: IBoardState, action: PayloadAction<CellPayload>) {
            state.gems[action.payload.pos] = action.payload.value;
            state.layers.gems[action.payload.pos]
        },
    },
});

export default boardSlice.reducer;