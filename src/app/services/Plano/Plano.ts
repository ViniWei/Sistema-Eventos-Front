import { Organizador } from "../Organizador/Organizador";
import { Usuario } from "../Usuario/Usuario";

export class Plano {
    nome?: string;
    descricao?: string;
    preco?: number;
    organizadorId?: number;
    organizador?: Organizador;
    usuarios?: Usuario[];
}