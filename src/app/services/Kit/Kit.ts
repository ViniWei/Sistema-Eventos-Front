import { Organizador } from "../Organizador/Organizador";
import { Produto } from "../Produto/Produto"

export class Kit {
    id: number  = 0;
    nome: string  = '';
    descricao: string = '';
    preco: number = 0;
    organizadorId: number = 0;
    organizador: Organizador | undefined
    produtos: Array<Produto> = new Array<Produto>();
}