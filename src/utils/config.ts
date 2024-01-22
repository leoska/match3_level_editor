import config from "../config/config.json";
import IConfig, { IToolConfig } from "../types/IConfig";
import deepFreeze from "./deepFreeze";

export class Config {
  private config: IConfig = deepFreeze(structuredClone(config)) as IConfig;

  private tools: { [key: string]: IToolConfig } = {};

  constructor() {
    for (const toolConfig of Object.values(this.config.tools)) {
      this.tools[toolConfig.name] = toolConfig;
    }
  }

  public getTool(name: string): IToolConfig {
    if (!(name in this.tools))
      throw new Error(`${name} property is undefined in tools config!`);

    return this.tools[name];
  }

  public getToolsAsArray(): IToolConfig[] {
    return Object.values(this.tools);
  }
}

const configInstance = new Config();

export default configInstance;
