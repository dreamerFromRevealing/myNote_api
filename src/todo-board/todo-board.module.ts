import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoBoard, TodoBoardSchema} from "./todo-board.model";
import { TodoBoardService } from './todo-board.service';
import { TodoBoardResolver } from './todo-board.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoBoard.name, schema: TodoBoardSchema}])
  ],
  providers: [TodoBoardService, TodoBoardResolver],
})
export class TodoBoardModule {}
