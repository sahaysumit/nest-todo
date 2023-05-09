// import { EntityRepository, Repository } from 'typeorm';
// import { TaskEntity } from './task.entity';
// import { CreateTaskDto, UpdateTaskDto } from './task.dto';

// @EntityRepository(TaskEntity)
// export class TaskRepository extends Repository<TaskEntity> {
//   async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
//     const { title, description } = createTaskDto;

//     const task = new TaskEntity();
//     task.title = title;
//     task.description = description;
//     task.completed = false;
//     // await task.save();

//     return task;
//   }

//   async getTasks(): Promise<TaskEntity[]> {
//     const tasks = await this.find();
//     return tasks;
//   }

//   async getTaskById(id: string): Promise<TaskEntity> {
//     const task = await this.findByIds([id]);
//     return task[0];
//   }

//   async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
//     const { title, description, completed } = updateTaskDto;

//     const task = await this.getTaskById(id);
//     task.title = title;
//     task.description = description;
//     task.completed = completed;
//     // await task.save();

//     return task;
//   }

//   async deleteTask(id: string): Promise<void> {
//     await this.delete(id);
//   }
// }
