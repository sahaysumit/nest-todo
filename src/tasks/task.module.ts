import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
// import { TaskRepository } from './task.repository';

@Module({
//   imports: [TypeOrmModule.forFeature([TaskRepository])],
  imports: [TaskEntity],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService]
})
export class TaskModule {}
