import { Module } from '@nestjs/common';
import { gitBashController } from './gitBash.controller';
import { gitBashService } from './gitBash.service';

@Module({
  imports: [],
  controllers: [gitBashController],
  providers: [gitBashService],
})
export class GitBashModule { }
