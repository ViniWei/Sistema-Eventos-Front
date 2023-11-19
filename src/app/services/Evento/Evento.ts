import { Atuante } from "../Atuante/Atuante";
import { Organizador } from "../Organizador/Organizador";

export class Evento {
    id: number = 0;
    nome: string = '';
    descricao: string = '';
    date?: Date;
    endereco?: string;
    ingressosDisponiveis?: number;
    organizadorId?: number;
    organizador: Organizador | undefined;
}
