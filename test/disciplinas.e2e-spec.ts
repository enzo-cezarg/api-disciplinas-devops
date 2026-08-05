import { Test, TestingModule } from "@nestjs/testing";
import { DisciplinasModule } from "../src/disciplinas/disciplinas.module";
import { INestApplication } from "@nestjs/common";
import request = require('supertest');

describe('Disciplinas (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DisciplinasModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('listar todas as disciplinas', () => {
    return request(app.getHttpServer())
      .get('/disciplinas')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(20);
        expect(res.body[0]).toHaveProperty('trimestre');
      })
  });

  it('buscar a disciplina de id 14', () => {
    return request(app.getHttpServer())
      .get('/disciplinas/14')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(false);
        expect(res.body.id).toBe(14);
        expect(res.body).toHaveProperty('professores');
        expect(res.body.professores).toHaveLength(3);
      })
  })

});