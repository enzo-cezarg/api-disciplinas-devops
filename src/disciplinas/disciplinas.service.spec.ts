import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinasService } from './disciplinas.service';
import { NotFoundException } from '@nestjs/common';

describe('DisciplinasService', () => {
  let service: DisciplinasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplinasService],
    }).compile();

    service = module.get<DisciplinasService>(DisciplinasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deve retornar a disciplina quando o id existe', () => {
    const resultado = service.findId(1);

    expect(resultado).toBeDefined();
    expect(resultado.id).toBe(1);
  });

  it('deve lançar NotFoundException quando o id não existe', () => {
    expect(() => service.findId(999)).toThrow(NotFoundException);
  });
});
