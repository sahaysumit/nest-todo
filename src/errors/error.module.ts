import { Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from '../logger/logger.module';
import { ErrorFilter } from './error.filter';

@Global()
@Module({
  imports:[LoggerModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class ErrorModule {}
