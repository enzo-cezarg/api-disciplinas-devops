import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DisciplinasService } from './disciplinas.service';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private disciplinasService: DisciplinasService) { }

  @Get()
  findAll() {
    return this.disciplinasService.findAll();
  }

  @Get(':id')
  findId(@Param('id', ParseIntPipe) id: number) {
    return this.disciplinasService.findId(id);
  }
}
