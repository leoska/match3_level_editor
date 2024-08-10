import IConfig, { IFieldConfig } from "../types/IConfig";
import type ITool from "../types/ITool";
import type IGem from "../types/IGem";
import rawConfig from "../../config/base.json";
import deepFreeze from "../utils/deepFreeze";

const config = deepFreeze(rawConfig) as IConfig;

export class Config {
  private field: IFieldConfig;
  private gems: Map<string, IGem>;
  private defaultGemName: string;

  constructor() {
    this.field = config.field as IFieldConfig;
    this.gems = new Map<string, IGem>();

    for (const gem of config.gems) {
      if (this.gems.has(gem.name)) {
        throw new Error(`Gem ${gem.name} already exists`);
      }

      this.gems.set(gem.name, gem);
    }

    if (!this.gems.has(config.defaultGemName)) {
      throw new Error(`${config.defaultGemName} not define in gems array`);
    }

    this.defaultGemName = config.defaultGemName;
  }

  get defaultBoardWidth(): number {
    return this.field.default.width;
  }

  get defaultBoardHeight(): number {
    return this.field.default.height;
  }

  get defaultGem(): string {
    return this.defaultGemName;
  }
}

const configInstance = new Config();

export default configInstance;
