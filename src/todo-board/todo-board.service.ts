import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {TodoBoard, TodoBoardDocument} from "./todo-board.model";

@Injectable()
export class TodoBoardService {
  constructor(@InjectModel(TodoBoard.name) private todoBoardModel: Model<TodoBoardDocument>) {}
}
