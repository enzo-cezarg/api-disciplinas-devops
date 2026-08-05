import { Injectable, NotFoundException } from '@nestjs/common';
import { Disciplina, disciplinas } from '../../data/disciplinas';

@Injectable()
export class DisciplinasService {
  findAll(): Disciplina[] {
    return disciplinas;
  }

  findId(id: number): Disciplina {
    const disciplina = disciplinas.find((e) => e.id === id);

    if (!disciplina) {
      throw new NotFoundException(`Disciplina de id ${id} não encontrada`);
    }

    return disciplina;
  }
}
