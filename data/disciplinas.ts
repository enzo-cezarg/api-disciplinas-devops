import { Professor, professores } from "./professores";

export type Disciplina = {
  id: number;
  nome: string;
  trimestre: number;
  eletiva: boolean;
  professores: Professor[];
}

export const disciplinas: Disciplina[] = [
  { id: 1, nome: 'Engenharia de Software', trimestre: 1, professores: [professores.get(1)!, professores.get(2)!], eletiva: false },
  { id: 2, nome: 'Lógica e Programação de Computadores', trimestre: 1, professores: [professores.get(3)!], eletiva: false },
  { id: 3, nome: 'Matemática Aplicada à Computação', trimestre: 2, professores: [professores.get(4)!, professores.get(5)!], eletiva: false },
  { id: 4, nome: 'Banco de Dados', trimestre: 2, professores: [professores.get(6)!, professores.get(7)!], eletiva: false },
  { id: 5, nome: 'Fundamentos de Sistemas Web', trimestre: 3, professores: [professores.get(8)!, professores.get(9)!], eletiva: false },
  { id: 6, nome: 'Programação Orientada a Objetos', trimestre: 3, professores: [professores.get(10)!, professores.get(11)!], eletiva: false },
  { id: 7, nome: 'Ciência de Dados e Inteligência Artificial', trimestre: 4, professores: [professores.get(12)!, professores.get(13)!], eletiva: false },
  { id: 8, nome: 'Infraestrutura de Sistemas Computacionais', trimestre: 4, professores: [professores.get(14)!, professores.get(15)!], eletiva: false },
  { id: 9, nome: 'Desenvolvimento de Sistemas Frontend', trimestre: 5, professores: [professores.get(16)!, professores.get(17)!], eletiva: false },
  { id: 10, nome: 'Ética e Espiritualidade', trimestre: 5, professores: [professores.get(18)!], eletiva: false },
  { id: 11, nome: 'Desenvolvimento de Sistemas Backend', trimestre: 6, professores: [professores.get(10)!, professores.get(11)!], eletiva: false },
  { id: 12, nome: 'Empreendedorismo e Modelagem de Soluções', trimestre: 7, professores: [professores.get(19)!], eletiva: false },
  { id: 13, nome: 'Segurança para Computação em Nuvem', trimestre: 7, professores: [professores.get(20)!, professores.get(21)!], eletiva: false },
  { id: 14, nome: 'Desenvolvimento de Sistemas Mobile', trimestre: 8, professores: [professores.get(22)!, professores.get(13)!, professores.get(10)!], eletiva: false },
  { id: 15, nome: 'Empreendedorismo e Desenvolvimento de Soluções', trimestre: 8, professores: [professores.get(23)!], eletiva: false },
  { id: 16, nome: 'Comportamento Organizacional na TI', trimestre: 9, professores: [professores.get(24)!, professores.get(25)!], eletiva: false },
  { id: 17, nome: 'Gerenciamento de Projetos na TI', trimestre: 9, professores: [professores.get(1)!, professores.get(26)!], eletiva: false },
  { id: 18, nome: 'Disciplina Integradora de Desenvolvimento de Projetos', trimestre: 10, professores: [professores.get(1)!, professores.get(10)!, professores.get(17)!], eletiva: false },
  { id: 19, nome: 'DevOps na Prática', trimestre: 10, professores: [professores.get(17)!, professores.get(27)!], eletiva: false },
  { id: 20, nome: 'Jornada e Experiência do Usuário', trimestre: 6, professores: [professores.get(28)!, professores.get(29)!], eletiva: true }
];