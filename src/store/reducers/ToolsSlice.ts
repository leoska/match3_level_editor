import type IGem from "../../types/IGem";
import config from "../../utils/config";
import type { ISubToolConfig } from "../../types/IConfig";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToolsState {
  toolType: string;
  subTool: IGem | null;
}

const initialState: IToolsState = {
  toolType: "",
  subTool: null,
};

export const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    selectSubTool(state: IToolsState, action: PayloadAction<number>) {
      const toolConfig = config.getTool(state.toolType);

      const newSubTool = toolConfig.subtools.find(
        ({ id }: ISubToolConfig) => id === action.payload,
      );

      if (newSubTool === undefined)
        throw new Error("Selected sub-tool not found in config!");

      state.subTool = newSubTool as IGem;
    },
  },
});

export default toolSlice.reducer;
