import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTasks(): TaskEntity[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): TaskEntity {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): TaskEntity {
    const task = new TaskEntity();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.completed = createTaskDto.completed;
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): TaskEntity {
    const task = new TaskEntity();
    task.id = id;
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.completed = updateTaskDto.completed;
    return this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): TaskEntity {
    return this.taskService.deleteTask(id);
  }
}
