import { Evento } from "../Evento/Evento";
import { Usuario } from "../Usuario/Usuario";

export class Ingresso {
    id: number = 0;
    preco: number | null = null; 
    eventoId: number | null = null; 
    evento: Evento | undefined;
    usuarioId: number | null = null; 
    usuario: Usuario | undefined;
}