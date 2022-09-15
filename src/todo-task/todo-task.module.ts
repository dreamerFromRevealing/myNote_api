import { Module } from '@nestjs/common';
import { TodoTaskService } from './todo-task.service';
import { TodoTaskResolver } from './todo-task.resolver';

@Module({
  providers: [TodoTaskService, TodoTaskResolver]
})
export class TodoTaskModule {}
