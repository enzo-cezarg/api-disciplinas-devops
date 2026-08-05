export type Professor = {
  id: number;
  nome: string;
}

const professoresList: Professor[] = [
  { id: 1, nome: 'Alessandra Costa Smolenaars Dutra' },
  { id: 2, nome: 'Ana Paula Terra Bacelo' },
  { id: 3, nome: 'Marcelo Cohen' },
  { id: 4, nome: 'Lucilia Gomes Donato' },
  { id: 5, nome: 'Daniela Rodrigues' },
  { id: 6, nome: 'Daniel Callegari' },
  { id: 7, nome: 'Azriel Majdenbaum' },
  { id: 8, nome: 'Anderson Royes Terroso' },
  { id: 9, nome: 'Andrea Aparecida Konzen' },
  { id: 10, nome: 'Júlio Henrique Araújo Pereira Machado' },
  { id: 11, nome: 'Bernardo Copstein' },
  { id: 12, nome: 'Duncan Dubugras Alcoba Ruiz' },
  { id: 13, nome: 'Michael da Costa Móra' },
  { id: 14, nome: 'Sérgio Johann Filho' },
  { id: 15, nome: 'Cristina Moreira Nunes' },
  { id: 16, nome: 'Edson Ifarraguirre Moreno' },
  { id: 17, nome: 'Cassio André Wailer Trindade' },
  { id: 18, nome: 'Luis Evandro Hinrichsen' },
  { id: 19, nome: 'Lucas Bonacina Roldan' },
  { id: 20, nome: 'Avelino Francisco Zorzo' },
  { id: 21, nome: 'Daniel Dalalana Bertoglio' },
  { id: 22, nome: 'Alvaro Menezes' },
  { id: 23, nome: 'Rafael Matone Chanin' },
  { id: 24, nome: 'Dilnei Venturini' },
  { id: 25, nome: 'Luciane Fortes' },
  { id: 26, nome: 'Jorge Horacio Nicolas Audy' },
  { id: 27, nome: 'Marcelo Veiga Neves' },
];

export const professores: Map<number, Professor> = new Map(
  professoresList.map((professor) => [professor.id, professor])
);