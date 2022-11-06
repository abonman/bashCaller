import { Injectable } from '@nestjs/common';
import { AppTitleDTO } from './app.dto';

@Injectable()
export class AppService {
  getHello(): AppTitleDTO {
    return {
      title: 'Bash-caller app service',
      instructions: [
        'This is a test of the bash-caller app service',
        'Api will execute bash commands and return the results',
      ],
    };
  }
}
