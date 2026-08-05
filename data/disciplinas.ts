import { Professor, professores } from "./professores";

export type Disciplina = {
  id: number;
  nome: string;
  professores: Professor[];
}

export const disciplinas: Disciplina[] = [
  { id: 1, nome: 'teste', professores: [professores.get(1)!] }
];