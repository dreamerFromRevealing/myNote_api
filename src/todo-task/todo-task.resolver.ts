import {Resolver} from '@nestjs/graphql';
import {TodoTask} from "./todo-task.model";
import {TodoTaskService} from "./todo-task.service";

@Resolver(() => TodoTask)
export class TodoTaskResolver {
  constructor(private todoTaskService: TodoTaskService) {}
}
