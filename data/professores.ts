export type Professor = {
  id: number;
  nome: string;
}

const professoresList: Professor[] = [
  { id: 1, nome: 'fulano de tal' }
];

export const professores: Map<number, Professor> = new Map(
  professoresList.map((professor) => [professor.id, professor])
);