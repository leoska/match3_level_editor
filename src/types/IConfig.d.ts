import type ITool from "./ITool";
import type IGem from "./IGem";

export interface IFieldDefaultConfig {
  readonly width: number;
  readonly height: number;
  readonly targetMoves: number;
}

export interface IFieldConfig {
  readonly default: IFieldDefaultConfig;
}

export interface IToolsConfig {
  readonly [key: string]: ITool;
}

export default interface IConfig {
  readonly field: IFieldConfig;
  readonly tools: IToolsConfig;
  readonly gems: IGem[];
  readonly defaultGemName: string;
}
