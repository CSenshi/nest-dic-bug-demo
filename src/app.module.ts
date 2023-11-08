import { Module } from '@nestjs/common';
import { HttpController, Service } from './a';

@Module({
  imports: [],
  controllers: [HttpController],
  providers: [Service],
})
export class AppModule {}
