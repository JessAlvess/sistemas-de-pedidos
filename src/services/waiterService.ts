import  menu from "../cardapio.json";
import { Menu } from "../interfaces/interfaces";

export class WaiterService {
  menu: Menu;
  
  constructor(
    database = menu
  ){
    this.menu = database
  }

  getMenu = () => {    
    return menu;
  };
}