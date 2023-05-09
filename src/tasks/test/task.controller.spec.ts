import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';
import { Task } from './task.entity';

describe('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
  });

  describe('createTask', () => {
    it('should create a task and return it', async () => {
      const taskDto: CreateTaskDto = {
        title: 'Test Task',
        description: 'This is a test task',
        completed: false,
      };
      const createdTask: Task = {
        id: 1,
        title: 'Test Task',
        description: 'This is a test task',
        completed: false,
      };
      jest.spyOn(service, 'createTask').mockResolvedValue(createdTask);

      expect(await controller.createTask(taskDto)).toBe(createdTask);
    });
  });

  describe('getTasks', () => {
    it('should return an array of tasks', async () => {
      const tasks: Task[] = [
        {
          id: 1,
          title: 'Test Task 1',
          description: 'This is a test task 1',
          completed: false,
        },
        {
          id: 2,
          title: 'Test Task 2',
          description: 'This is a test task 2',
          completed: true,
        },
      ];
      jest.spyOn(service, 'getTasks').mockResolvedValue(tasks);

      expect(await controller.getTasks()).toBe(tasks);
    });
  });

  describe('getTaskById', () => {
    it('should return a task with the specified id', async () => {
      const task: Task = {
        id: 1,
        title: 'Test Task',
        description: 'This is a test task',
        completed: false,
      };
      jest.spyOn(service, 'getTaskById').mockResolvedValue(task);

      expect(await controller.getTaskById(task.id)).toBe(task);
    });
  });

  describe('deleteTask', () => {
    it('should delete the task with the specified id', async () => {
      const taskId = 1;
      jest.spyOn(service, 'deleteTask').mockResolvedValue();

      expect(await controller.deleteTask(taskId)).toBeUndefined();
    });
  });

  describe('updateTask', () => {
    it('should update the task with the specified id and return it', async () => {
      const taskId = 1;
      const updateTaskDto = {
        title: 'Updated Test Task',
        description: 'This is an updated test task',
        completed: true,
      };
      const updatedTask: Task = {
        id: taskId,
        title: 'Updated Test Task',
        description: 'This is an updated test task',
        completed: true,
      };
      jest.spyOn(service, 'updateTask').mockResolvedValue(updatedTask);

      expect(await controller.updateTask(taskId, updateTaskDto)).toBe(updatedTask);
    });
  });
});
