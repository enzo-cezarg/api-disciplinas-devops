import { Professor, professores } from "./professores";

export type Disciplina = {
  id: number;
  nome: string;
  professores: Professor[];
}

export const disciplinas: Disciplina[] = [
  { id: 1, nome: 'Engenharia de Software', professores: [professores.get(1)!, professores.get(2)!] },
  { id: 2, nome: 'Lógica e Programação de Computadores', professores: [professores.get(3)!] },
  { id: 3, nome: 'Matemática Aplicada à Computação', professores: [professores.get(4)!, professores.get(5)!] },
  { id: 4, nome: 'Banco de Dados', professores: [professores.get(6)!, professores.get(7)!] },
  { id: 5, nome: 'Fundamentos de Sistemas Web', professores: [professores.get(8)!, professores.get(9)!] },
  { id: 6, nome: 'Programação Orientada a Objetos', professores: [professores.get(10)!, professores.get(11)!] },
  { id: 7, nome: 'Ciência de Dados e Inteligência Artificial', professores: [professores.get(12)!, professores.get(13)!] },
  { id: 8, nome: 'Infraestrutura de Sistemas Computacionais', professores: [professores.get(14)!, professores.get(15)!] },
  { id: 9, nome: 'Desenvolvimento de Sistemas Frontend', professores: [professores.get(16)!, professores.get(17)!] },
  { id: 10, nome: 'Ética e Espiritualidade', professores: [professores.get(18)!] },
  { id: 11, nome: 'Desenvolvimento de Sistemas Backend', professores: [professores.get(10)!, professores.get(11)!] },
  { id: 12, nome: 'Empreendedorismo e Modelagem de Soluções', professores: [professores.get(19)!] },
  { id: 13, nome: 'Segurança para Computação em Nuvem', professores: [professores.get(20)!, professores.get(21)!] },
  { id: 14, nome: 'Desenvolvimento de Sistemas Mobile', professores: [professores.get(22)!, professores.get(13)!, professores.get(10)!] },
  { id: 15, nome: 'Empreendedorismo e Desenvolvimento de Soluções', professores: [professores.get(23)!] },
  { id: 16, nome: 'Comportamento Organizacional na TI', professores: [professores.get(24)!, professores.get(25)!] },
  { id: 17, nome: 'Gerenciamento de Projetos na TI', professores: [professores.get(1)!, professores.get(26)!] },
  { id: 18, nome: 'Disciplina Integradora de Desenvolvimento de Projetos', professores: [professores.get(1)!, professores.get(10)!, professores.get(17)!] },
  { id: 19, nome: 'DevOps na Prática', professores: [professores.get(17)!, professores.get(27)!] }
];