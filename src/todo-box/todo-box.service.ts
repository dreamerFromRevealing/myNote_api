import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {TodoBox, TodoBoxDocument} from "./todo-box.model";

@Injectable()
export class TodoBoxService {
  constructor(@InjectModel(TodoBox.name) private todoBoxModel: Model<TodoBoxDocument>) {}


}
