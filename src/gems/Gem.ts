import { IGemItem } from "../types/IGem";

export default class Gem implements IGemItem {
  private id: number = 1;
  private name: string = "";

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public toString() {
    return "";
  }
}