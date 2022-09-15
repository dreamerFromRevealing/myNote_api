import {Resolver} from '@nestjs/graphql';
import {TodoBoard} from "./todo-board.model";
import {TodoBoardService} from "./todo-board.service";

@Resolver(() => TodoBoard)
export class TodoBoardResolver {
  constructor(private todoBoardService: TodoBoardService) {}
}
