import {forwardRef, Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoBox, TodoBoxSchema} from "./todo-box.model";
import { TodoBoxService } from './todo-box.service';
import { TodoBoxResolver } from './todo-box.resolver';
import {TodoBoard, TodoBoardSchema} from "../todo-board/todo-board.model";
import {TodoBoardModule} from "../todo-board/todo-board.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoBox.name, schema: TodoBoxSchema}, {name: TodoBoard.name, schema: TodoBoardSchema}]),
    forwardRef(() =>  TodoBoardModule)
  ],
  providers: [TodoBoxService, TodoBoxResolver],
})
export class TodoBoxModule {}
