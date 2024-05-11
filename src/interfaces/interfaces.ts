export interface Cardapio {
    restaurante: string;
    pratos_principais: {
      nome: string,
      descricao: string,
      preco: number
    }[];
    sobremesas: {
      nome: string,
      descricao: string,
      preco: number
    }[];
    bebidas: {
      nome: string,
      descricao: string,
      preco: number
    }[];
  }