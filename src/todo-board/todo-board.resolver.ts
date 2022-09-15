import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TodoBoard} from "./todo-board.model";
import {TodoBoardService} from "./todo-board.service";
import {Schema as MongooseSchema} from 'mongoose';
import {CreateTodoBoardInput, ListTodoBoardInput, UpdateTodoBoardInput} from "./todo-board.inputs";

@Resolver(() => TodoBoard)
export class TodoBoardResolver {
  constructor(private todoBoardService: TodoBoardService) {}

  @Query(() => TodoBoard)
  async todoBoard(@Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId) {
    return this.todoBoardService.getById(_id)
  }

  @Query(() => [TodoBoard])
  async todoBoards (@Args('filters', {nullable: true}) filters?: ListTodoBoardInput) {
    return this.todoBoardService.list(filters)
  }

  @Mutation(() => TodoBoard)
  async createTodoBoard(@Args('payload') payload: CreateTodoBoardInput) {
    return this.todoBoardService.create(payload)
  }

  @Mutation(() => TodoBoard)
  async updateTodoBoard(@Args('payload') payload: UpdateTodoBoardInput) {
    return this.todoBoardService.update(payload)
  }

  @Mutation(() => TodoBoard)
  async deleteTodoBoard(
    @Args('_id', {type: () => String}) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.todoBoardService.delete(_id)
  }
}
