import * as cardapio from "../cardapio.json";
import { Cardapio } from "../interfaces/interfaces";

export class WaiterService {
  cardapio: Cardapio;

  constructor(database = cardapio) {
    this.cardapio = database;
  }

  getCardapio = () => {
    return cardapio;
  };
}
