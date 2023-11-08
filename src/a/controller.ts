import { Controller, Get } from '@nestjs/common';
import { Service } from '.';

@Controller()
export class HttpController {
  constructor(private readonly a: Service) {}

  @Get()
  getHello(): string {
    return 'Hello World';
  }
}
