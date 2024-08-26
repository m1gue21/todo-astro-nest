import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Tasks } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly taskRepository: Repository<Tasks>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.save({
      ...createTaskDto,
    });
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new BadRequestException('task not found');
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);
    return await this.taskRepository.update(id, {
      ...updateTaskDto,
    });
  }

  async toggleTaskCompletion(id: number): Promise<Tasks> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) {
      throw new Error('Task not found');
    }

    task.completed = !task.completed;

    return this.taskRepository.save(task);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.taskRepository.softDelete({ id });
  }
}
