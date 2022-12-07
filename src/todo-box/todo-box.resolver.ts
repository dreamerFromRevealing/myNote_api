import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TodoBox} from "./todo-box.model";
import {TodoBoxService} from "./todo-box.service";
import {Schema as MongooseSchema} from 'mongoose';
import {CreateTodoBoxInput, ListTodoBoxInput, UpdateTodoBoxInput} from "./todo-box.inputs";

@Resolver(() => TodoBox)
export class TodoBoxResolver {
  constructor(private todoBoxService: TodoBoxService) {}

  @Query(() => TodoBox)
  async todoBox(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.todoBoxService.getById(_id)
  }

  @Query(() => [TodoBox])
  async todoBoxes (@Args('filters', {nullable: true}) filters?: ListTodoBoxInput) {
    return this.todoBoxService.list(filters)
  }

  @Mutation(() => TodoBox)
  async createTodoBox(@Args('payload') payload: CreateTodoBoxInput) {
    return this.todoBoxService.create(payload)
  }

  @Mutation(() => TodoBox)
  async updateTodoBox(@Args('payload') payload: UpdateTodoBoxInput) {
    return this.todoBoxService.update(payload)
  }

  @Mutation(() => TodoBox)
  async deleteTodoBox(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.todoBoxService.delete(_id)
  }
}
