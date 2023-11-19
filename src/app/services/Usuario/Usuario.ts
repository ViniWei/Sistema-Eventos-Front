export class Usuario {
    id: number = 0;
    nome?: string;
    senha?: string;
    email?: string;
    dataNascimento?: Date;
    cpf?: string;
    planos?: Plano[] = [];
}

export class Plano {
}