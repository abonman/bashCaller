import { Controller, Get, Logger } from '@nestjs/common';
import { AppTitleDTO } from './app.dto';
import { AppService } from './app.service';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('main')
@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppTitleDTO {
    // Logger.log('Calling getHello()', "mainController");
    return this.appService.getHello();
  }
}
