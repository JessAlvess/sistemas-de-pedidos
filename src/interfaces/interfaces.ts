export interface Menu {
    restaurante: string;
    pratos_principais: {
      nome: string,
      descricao: string,
      preco: number,
      id: number
    }[];
    sobremesas: {
      nome: string,
      descricao: string,
      preco: number,
      id: number
    }[];
    bebidas: {
      nome: string,
      descricao: string,
      preco: number,
      id: number
    }[]
  }