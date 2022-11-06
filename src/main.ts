import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { loggerOptions } from './logging/logging.model';
import { WinstonModule } from 'nest-winston';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.useLogger(
    WinstonModule.createLogger(loggerOptions)
  );
  
  const options = new DocumentBuilder()
    .setTitle('Bash Caller App')
    .setDescription('TBash Script Executer API description')
    .setVersion('1.0')
    .addTag('bash-caller')
    .addTag('main')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
