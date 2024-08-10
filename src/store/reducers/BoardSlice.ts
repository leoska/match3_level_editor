import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Config from "../../config";
import { IGemItem } from "../../types/IGem";

const DEFAULT_BOARD_WIDTH = 9;
const DEFAULT_BOARD_HEIGHT = 9;

const boardWidth = Config.defaultBoardWidth || DEFAULT_BOARD_WIDTH;
const boardHeight = Config.defaultBoardHeight || DEFAULT_BOARD_HEIGHT;

interface IBoardState {
    width: number;
    height: number;
    randomSeed?: number;
    gems: IGemItem[];
}

export interface CellPayload {
    pos: number;
    value: number;
}

const initialState: IBoardState = {
    width: boardWidth,
    height: boardHeight,
    gems: [],
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
            // TODO: написать фабрику классов Gem
            state.gems[action.payload.pos] = action.payload.value;
        },
    },
});

export default boardSlice.reducer;