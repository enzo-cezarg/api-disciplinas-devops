import { Test, TestingModule } from '@nestjs/testing';
import { DisciplinasController } from './disciplinas.controller';
import { DisciplinasService } from './disciplinas.service';
import { NotFoundException } from '@nestjs/common';

describe('DisciplinasController', () => {
  let controller: DisciplinasController;
  let service: DisciplinasService;

  const mockDisciplinasService = {
    findId: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplinasController],
      providers: [
        { provide: DisciplinasService, useValue: mockDisciplinasService },
      ],
    }).compile();

    controller = module.get<DisciplinasController>(DisciplinasController);
    service = module.get<DisciplinasService>(DisciplinasService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('deve retornar a disciplina quando o service encontra', () => {
    const disciplinaMock = { id: 1, nome: 'teste', professores: [] };
    mockDisciplinasService.findId.mockReturnValue(disciplinaMock);

    const resultado = controller.findId(1);

    expect(resultado).toEqual(disciplinaMock);
    expect(service.findId).toHaveBeenCalledWith(1);
    expect(service.findId).toHaveBeenCalledTimes(1);
  });

  it('deve propagar o erro quando o service não encontra a disciplina', () => {
    mockDisciplinasService.findId.mockImplementation(() => {
      throw new NotFoundException('Disciplina com id 99 não encontrada');
    });

    expect(() => controller.
      findId(99)).toThrow(NotFoundException);
  });
})