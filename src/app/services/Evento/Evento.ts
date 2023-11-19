import { Organizador } from "../Organizador/Organizador";

export class Evento {
    id: number = 0;
    nome?: string;
    descricao?: string;
    date?: Date;
    endereco?: string;
    organizadorId?: number;
    ingressosDisponiveis?: number;
    organizador?: OrganizadorEvento;
}

export class OrganizadorEvento extends Organizador {
}