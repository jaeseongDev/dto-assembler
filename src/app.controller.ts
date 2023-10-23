import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello() {
    return await this.appService.getHello();
  }

  @Get()
  async getHello2() {
    return await this.appService.getHello2();
  }

  @Get('detail')
  async getHello3() {
    return await this.appService.getHello3();
  }

  @Put('detail')
  async getHello3() {
    return await this.appService.getHello3();
  }
}
