export interface IFieldDefaultConfig {
  readonly width: number;
  readonly height: number;
}

export interface IFieldConfig {
  readonly default: IFieldDefaultConfig;
}

export interface ISubToolConfig {
  readonly id: number;
}

export interface IToolConfig {
  readonly name: string;
  readonly layer: string;
  readonly subtools: ISubToolConfig[];
}

export interface IToolsConfig {
  readonly [key: string]: IToolConfig;
}

export default interface IConfig {
  readonly field: IFieldConfig;
  readonly layers: string[];
  readonly tools: IToolsConfig;
}
