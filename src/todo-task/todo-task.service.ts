import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {TodoTask, TodoTaskDocument} from "./todo-task.model";

@Injectable()
export class TodoTaskService {
  constructor(@InjectModel(TodoTask.name) private todoTaskModel: Model<TodoTaskDocument>) {}
}
