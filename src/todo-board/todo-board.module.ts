import {forwardRef, Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {TodoBoard, TodoBoardSchema} from "./todo-board.model";
import { TodoBoardService } from './todo-board.service';
import { TodoBoardResolver } from './todo-board.resolver';
import {TodoBox, TodoBoxSchema} from "../todo-box/todo-box.model";
import {TodoBoxModule} from "../todo-box/todo-box.module";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TodoBoard.name, schema: TodoBoardSchema}, {name: TodoBox.name, schema: TodoBoxSchema}]),
    forwardRef(() =>  TodoBoxModule)
  ],
  providers: [TodoBoardService, TodoBoardResolver],
})
export class TodoBoardModule {}
