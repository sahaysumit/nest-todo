import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
