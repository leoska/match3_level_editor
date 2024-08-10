import Gem from "./Gem";
import IGem from "../types/IGem";

export default class GemFactory {
  public static CreateGem(gem: IGem) {
    return new Gem(gem.id, gem.name);
  }
}