import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

import { ValidationModule } from './validation/validation.module';
import { ErrorModule } from './errors/error.module';
import { SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './logger/logger.service';
import { TaskModule } from './tasks/task.module';


@Module({
  imports: [
    ConfigModule,
    LoggerModule,
    TaskModule,
    ValidationModule,
    ErrorModule,
    SwaggerModule
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
