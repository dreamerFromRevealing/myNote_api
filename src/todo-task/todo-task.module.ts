import {Module} from '@nestjs/common';
import {TodoTaskService} from './todo-task.service';
import {TodoTaskResolver} from './todo-task.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoTask, TodoTaskSchema} from "./todo-task.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoTask.name, schema: TodoTaskSchema}])
  ],
  providers: [TodoTaskService, TodoTaskResolver]
})
export class TodoTaskModule {}
