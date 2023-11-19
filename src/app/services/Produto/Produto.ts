import { Kit } from "../Kit/Kit";
import { Organizador } from "../Organizador/Organizador";

export class Produto
{
    id: number = 0;
    nome: string = '';
    descricao: string = '';
    preco: number = 0;
    organizadorId : number = 0;
    organizador : Organizador | undefined;
    kits: Array<Kit> = new Array<Kit>();
}
