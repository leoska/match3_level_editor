import config from "../config/config.json";
import IConfig from "../types/IConfig";
import deepFreeze from "./deepFreeze";

export class Config {
  private config: IConfig = deepFreeze(structuredClone(config)) as IConfig;

  public get(property: string): any {
    return property
      .split(".")
      .reduce((obj, key) => obj?.[key as keyof object], this.config);
  }
}

const configInstance = new Config();

export default configInstance;
