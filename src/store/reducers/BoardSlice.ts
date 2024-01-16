import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBoardState {
    width: number;
    height: number;
    randomSeed?: number;
}

const initialState: IBoardState = {
    width: 9,
    height: 9,
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
    }
});

export default boardSlice.reducer;