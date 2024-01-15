import type IGem from "../../types/IGem";
import gemsConfig from "../../config/gems.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToolsState {
    toolType: string;
    subTool: IGem | null;
}

const initialState: IToolsState = {
    toolType: 'gems',
    subTool: gemsConfig[0],
}

export const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        selectSubTool(state: IToolsState, action: PayloadAction<number>) {
            const newSubTool = gemsConfig.find(({ id }: IGem) => id === action.payload);

            if (newSubTool === undefined)
                throw new Error('Selected sub-tool not found in config!');

            state.subTool = newSubTool;
        }
    }
});

export default toolSlice.reducer;