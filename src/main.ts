import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation/validation.pipe';
import { ErrorFilter } from './errors/error.filter';
import { LoggerModule } from './logger/logger.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use the validation pipe for automatic input validation
  app.useGlobalPipes(new ValidationPipe());

  // Use the error filter for consistent error responses
  // const logger = app.select(LoggerModule).get('LoggerService');
  // app.useGlobalFilters(new ErrorFilter(logger));

  // Create Swagger documentation
  const options = new DocumentBuilder()
    .setTitle('To-Do API')
    .setDescription('A simple REST API for a to-do application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Start the application
  await app.listen(5000);
}
bootstrap();
