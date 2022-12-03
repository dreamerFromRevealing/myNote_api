import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TodoCollection} from "./todo-collection.model";
import {TodoCollectionService} from "./todo-collection.service";
import {Schema as MongooseSchema} from 'mongoose';
import {
  CreateTodoCollectionInput,
  ListTodoCollectionInput,
  UpdatePositionTodoCollectionInput,
  UpdateTodoCollectionInput
} from "./todo-collection.inputs";

@Resolver(() => TodoCollection)
export class TodoCollectionResolver {
  constructor(private todoCollectionService: TodoCollectionService) {}

  @Query(() => TodoCollection)
  async todoCollection(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.todoCollectionService.getById(_id)
  }

  @Query(() => [TodoCollection])
  async todoCollections (@Args('filters', {nullable: true}) filters?: ListTodoCollectionInput) {
    return this.todoCollectionService.list(filters)
  }

  @Mutation(() => TodoCollection)
  async createTodoCollection(@Args('payload') payload: CreateTodoCollectionInput) {
    return this.todoCollectionService.create(payload)
  }

  @Mutation(() => TodoCollection)
  async updateTodoCollection(@Args('payload') payload: UpdateTodoCollectionInput) {
    return this.todoCollectionService.update(payload)
  }

  @Mutation(() => TodoCollection)
  async deleteTodoCollection(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.todoCollectionService.delete(_id)
  }

  @Mutation(() => Boolean)
  async updatePositionTodoCollection(@Args('payload') payload: UpdatePositionTodoCollectionInput) {
    return this.todoCollectionService.updatePosition(payload)
  }
}
