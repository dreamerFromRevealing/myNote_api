import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TodoTask} from "./todo-task.model";
import {TodoTaskService} from "./todo-task.service";
import {Schema as MongooseSchema} from 'mongoose';
import {CreateTodoTaskInput, ListTodoTaskInput, UpdateTodoTaskInput} from "./todo-task.inputs";

@Resolver(() => TodoTask)
export class TodoTaskResolver {
  constructor(private todoTaskService: TodoTaskService) {}

  @Query(() => TodoTask)
  async todoTask(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.todoTaskService.getById(_id)
  }

  @Query(() => [TodoTask])
  async todoTasks (@Args('filters', {nullable: true}) filters?: ListTodoTaskInput) {
    return this.todoTaskService.list(filters)
  }

  @Mutation(() => TodoTask)
  async createTodoTask(@Args('payload') payload: CreateTodoTaskInput) {
    return this.todoTaskService.create(payload)
  }

  @Mutation(() => TodoTask)
  async updateTodoTask(@Args('payload') payload: UpdateTodoTaskInput) {
    return this.todoTaskService.update(payload)
  }

  @Mutation(() => TodoTask)
  async deleteTodoTask(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.todoTaskService.delete(_id)
  }
}
