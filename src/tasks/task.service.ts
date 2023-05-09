import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: TaskEntity[] = [];

  getAllTasks(): TaskEntity[] {
    return this.tasks;
  }

  getTaskById(id: string): TaskEntity {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: TaskEntity): TaskEntity {
    task.id = uuidv4();
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, task: TaskEntity): TaskEntity {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks[index] = task;
      return task;
    }
    return null;
  }

  deleteTask(id: string): TaskEntity {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const task = this.tasks[index];
      this.tasks.splice(index, 1);
      return task;
    }
    return null;
  }
}
