import { Module } from '@nestjs/common';
import { DisciplinasModule } from './disciplinas/disciplinas.module';

@Module({
  imports: [DisciplinasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
