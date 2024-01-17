import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type ILayers from "../../types/iLayers";

const defaultBoardWidth = 9;
const defaultBoardHeight = 9;

interface IBoardState {
    width: number;
    height: number;
    randomSeed?: number;
    layers: ILayers;
}

export interface CellPayload {
    pos: number;
    value: number;
}

const initialState: IBoardState = {
    width: defaultBoardWidth,
    height: defaultBoardHeight,
    layers: {
        gems: Array(defaultBoardHeight * defaultBoardWidth).fill(0),
    },
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
        setCell(state: IBoardState, action: PayloadAction<CellPayload>) {
            state.layers.gems[action.payload.pos] = action.payload.value;
        }
    }
});

export default boardSlice.reducer;